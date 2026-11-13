import { startScene } from "./scene.js";

// Leads go to this email through FormSubmit (formsubmit.co). The first message
// sends an "Activate form" email to this address; click it once.
const LEAD_EMAIL = "nolan@nestlewoodrealty.com";
const FORM_ENDPOINT = "https://formsubmit.co/ajax/" + LEAD_EMAIL;

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;

// ---- 3D scene ----
let scene = null;
try { scene = startScene($("#bg"), { reduced }); } catch (e) { scene = null; }
if (!scene) root.classList.add("no-webgl");

// ---- intro: logo draws, screen splits, cubes assemble ----
function finishIntro() {
  root.classList.add("opened");
  scene && scene.assemble();
  setTimeout(() => { root.classList.add("intro-done"); }, 1400);
}
const seen = sessionStorage.getItem("hts-intro");
if (reduced || seen) {
  root.classList.add("skip-intro");
  finishIntro();
} else {
  sessionStorage.setItem("hts-intro", "1");
  root.classList.add("intro-run");
  setTimeout(finishIntro, 2500);
  $("#intro").addEventListener("click", finishIntro, { once: true });
}

// ---- header ----
const header = $("#top");
const onScroll = () => {
  header.classList.toggle("scrolled", scrollY > 40);
  const p = Math.min(scrollY / (innerHeight * 0.9), 1);
  root.style.setProperty("--hero-p", p.toFixed(3));
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---- headline words rise in ----
let wi = 0;
function splitWords(node) {
  [...node.childNodes].forEach((ch) => {
    if (ch.nodeType === 3) {
      const frag = document.createDocumentFragment();
      ch.textContent.split(/(\s+)/).forEach((w) => {
        if (!w) return;
        if (!w.trim()) { frag.appendChild(document.createTextNode(w)); return; }
        const o = document.createElement("span"); o.className = "w";
        const i = document.createElement("span"); i.style.setProperty("--i", wi++); i.textContent = w;
        o.appendChild(i); frag.appendChild(o);
      });
      ch.replaceWith(frag);
    } else if (ch.nodeType === 1) splitWords(ch);
  });
}
$$("[data-split]").forEach(splitWords);

// ---- reveal on scroll ----
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
$$(".reveal").forEach((el) => io.observe(el));

// ---- count-up numbers ----
const cio = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  cio.unobserve(e.target);
  const el = e.target, end = +el.dataset.count, pre = el.dataset.pre || "", suf = el.dataset.suf || "";
  if (reduced) { el.textContent = pre + end + suf; return; }
  const t0 = performance.now(), dur = 1400;
  const step = (now) => {
    const k = Math.min((now - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
    el.textContent = pre + v + suf;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}), { threshold: 0.6 });
$$("[data-count]").forEach((el) => cio.observe(el));

// ---- work: pinned horizontal scroll on desktop ----
const work = $("#work"), track = $("#track");
function workScroll() {
  if (!work || innerWidth < 900 || reduced) { track.style.transform = ""; return; }
  const r = work.getBoundingClientRect();
  const total = work.offsetHeight - innerHeight;
  const p = Math.min(Math.max(-r.top / total, 0), 1);
  const max = track.scrollWidth - innerWidth + 80;
  track.style.transform = `translate3d(${-p * max}px,0,0)`;
  $("#workBar").style.transform = `scaleX(${p})`;
}
function sizeWork() {
  if (innerWidth < 900 || reduced) { work.style.height = ""; return; }
  work.style.height = (track.scrollWidth - innerWidth + innerHeight + 200) + "px";
}
addEventListener("scroll", workScroll, { passive: true });
addEventListener("resize", () => { sizeWork(); workScroll(); });
addEventListener("load", () => { sizeWork(); workScroll(); });
sizeWork(); workScroll();

// ---- tilt on cards ----
if (matchMedia("(hover: hover)").matches && !reduced) {
  $$(".tilt").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
      el.style.setProperty("--mx", (x + 0.5) * 100 + "%");
      el.style.setProperty("--my", (y + 0.5) * 100 + "%");
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });

  // gold cursor ring
  const ring = $("#cursor");
  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
  addEventListener("pointermove", (e) => { if (e.pointerType !== "mouse" || (!e.clientX && !e.clientY)) return; x = e.clientX; y = e.clientY; ring.classList.add("on"); }, { passive: true });
  const loop = () => {
    rx += (x - rx) * 0.2; ry += (y - ry) * 0.2;
    ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    requestAnimationFrame(loop);
  };
  loop();
  $$("a, button, .tilt, input, select, textarea").forEach((el) => {
    el.addEventListener("pointerenter", () => ring.classList.add("big"));
    el.addEventListener("pointerleave", () => ring.classList.remove("big"));
  });
}

// ---- compare table ----
const tbl = $("#tbl"), moreBtn = $("#moreBtn");
moreBtn.addEventListener("click", () => {
  const c = tbl.classList.toggle("collapsed");
  moreBtn.textContent = c ? "Show every feature" : "Show fewer";
});

// ---- form ----
const form = $("#leadForm"), note = $("#formNote");
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  if (!form.name.value.trim() || !form.phone.value.trim()) { note.textContent = "Please add your name and phone number."; return; }
  if (form._honey.value) return;
  const btn = form.querySelector("button"), label = btn.textContent;
  btn.disabled = true; btn.textContent = "Sending…";
  const data = Object.fromEntries(new FormData(form));
  delete data._honey;
  try {
    const r = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, _subject: "HTS website lead: " + data.name, _template: "table", _captcha: "false" }),
    });
    const res = await r.json().catch(() => ({}));
    if (!r.ok || String(res.success) !== "true") throw new Error(res.message || "not delivered");
    form.reset(); btn.textContent = "Sent! Nolan will be in touch.";
    note.textContent = "Thanks! Expect a call or text soon.";
  } catch (e) {
    btn.textContent = label; btn.disabled = false;
    note.innerHTML = 'Couldn’t send. Call or text <a href="tel:+18284045335">828-404-5335</a>.';
  }
});

$("#yr").textContent = new Date().getFullYear();
