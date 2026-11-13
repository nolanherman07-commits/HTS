import { startScene } from "./scene.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// Leads go to this email through FormSubmit (formsubmit.co). The first message
// sends an "Activate form" email to this address; click it once.
const LEAD_EMAIL = "nolan@nestlewoodrealty.com";
const FORM_ENDPOINT = "https://formsubmit.co/ajax/" + LEAD_EMAIL;

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
const HEADER_H = 84;

// ---- smooth scrolling (Lenis) wired into GSAP's clock ----
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const scrollToTarget = (target) => {
  if (lenis) lenis.scrollTo(target, { offset: target === 0 ? 0 : -HEADER_H + 1, duration: 1.4 });
  else if (target === 0) scrollTo({ top: 0 });
  else target.scrollIntoView({ behavior: "auto" });
};

// ---- 3D scene ----
let scene = null;
try { scene = startScene($("#bg"), { reduced }); } catch (e) { scene = null; }
if (!scene) root.classList.add("no-webgl");

// ---- intro: logo draws, screen splits, cubes assemble ----
function finishIntro() {
  if (root.classList.contains("opened")) return;
  root.classList.add("opened");
  scene && scene.assemble();
  setTimeout(() => { root.classList.add("intro-done"); lenis && lenis.start(); }, 1400);
}
const seen = sessionStorage.getItem("hts-intro");
if (reduced || seen) {
  root.classList.add("skip-intro");
  finishIntro();
} else {
  sessionStorage.setItem("hts-intro", "1");
  root.classList.add("intro-run");
  lenis && lenis.stop();
  setTimeout(finishIntro, 2500);
  $("#intro").addEventListener("click", finishIntro, { once: true });
}

// ---- header + in-page links ----
const header = $("#top");
const onScroll = () => header.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

$$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
  const id = a.getAttribute("href");
  const target = id === "#" || id === "#top" ? 0 : $(id);
  if (target === null) return;
  e.preventDefault();
  closeMenu();
  scrollToTarget(target);
  if (target !== 0) history.replaceState(null, "", id);
}));

// ---- mobile menu ----
const menuBtn = $("#menuBtn"), menu = $("#mobileMenu");
function closeMenu() {
  if (!menu.classList.contains("open")) return;
  menu.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  root.classList.remove("menu-open");
  lenis && lenis.start();
}
menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  root.classList.toggle("menu-open", open);
  if (open) { lenis && lenis.stop(); $("a", menu).focus(); } else { lenis && lenis.start(); }
});
addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

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

