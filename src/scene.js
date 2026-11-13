// Hero 3D scene: gold and charcoal cubes assemble into a sphere, a gold chain swings
// behind it, and on scroll the sphere breaks apart into floating cubes.
// Then (setGrid 0..1, driven by the "warp" section) the cubes fly back, lock into a
// wall of tiles that fills the screen, a gold flip ripples across it, and the tiles
// burst forward past the camera as the next section rises.
import { BufferAttribute, BufferGeometry, Points, PointsMaterial, AdditiveBlending, CanvasTexture, Color, ACESFilmicToneMapping, AmbientLight, BoxGeometry, CatmullRomCurve3, Clock, DirectionalLight, DynamicDrawUsage, Euler, Group, InstancedMesh, MeshStandardMaterial, Object3D, PMREMGenerator, PerspectiveCamera, Quaternion, Scene, TorusGeometry, Vector3, WebGLRenderer } from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export function startScene(canvas, opts = {}) {
  const reduced = !!opts.reduced;
  const mobile = innerWidth < 760;

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch (e) {
    return null; // no WebGL: the CSS background stays
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 2));
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new PerspectiveCamera(mobile ? 50 : 38, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 14);

  const key = new DirectionalLight(0xfff1d6, 2.2); key.position.set(5, 6, 8); scene.add(key);
  const rim = new DirectionalLight(0x3d8bff, 1.6); rim.position.set(-6, -2, -4); scene.add(rim);
  scene.add(new AmbientLight(0x1b2440, 0.6));

  const world = new Group();
  scene.add(world);

  // ---- cubes ----
  const COUNT = mobile ? 170 : 300;
  const R = mobile ? 1.75 : 2.75;
  const gold = new MeshStandardMaterial({ color: 0xd9a944, metalness: 1, roughness: 0.26 });
  const navy = new MeshStandardMaterial({ color: 0x2a2b31, metalness: 0.7, roughness: 0.28 });
  const ink = new MeshStandardMaterial({ color: 0x15161a, metalness: 0.9, roughness: 0.35 });
  const geo = new BoxGeometry(1, 1, 1);
  const mats = [gold, navy, ink];
  const split = [Math.round(COUNT * 0.34), Math.round(COUNT * 0.4)];
  split.push(COUNT - split[0] - split[1]);
  const baseCols = mats.map((m) => m.color.clone());
  mats.forEach((m) => m.color.set(0xffffff));
  const meshes = mats.map((m, i) => {
    const mesh = new InstancedMesh(geo, m, split[i]);
    for (let j = 0; j < split[i]; j++) mesh.setColorAt(j, baseCols[i]);
    mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    world.add(mesh);
    return mesh;
  });

  const cubes = [];
  const rand = (a, b) => a + Math.random() * (b - a);
  let n = 0;
  const perm = [...Array(COUNT).keys()].sort(() => Math.random() - 0.5);
  meshes.forEach((mesh, mi) => {
    for (let j = 0; j < split[mi]; j++, n++) {
      // Fibonacci sphere target
      const i = perm[n] + 0.5;
      const phi = Math.acos(1 - (2 * i) / COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const sphere = new Vector3(Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi)).multiplyScalar(R);
      const dir = sphere.clone().normalize();
      cubes.push({
        mesh, j, base: baseCols[mi],
        sphere,
        dir,
        start: dir.clone().multiplyScalar(rand(14, 26)).add(new Vector3(rand(-6, 6), rand(-6, 6), rand(-4, 4))),
        scatter: new Vector3(rand(-11, 11), rand(-6.5, 6.5), rand(-7, 3)),
        size: rand(0.28, 0.52) * (mobile ? 0.9 : 1),
        rot: new Euler(rand(0, 6.3), rand(0, 6.3), rand(0, 6.3)),
        spin: new Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(0.6),
        delay: rand(0, 0.55),
        tumble: new Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize(),
        kick: rand(0.7, 1.3),
        phase: rand(0, 6.3),
      });
    }
  });
  // look the cubes along the sphere normal so they tile like the video
  const up = new Vector3(0, 0, 1);
  cubes.forEach((c) => { c.align = new Quaternion().setFromUnitVectors(up, c.dir); });

  // ---- wall of tiles that fills the screen ----
  const GRID_Z = 5; // tiles sit this far in front of the origin, facing the camera
  const gperm = [...Array(COUNT).keys()].sort(() => Math.random() - 0.5);
  let gridCols = 1, tile = 0.5;
  function layoutGrid() {
    const dist = 14 - GRID_Z;
    const h = 2 * Math.tan((camera.fov * Math.PI) / 360) * dist * 1.08;
    const w = h * camera.aspect;
    gridCols = Math.max(4, Math.round(Math.sqrt((COUNT * w) / h)));
    const rows = Math.ceil(COUNT / gridCols);
    const cell = Math.max(w / gridCols, h / rows);
    tile = cell * 0.9;
    cubes.forEach((c, n) => {
      const g = gperm[n], col = g % gridCols, row = Math.floor(g / gridCols);
      c.grid = new Vector3((col - (gridCols - 1) / 2) * cell, ((rows - 1) / 2 - row) * cell, GRID_Z);
      c.col = col / Math.max(1, gridCols - 1);
      c.row = row / Math.max(1, rows - 1);
      c.center = Math.min(1, Math.hypot(c.grid.x / (w / 2), c.grid.y / (h / 2)) / 1.2);
    });
  }

  // ---- moving star field behind everything ----
  const STARS = mobile ? 700 : 1600;
  const starGeo = new BufferGeometry();
  const sp0 = new Float32Array(STARS * 3), sc = new Float32Array(STARS * 3);
  const starSpeed = new Float32Array(STARS);
  const palette = [new Color(0xffffff), new Color(0xffe6a8), new Color(0x9cc3ff), new Color(0xfff4dc)];
  for (let i = 0; i < STARS; i++) {
    sp0[i * 3] = rand(-38, 38); sp0[i * 3 + 1] = rand(-24, 24); sp0[i * 3 + 2] = rand(-40, -6);
    const c = palette[(Math.random() * palette.length) | 0];
    sc[i * 3] = c.r; sc[i * 3 + 1] = c.g; sc[i * 3 + 2] = c.b;
    starSpeed[i] = rand(0.15, 0.9);
  }
  starGeo.setAttribute("position", new BufferAttribute(sp0, 3));
  starGeo.setAttribute("color", new BufferAttribute(sc, 3));
  // soft round dot texture so stars glow instead of showing as squares
  const dot = document.createElement("canvas"); dot.width = dot.height = 64;
  const g2 = dot.getContext("2d"), grad = g2.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,1)"); grad.addColorStop(0.25, "rgba(255,255,255,.75)"); grad.addColorStop(1, "rgba(255,255,255,0)");
  g2.fillStyle = grad; g2.fillRect(0, 0, 64, 64);
  const starMat = new PointsMaterial({ size: mobile ? 0.42 : 0.36, map: new CanvasTexture(dot), vertexColors: true, transparent: true,
    opacity: 1, depthWrite: false, blending: AdditiveBlending, sizeAttenuation: true });
  const stars = new Points(starGeo, starMat);
  let lastStarT = 0;
  // a few big bright stars that twinkle
  const BIG = mobile ? 50 : 110;
  const bigGeo = new BufferGeometry(), bp = new Float32Array(BIG * 3), bc = new Float32Array(BIG * 3);
  for (let i = 0; i < BIG; i++) {
    bp[i * 3] = rand(-36, 36); bp[i * 3 + 1] = rand(-22, 22); bp[i * 3 + 2] = rand(-30, -8);
    const c = palette[(Math.random() * palette.length) | 0]; bc[i * 3] = c.r; bc[i * 3 + 1] = c.g; bc[i * 3 + 2] = c.b;
  }
  bigGeo.setAttribute("position", new BufferAttribute(bp, 3)); bigGeo.setAttribute("color", new BufferAttribute(bc, 3));
  const bigMat = starMat.clone(); bigMat.size = mobile ? 1.0 : 0.85;
  const bigStars = new Points(bigGeo, bigMat);
  stars.add(bigStars);
  scene.add(stars);

  // ---- gold chain ----
  const LINKS = mobile ? 34 : 54;
  const linkGeo = new TorusGeometry(0.34, 0.085, 14, 36);
  linkGeo.scale(1.55, 1, 1);
  const chainMat = new MeshStandardMaterial({ color: 0xe6bd5c, metalness: 1, roughness: 0.18 });
  const chain = new InstancedMesh(linkGeo, chainMat, LINKS);
  chain.instanceMatrix.setUsage(DynamicDrawUsage);
  scene.add(chain);
  const curve = new CatmullRomCurve3([new Vector3(), new Vector3(), new Vector3(), new Vector3()]);
  const xAxis = new Vector3(1, 0, 0);

  // ---- state ----
  const dummy = new Object3D();
  const q = new Quaternion(), q2 = new Quaternion();
  const tmp = new Vector3(), tan = new Vector3();
  let mouseX = 0, mouseY = 0, sx = 0, sy = 0;
  let scrollP = 0, sp = 0;
  let assembleStart = null;
  const clock = new Clock();
  let gridP = 0, gp = 0;
  const yAxis = new Vector3(0, 1, 0), qFlip = new Quaternion(), qId = new Quaternion();
  const flashCol = new Color(0xffe08a), col = new Color();
  const wrap = (x) => Math.atan2(Math.sin(x), Math.cos(x));

  addEventListener("pointermove", (e) => {
    mouseX = (e.clientX / innerWidth) * 2 - 1;
    mouseY = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });
  addEventListener("scroll", () => { scrollP = Math.min(scrollY / innerHeight, 2.2); }, { passive: true });
  addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    layoutGrid();
    renderer.setSize(innerWidth, innerHeight, false);
  });

  layoutGrid();
  const ease = (t) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 4);
  const smooth = (t) => { t = Math.min(Math.max(t, 0), 1); return t * t * (3 - 2 * t); };

  function frame() {
    const t = clock.getElapsedTime();
    sx += (mouseX - sx) * 0.05; sy += (mouseY - sy) * 0.05;
    sp += (scrollP - sp) * 0.08;

    const a = assembleStart === null ? 0 : reduced ? 1 : (t - assembleStart) / 2.2;
    const burst = smooth(sp / 0.9); // 0 = sphere, 1 = scattered

    // sphere sits right of the headline on desktop, centered on phones
    const baseX = mobile ? 2.5 : 2.9;
    gp += (gridP - gp) * 0.14;
    const gA = smooth(gp / 0.32);                 // cubes fly back into a wall
    const sm = (gp - 0.32) / 0.24;                // "Yours shouldn't." smashes through from behind                // gold flip ripples across it
    const out = (gp - 0.56) / 0.3;                // tiles burst toward the screen
    const keep = 1 - gA;
    world.position.set(baseX * (1 - burst * 0.6) * keep, ((mobile ? 3.4 : 0) + burst * (mobile ? -3 : 0.3)) * keep, 0);
    world.rotation.y = wrap(t * 0.18 + sx * 0.5) * keep;
    world.rotation.x = (Math.sin(t * 0.3) * 0.12 + sy * 0.3) * keep;

    for (const c of cubes) {
      const k = ease((a - c.delay) / (1 - c.delay));
      const breathe = 1 + Math.sin(t * 1.6 + c.phase) * 0.035 * (1 - burst);
      tmp.copy(c.start).lerp(c.sphere, k).multiplyScalar(breathe);
      tmp.lerp(c.scatter, burst);
      tmp.y += Math.sin(t * 0.7 + c.phase) * 0.25 * burst;
      let s = c.size * (0.2 + 0.8 * k) * (1 - burst * 0.25);
      q.copy(c.align);
      q2.setFromEuler(new Euler(c.rot.x + t * c.spin.x, c.rot.y + t * c.spin.y, c.rot.z + t * c.spin.z));
      dummy.quaternion.copy(q2).slerp(q, k * (1 - burst));
      if (gp > 0.001) {
        const gk = smooth(gA * 1.25 - c.center * 0.25);   // centre tiles land first
        tmp.lerp(c.grid, gk);
        // the wall bulges toward you at the centre, then shatters outward
        const bulge = Math.sin(Math.PI * Math.min(1, Math.max(0, sm / 0.55))) * Math.pow(1 - c.center, 2) * (sm < 0.55 ? 1 : 0);
        const hk = smooth((sm - 0.45) * 2.0 - c.center * 0.45) * gk;
        const rx = c.grid.x || 0.001, ry = c.grid.y || 0.001, rl = Math.hypot(rx, ry) || 1;
        tmp.x += (rx / rl) * hk * (7 + c.center * 9) * c.kick;
        tmp.y += (ry / rl) * hk * (5 + c.center * 7) * c.kick;
        tmp.z += bulge * 1.6 + hk * (3 + (1 - c.center) * 6) * c.kick;
        dummy.quaternion.slerp(qId, gk);
        qFlip.setFromAxisAngle(c.tumble, hk * Math.PI * 2.2 * c.kick);
        dummy.quaternion.multiply(qFlip);
        const ok = smooth(out * 1.5 - c.center * 0.5);
        tmp.z += ok * 10;
        const flash = Math.sin(Math.PI * Math.min(1, hk * 1.4)) * 0.8 + bulge * 0.4;
        col.copy(c.base).lerp(flashCol, Math.min(1, flash));
        c.mesh.setColorAt(c.j, col);
        s = s + (tile - s) * gk;
        const shrink = 1 - hk * 0.35;
        dummy.scale.set(s * shrink, s * shrink, s * (1 - gk * 0.55) * shrink);
      } else {
        c.mesh.setColorAt(c.j, c.base);
        dummy.scale.setScalar(s);
      }
      dummy.position.copy(tmp);
      dummy.updateMatrix();
      c.mesh.setMatrixAt(c.j, dummy.matrix);
    }
    meshes.forEach((m) => { m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; });

    // chain: a slow swinging drape across the frame
    const sway = Math.sin(t * 0.8) * 0.6;
    const chainIn = ease(a * 1.2 - 0.15);
    const off = (1 - chainIn) * 16;
    const pts = curve.points;
    pts[0].set(-14 - off, -7.2 + sway * 0.3, -3);
    pts[1].set(-4 - off * 0.5, -5.4 + sway * 0.6, -1.6);
    pts[2].set(4.5 + off * 0.5, -1.4 - sway * 0.6, -1.2);
    pts[3].set(14 + off, 3.4 + sway * 0.3, -3.5);
    for (let i = 0; i < LINKS; i++) {
      const u = i / (LINKS - 1);
      curve.getPointAt(u, dummy.position);
      dummy.position.y += burst * -2.5 + (mobile ? -2.6 : 0) - gA * 12;
      curve.getTangentAt(u, tan);
      dummy.quaternion.setFromUnitVectors(xAxis, tan);
      if (i % 2) { q.setFromAxisAngle(xAxis, Math.PI / 2); dummy.quaternion.multiply(q); }
      dummy.scale.setScalar(mobile ? 0.8 : 1);
      dummy.updateMatrix();
      chain.setMatrixAt(i, dummy.matrix);
    }
    chain.instanceMatrix.needsUpdate = true;

    if (!reduced) {
      const pos = starGeo.attributes.position.array, dt = Math.min(0.05, Math.max(0, t - lastStarT)); lastStarT = t;
      for (let i = 0; i < STARS; i++) {
        pos[i * 3] -= starSpeed[i] * dt * 1.2;
        pos[i * 3 + 1] += starSpeed[i] * dt * 0.25;
        if (pos[i * 3] < -40) pos[i * 3] = 40;
        if (pos[i * 3 + 1] > 26) pos[i * 3 + 1] = -26;
      }
      starGeo.attributes.position.needsUpdate = true;
      starMat.opacity = 0.85 + Math.sin(t * 1.3) * 0.1;
      bigMat.opacity = 0.55 + Math.sin(t * 2.4) * 0.35;
    }
    stars.position.set(-sx * 1.2, sy * 0.8 + sp * 3, 0);
    stars.rotation.z = t * 0.006;
    camera.position.x = sx * 0.6;
    camera.position.y = -sy * 0.4;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }

  let running = true;
  document.addEventListener("visibilitychange", () => { running = !document.hidden; });
  renderer.setAnimationLoop(() => { if (running) frame(); });

  return {
    assemble() { if (assembleStart === null) assembleStart = clock.getElapsedTime(); },
    setGrid(p) { gridP = Math.min(1, Math.max(0, p)); },
  };
}
