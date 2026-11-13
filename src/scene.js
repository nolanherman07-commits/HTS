// Hero 3D scene: gold and navy cubes assemble into a sphere, a gold chain swings
// behind it, and on scroll the sphere breaks apart into floating cubes.
import { ACESFilmicToneMapping, AmbientLight, BoxGeometry, CatmullRomCurve3, Clock, DirectionalLight, DynamicDrawUsage, Euler, Group, InstancedMesh, MeshStandardMaterial, Object3D, PMREMGenerator, PerspectiveCamera, Quaternion, Scene, TorusGeometry, Vector3, WebGLRenderer } from "three";
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

  const key = new DirectionalLight(0xffe3a3, 2.2); key.position.set(5, 6, 8); scene.add(key);
  const rim = new DirectionalLight(0x5b7cff, 1.6); rim.position.set(-6, -2, -4); scene.add(rim);
  scene.add(new AmbientLight(0x22305a, 0.6));

  const world = new Group();
  scene.add(world);

  // ---- cubes ----
  const COUNT = mobile ? 170 : 300;
  const R = mobile ? 1.75 : 2.75;
  const gold = new MeshStandardMaterial({ color: 0xd4af37, metalness: 1, roughness: 0.22 });
  const navy = new MeshStandardMaterial({ color: 0x1b2c55, metalness: 0.7, roughness: 0.28 });
  const ink = new MeshStandardMaterial({ color: 0x0a1122, metalness: 0.9, roughness: 0.35 });
  const geo = new BoxGeometry(1, 1, 1);
  const mats = [gold, navy, ink];
  const split = [Math.round(COUNT * 0.34), Math.round(COUNT * 0.4)];
  split.push(COUNT - split[0] - split[1]);
  const meshes = mats.map((m, i) => {
    const mesh = new InstancedMesh(geo, m, split[i]);
    mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    world.add(mesh);
    return mesh;
  });

  const cubes = [];
  const rand = (a, b) => a + Math.random() * (b - a);
  let n = 0;
  meshes.forEach((mesh, mi) => {
    for (let j = 0; j < split[mi]; j++, n++) {
      // Fibonacci sphere target
      const i = n + 0.5;
      const phi = Math.acos(1 - (2 * i) / COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const sphere = new Vector3(Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi)).multiplyScalar(R);
      const dir = sphere.clone().normalize();
      cubes.push({
        mesh, j,
        sphere,
        dir,
        start: dir.clone().multiplyScalar(rand(14, 26)).add(new Vector3(rand(-6, 6), rand(-6, 6), rand(-4, 4))),
        scatter: new Vector3(rand(-11, 11), rand(-6.5, 6.5), rand(-7, 3)),
        size: rand(0.28, 0.52) * (mobile ? 0.9 : 1),
        rot: new Euler(rand(0, 6.3), rand(0, 6.3), rand(0, 6.3)),
        spin: new Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(0.6),
        delay: rand(0, 0.55),
        phase: rand(0, 6.3),
      });
    }
  });
  // look the cubes along the sphere normal so they tile like the video
  const up = new Vector3(0, 0, 1);
  cubes.forEach((c) => { c.align = new Quaternion().setFromUnitVectors(up, c.dir); });

  // ---- gold chain ----
  const LINKS = mobile ? 34 : 54;
  const linkGeo = new TorusGeometry(0.34, 0.085, 14, 36);
  linkGeo.scale(1.55, 1, 1);
  const chainMat = new MeshStandardMaterial({ color: 0xe0bd4a, metalness: 1, roughness: 0.18 });
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

  addEventListener("pointermove", (e) => {
    mouseX = (e.clientX / innerWidth) * 2 - 1;
    mouseY = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });
  addEventListener("scroll", () => { scrollP = Math.min(scrollY / innerHeight, 2.2); }, { passive: true });
  addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false);
  });

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
    world.position.set(baseX * (1 - burst * 0.6), (mobile ? 3.4 : 0) + burst * (mobile ? -3 : 0.3), 0);
    world.rotation.y = t * 0.18 + sx * 0.5;
    world.rotation.x = Math.sin(t * 0.3) * 0.12 + sy * 0.3;

    for (const c of cubes) {
      const k = ease((a - c.delay) / (1 - c.delay));
      const breathe = 1 + Math.sin(t * 1.6 + c.phase) * 0.035 * (1 - burst);
      tmp.copy(c.start).lerp(c.sphere, k).multiplyScalar(breathe);
      tmp.lerp(c.scatter, burst);
      tmp.y += Math.sin(t * 0.7 + c.phase) * 0.25 * burst;
      dummy.position.copy(tmp);

      q.copy(c.align);
      q2.setFromEuler(new Euler(c.rot.x + t * c.spin.x, c.rot.y + t * c.spin.y, c.rot.z + t * c.spin.z));
      dummy.quaternion.copy(q2).slerp(q, k * (1 - burst));
      const s = c.size * (0.2 + 0.8 * k) * (1 - burst * 0.25);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      c.mesh.setMatrixAt(c.j, dummy.matrix);
    }
    meshes.forEach((m) => { m.instanceMatrix.needsUpdate = true; });

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
      dummy.position.y += burst * -2.5 + (mobile ? -2.6 : 0);
      curve.getTangentAt(u, tan);
      dummy.quaternion.setFromUnitVectors(xAxis, tan);
      if (i % 2) { q.setFromAxisAngle(xAxis, Math.PI / 2); dummy.quaternion.multiply(q); }
      dummy.scale.setScalar(mobile ? 0.8 : 1);
      dummy.updateMatrix();
      chain.setMatrixAt(i, dummy.matrix);
    }
    chain.instanceMatrix.needsUpdate = true;

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
  };
}