// ---- scroll animations (GSAP ScrollTrigger) ----
if (reduced) {
  $$(".reveal").forEach((el) => el.classList.add("in"));
} else {
  // reveal in small staggered batches as they enter
  ScrollTrigger.batch(".reveal", {
    start: "top 88%",
    once: true,
    onEnter: (els) => {
      els.forEach((el) => el.classList.add("in"));
      gsap.to(els, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.1, overwrite: true });
    },
  });

  // hero text drifts up and fades as you leave it
  gsap.to(".hero-inner", { yPercent: -18, opacity: 0, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".giant span", { yPercent: -25, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // work: pin the section and slide the sites sideways on desktop
  ScrollTrigger.matchMedia({
    "(min-width: 900px)": () => {
      const track = $("#track");
      const dist = () => Math.max(0, track.scrollWidth - innerWidth + 80);
      const tween = gsap.to(track, {
        x: () => -dist(), ease: "none",
        scrollTrigger: {
          trigger: "#work", pin: ".work-pin", start: "top top", end: () => "+=" + dist(),
          scrub: 0.6, invalidateOnRefresh: true,
          onUpdate: (st) => gsap.set("#workBar", { scaleX: st.progress }),
        },
      });
      return () => tween.kill();
    },
  });

  // portrait and phone mockups float slightly against the scroll
  $$(".parallax").forEach((el) => gsap.fromTo(el, { yPercent: 6 }, { yPercent: -6, ease: "none",
    scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } }));
}
addEventListener("load", () => ScrollTrigger.refresh());

// ---- count-up numbers ----
$$("[data-count]").forEach((el) => {
  const end = +el.dataset.count, pre = el.dataset.pre || "", suf = el.dataset.suf || "";
  if (reduced) { el.textContent = pre + end + suf; return; }
  const o = { v: 0 };
  ScrollTrigger.create({
    trigger: el, start: "top 85%", once: true,
    onEnter: () => gsap.to(o, { v: end, duration: 1.4, ease: "power3.out",
      onUpdate: () => { el.textContent = pre + Math.round(o.v) + suf; } }),
  });
});

// ---- tilt, magnetic buttons, cursor (mouse only) ----
if (matchMedia("(hover: hover) and (pointer: fine)").matches && !reduced) {
  $$(".tilt").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, { rotateY: x * 7, rotateX: -y * 7, y: -4, transformPerspective: 900, duration: 0.4, ease: "power2.out" });
      el.style.setProperty("--mx", (x + 0.5) * 100 + "%");
      el.style.setProperty("--my", (y + 0.5) * 100 + "%");
    });
    el.addEventListener("pointerleave", () => gsap.to(el, { rotateY: 0, rotateX: 0, y: 0, duration: 0.6, ease: "power3.out" }));
  });

  $$(".btn.gold").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.25, duration: 0.4, ease: "power2.out" });
    });
    b.addEventListener("pointerleave", () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" }));
  });

  const ring = $("#cursor");
  const qx = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power3" });
  const qy = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power3" });
  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse" || (!e.clientX && !e.clientY)) return;
    qx(e.clientX); qy(e.clientY); ring.classList.add("on");
  }, { passive: true });
  $$("a, button, .tilt, input, select, textarea").forEach((el) => {
    el.addEventListener("pointerenter", () => ring.classList.add("big"));
    el.addEventListener("pointerleave", () => ring.classList.remove("big"));
  });
}

// ---- form: inline errors, loading state, animated success ----
const form = $("#leadForm"), note = $("#formNote");
const rules = {
  name: (v) => v.trim().length >= 2 || "Please add your name.",
  phone: (v) => v.replace(/\D/g, "").length >= 10 || "Please add a 10-digit phone number.",
  email: (v) => !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "That email doesn’t look right.",
};
function check(field) {
  const rule = rules[field.name];
  if (!rule) return true;
  const res = rule(field.value);
  const msg = $(`#err-${field.name}`);
  const ok = res === true;
  field.setAttribute("aria-invalid", String(!ok));
  msg.textContent = ok ? "" : res;
  return ok;
}
Object.keys(rules).forEach((n) => {
  const f = form.elements[n];
  f.addEventListener("blur", () => { if (f.value) check(f); });
  f.addEventListener("input", () => { if (f.getAttribute("aria-invalid") === "true") check(f); });
});
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  if (form._honey.value) return;
  const bad = Object.keys(rules).map((n) => form.elements[n]).filter((f) => !check(f));
  if (bad.length) {
    bad[0].focus();
    if (!reduced) gsap.fromTo(bad[0], { x: -8 }, { x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    note.textContent = "Please fix the highlighted field.";
    note.className = "fine err";
    return;
  }
  const btn = form.querySelector("button[type=submit]"), label = btn.innerHTML;
  btn.disabled = true; btn.classList.add("loading"); btn.innerHTML = '<span class="spin" aria-hidden="true"></span>Sending…';
  note.textContent = ""; note.className = "fine";
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
    form.reset();
    form.classList.add("sent");
    $("#formDone").hidden = false;
    $("#formDone").focus();
  } catch (e) {
    btn.innerHTML = label; btn.disabled = false; btn.classList.remove("loading");
    note.className = "fine err";
    note.innerHTML = 'Couldn’t send just now. Call or text <a href="tel:+18284045335">828-404-5335</a>.';
  }
});

$("#yr").textContent = new Date().getFullYear();
