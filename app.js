/* =========================================================
   THREE BODY — interactions & simulations
   ========================================================= */

(() => {
  "use strict";

  const QUOTES = [
    { text: "给岁月以文明，给时光以生命。", source: "三体 · 序章" },
    { text: "毁灭你，与你有何相干？", source: "三体 · 水滴" },
    { text: "不要回答！不要回答！！不要回答！！！", source: "三体 · 红岸" },
    { text: "弱小和无知不是生存的障碍，傲慢才是。", source: "三体Ⅱ · 黑暗森林" },
    { text: "宇宙就是一座黑暗森林，每个文明都是带枪的猎人。", source: "三体Ⅱ · 黑暗森林" },
    { text: "失去人性，失去很多；失去兽性，失去一切。", source: "三体Ⅱ · 黑暗森林" },
    { text: "前进！前进！！不择手段地前进！！！", source: "三体Ⅲ · 死神永生" },
    { text: "我们都是阴沟里的虫子，但总还是要有人仰望星空。", source: "三体" },
    { text: "把我们自己也当成虫子，就谁都不可怕了。", source: "三体" },
    { text: "空，才是最大的满。", source: "三体Ⅲ · 死神永生" },
    { text: "我有一枪打向天堂的子弹，叫它一声，它敢应吗？", source: "三体Ⅱ" },
    { text: "生存是文明的第一需要。", source: "三体Ⅱ · 黑暗森林法则" },
    { text: "一切都将逝去，只有时光长流。", source: "三体Ⅲ" },
    { text: "死神永生。", source: "三体Ⅲ" },
    { text: "在宇宙中，你的善良也许就是对别人的残忍。", source: "三体Ⅱ" },
  ];

  /* ---------- nav ---------- */
  const nav = document.querySelector(".nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true }
  );

  navToggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  });

  navLinks?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- ticker ---------- */
  const ticker = document.getElementById("tickerTrack");
  if (ticker) {
    const items = QUOTES.map((q) => `<span>${q.text}</span>`).join("");
    ticker.innerHTML = items + items;
  }

  /* ---------- quotes carousel ---------- */
  let qIndex = 0;
  const quoteText = document.getElementById("quoteText");
  const quoteCite = document.getElementById("quoteCite");
  const quoteIdx = document.getElementById("quoteIdx");
  const quoteCard = document.getElementById("quoteCard");
  const quoteGrid = document.getElementById("quoteGrid");

  function renderQuote(i, animate = true) {
    qIndex = (i + QUOTES.length) % QUOTES.length;
    const q = QUOTES[qIndex];
    if (animate && quoteCard) {
      quoteCard.style.opacity = "0";
      quoteCard.style.transform = "translateY(12px)";
      setTimeout(() => {
        quoteText.textContent = q.text;
        quoteCite.textContent = "— " + q.source;
        quoteIdx.textContent = String(qIndex + 1).padStart(2, "0") + " / " + String(QUOTES.length).padStart(2, "0");
        quoteCard.style.opacity = "1";
        quoteCard.style.transform = "none";
        syncMini();
      }, 220);
    } else {
      quoteText.textContent = q.text;
      quoteCite.textContent = "— " + q.source;
      quoteIdx.textContent = String(qIndex + 1).padStart(2, "0") + " / " + String(QUOTES.length).padStart(2, "0");
      syncMini();
    }
  }

  function syncMini() {
    quoteGrid?.querySelectorAll(".q-mini").forEach((el, idx) => {
      el.classList.toggle("active", idx === qIndex);
    });
  }

  if (quoteGrid) {
    quoteGrid.innerHTML = QUOTES.map(
      (q, i) => `
      <button type="button" class="q-mini" data-i="${i}">
        <p>${q.text}</p>
        <span>${q.source}</span>
      </button>`
    ).join("");
    quoteGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".q-mini");
      if (!btn) return;
      renderQuote(Number(btn.dataset.i));
    });
  }

  document.getElementById("qPrev")?.addEventListener("click", () => renderQuote(qIndex - 1));
  document.getElementById("qNext")?.addEventListener("click", () => renderQuote(qIndex + 1));
  renderQuote(0, false);

  let autoQuote = setInterval(() => renderQuote(qIndex + 1), 7000);
  document.getElementById("quotes")?.addEventListener("mouseenter", () => clearInterval(autoQuote));
  document.getElementById("quotes")?.addEventListener("mouseleave", () => {
    autoQuote = setInterval(() => renderQuote(qIndex + 1), 7000);
  });

  /* ---------- starfield ---------- */
  const starCanvas = document.getElementById("starfield");
  const sctx = starCanvas?.getContext("2d");
  let stars = [];
  let starW = 0;
  let starH = 0;

  function resizeStars() {
    if (!starCanvas || !sctx) return;
    starW = starCanvas.width = window.innerWidth;
    starH = starCanvas.height = window.innerHeight;
    const count = Math.min(220, Math.floor((starW * starH) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * starW,
      y: Math.random() * starH,
      r: Math.random() * 1.4 + 0.2,
      a: Math.random() * 0.7 + 0.15,
      tw: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.02 + 0.005,
    }));
  }

  function drawStars(t) {
    if (!sctx) return;
    sctx.clearRect(0, 0, starW, starH);
    for (const s of stars) {
      const twinkle = 0.55 + 0.45 * Math.sin(t * s.sp + s.tw);
      sctx.beginPath();
      sctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      sctx.fillStyle = `rgba(200, 220, 255, ${s.a * twinkle})`;
      sctx.fill();
    }
  }

  resizeStars();
  window.addEventListener("resize", resizeStars, { passive: true });

  /* ---------- three-body simulation ---------- */
  const tbCanvas = document.getElementById("threeBody");
  const tctx = tbCanvas?.getContext("2d");
  const hudEnergy = document.getElementById("hudEnergy");
  const hudEpoch = document.getElementById("hudEpoch");
  const hudTime = document.getElementById("hudTime");

  const G = 80;
  const bodies = [];
  const trails = [[], [], [], []];
  const TRAIL_MAX = 180;
  let simTime = 0;
  let chaosBoost = 0;

  const COLORS = ["#ff6b3d", "#ffd166", "#e8f1ff", "#5eead4"];
  const RADII = [14, 11, 12, 5];
  const MASSES = [28, 22, 24, 1.2];

  function randomState() {
    bodies.length = 0;
    trails.forEach((t) => (t.length = 0));
    simTime = 0;
    chaosBoost = 0;

    const spread = 1;
    // three stars roughly equilateral + planet
    bodies.push(
      {
        m: MASSES[0],
        x: -90 * spread,
        y: -40 * spread,
        vx: 0.15,
        vy: 1.35,
        r: RADII[0],
        c: COLORS[0],
      },
      {
        m: MASSES[1],
        x: 100 * spread,
        y: -30 * spread,
        vx: -0.9,
        vy: -1.0,
        r: RADII[1],
        c: COLORS[1],
      },
      {
        m: MASSES[2],
        x: 10 * spread,
        y: 110 * spread,
        vx: 0.85,
        vy: -0.35,
        r: RADII[2],
        c: COLORS[2],
      },
      {
        m: MASSES[3],
        x: 0,
        y: 0,
        vx: 1.6,
        vy: 0.4,
        r: RADII[3],
        c: COLORS[3],
      }
    );
  }

  function resizeTB() {
    if (!tbCanvas || !tctx) return;
    const rect = tbCanvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    tbCanvas.width = Math.floor(rect.width * dpr);
    tbCanvas.height = Math.floor(rect.height * dpr);
    tbCanvas.style.width = rect.width + "px";
    tbCanvas.style.height = rect.height + "px";
    tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function accel(i) {
    let ax = 0;
    let ay = 0;
    const bi = bodies[i];
    for (let j = 0; j < bodies.length; j++) {
      if (i === j) continue;
      const bj = bodies[j];
      let dx = bj.x - bi.x;
      let dy = bj.y - bi.y;
      let dist2 = dx * dx + dy * dy;
      const soft = 40 + chaosBoost;
      dist2 = Math.max(dist2, soft);
      const dist = Math.sqrt(dist2);
      const f = (G * bj.m) / (dist2 * dist);
      ax += f * dx;
      ay += f * dy;
    }
    return { ax, ay };
  }

  function stepSim(dt) {
    // velocity Verlet-ish semi-implicit Euler with substeps
    const sub = 4;
    const h = dt / sub;
    for (let s = 0; s < sub; s++) {
      const acc = bodies.map((_, i) => accel(i));
      for (let i = 0; i < bodies.length; i++) {
        bodies[i].vx += acc[i].ax * h;
        bodies[i].vy += acc[i].ay * h;
        bodies[i].x += bodies[i].vx * h;
        bodies[i].y += bodies[i].vy * h;
      }
    }
    simTime += dt;

    for (let i = 0; i < bodies.length; i++) {
      trails[i].push({ x: bodies[i].x, y: bodies[i].y });
      if (trails[i].length > TRAIL_MAX) trails[i].shift();
    }

    // energy proxy + epoch
    let ke = 0;
    let pe = 0;
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      ke += 0.5 * b.m * (b.vx * b.vx + b.vy * b.vy);
      for (let j = i + 1; j < bodies.length; j++) {
        const o = bodies[j];
        const d = Math.hypot(o.x - b.x, o.y - b.y) + 1e-3;
        pe -= (G * b.m * o.m) / d;
      }
    }
    const e = ke + pe;
    if (hudEnergy) hudEnergy.textContent = e.toFixed(1);
    if (hudTime) hudTime.textContent = simTime.toFixed(1);

    // planet relative distances to stars → chaotic climate proxy
    const p = bodies[3];
    const dists = [0, 1, 2].map((i) => Math.hypot(bodies[i].x - p.x, bodies[i].y - p.y));
    const minD = Math.min(...dists);
    const maxD = Math.max(...dists);
    const ratio = maxD / (minD + 1e-6);
    if (hudEpoch) {
      if (minD < 45 || ratio > 3.2) {
        hudEpoch.textContent = "乱纪元";
        hudEpoch.style.color = "#ff6b3d";
      } else if (ratio < 1.8 && minD > 70) {
        hudEpoch.textContent = "恒纪元";
        hudEpoch.style.color = "#5eead4";
      } else {
        hudEpoch.textContent = "过渡期";
        hudEpoch.style.color = "#ffd166";
      }
    }
  }

  function drawSim() {
    if (!tctx || !tbCanvas) return;
    const w = tbCanvas.clientWidth;
    const h = tbCanvas.clientHeight;
    tctx.clearRect(0, 0, w, h);

    // grid
    tctx.strokeStyle = "rgba(94,234,212,0.04)";
    tctx.lineWidth = 1;
    const step = 40;
    for (let x = 0; x < w; x += step) {
      tctx.beginPath();
      tctx.moveTo(x, 0);
      tctx.lineTo(x, h);
      tctx.stroke();
    }
    for (let y = 0; y < h; y += step) {
      tctx.beginPath();
      tctx.moveTo(0, y);
      tctx.lineTo(w, y);
      tctx.stroke();
    }

    const cx = w / 2;
    const cy = h / 2;
    const scale = Math.min(w, h) / 380;

    // trails
    for (let i = 0; i < trails.length; i++) {
      const tr = trails[i];
      if (tr.length < 2) continue;
      tctx.beginPath();
      for (let k = 0; k < tr.length; k++) {
        const px = cx + tr[k].x * scale;
        const py = cy + tr[k].y * scale;
        if (k === 0) tctx.moveTo(px, py);
        else tctx.lineTo(px, py);
      }
      tctx.strokeStyle = COLORS[i] + "55";
      tctx.lineWidth = i === 3 ? 1.2 : 1.6;
      tctx.stroke();
    }

    // gravity lines between stars (faint)
    tctx.strokeStyle = "rgba(255,255,255,0.06)";
    tctx.lineWidth = 1;
    for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < 3; j++) {
        tctx.beginPath();
        tctx.moveTo(cx + bodies[i].x * scale, cy + bodies[i].y * scale);
        tctx.lineTo(cx + bodies[j].x * scale, cy + bodies[j].y * scale);
        tctx.stroke();
      }
    }

    // bodies
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      const x = cx + b.x * scale;
      const y = cy + b.y * scale;
      const r = b.r;

      const grad = tctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r * 2.2);
      grad.addColorStop(0, "#fff");
      grad.addColorStop(0.25, b.c);
      grad.addColorStop(1, "transparent");
      tctx.fillStyle = grad;
      tctx.beginPath();
      tctx.arc(x, y, r * 2.2, 0, Math.PI * 2);
      tctx.fill();

      tctx.beginPath();
      tctx.arc(x, y, r, 0, Math.PI * 2);
      tctx.fillStyle = b.c;
      tctx.fill();

      if (i < 3) {
        tctx.beginPath();
        tctx.arc(x, y, r * 0.35, 0, Math.PI * 2);
        tctx.fillStyle = "rgba(255,255,255,0.85)";
        tctx.fill();
      }
    }
  }

  randomState();
  resizeTB();
  window.addEventListener("resize", resizeTB, { passive: true });

  document.getElementById("btnReset")?.addEventListener("click", () => {
    randomState();
    // slight randomization each reset
    bodies.forEach((b) => {
      b.vx += (Math.random() - 0.5) * 0.4;
      b.vy += (Math.random() - 0.5) * 0.4;
      b.x += (Math.random() - 0.5) * 10;
      b.y += (Math.random() - 0.5) * 10;
    });
  });

  document.getElementById("btnChaos")?.addEventListener("click", () => {
    chaosBoost = 80;
    bodies.forEach((b, i) => {
      if (i < 3) {
        b.vx += (Math.random() - 0.5) * 2.5;
        b.vy += (Math.random() - 0.5) * 2.5;
      }
    });
    setTimeout(() => {
      chaosBoost = 0;
    }, 2500);
  });

  /* ---------- water drop particles + interact ---------- */
  const dropCanvas = document.getElementById("dropParticles");
  const dctx = dropCanvas?.getContext("2d");
  const waterDrop = document.getElementById("waterDrop");
  let dropParts = [];
  let dropPointer = { x: 0.5, y: 0.5 };

  function resizeDrop() {
    if (!dropCanvas) return;
    const parent = dropCanvas.parentElement;
    const rect = parent.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dropCanvas.width = Math.floor(rect.width * dpr);
    dropCanvas.height = Math.floor(rect.height * dpr);
    dropCanvas.style.width = rect.width + "px";
    dropCanvas.style.height = rect.height + "px";
    dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dropParts = Array.from({ length: 60 }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.5 + 0.1,
    }));
  }

  function drawDropParts() {
    if (!dctx || !dropCanvas) return;
    const w = dropCanvas.clientWidth;
    const h = dropCanvas.clientHeight;
    dctx.clearRect(0, 0, w, h);
    for (const p of dropParts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      dctx.beginPath();
      dctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      dctx.fillStyle = `rgba(94, 234, 212, ${p.a})`;
      dctx.fill();
    }
  }

  resizeDrop();
  window.addEventListener("resize", resizeDrop, { passive: true });

  const dropStage = document.getElementById("dropStage");
  dropStage?.addEventListener("pointermove", (e) => {
    const rect = dropStage.getBoundingClientRect();
    dropPointer.x = (e.clientX - rect.left) / rect.width;
    dropPointer.y = (e.clientY - rect.top) / rect.height;
    if (waterDrop) {
      const rx = (dropPointer.x - 0.5) * 24;
      const ry = (dropPointer.y - 0.5) * -18;
      waterDrop.style.transform = `translateY(-6px) rotateY(${rx}deg) rotateX(${ry}deg)`;
    }
  });
  dropStage?.addEventListener("pointerleave", () => {
    if (waterDrop) waterDrop.style.transform = "";
  });

  /* ---------- parallax hero ---------- */
  const heroBg = document.getElementById("heroBg");
  window.addEventListener(
    "scroll",
    () => {
      if (!heroBg) return;
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
      }
    },
    { passive: true }
  );

  /* ---------- asset presence ---------- */
  function tryBg(el, url, varName, className) {
    if (!el) return;
    const img = new Image();
    img.onload = () => {
      el.style.setProperty(varName, `url("${url}")`);
      el.classList.add(className);
    };
    img.src = url;
  }
  tryBg(document.getElementById("heroBg"), "assets/hero-space.jpg", "--hero-img", "has-image");
  tryBg(document.getElementById("forestBg"), "assets/sophon.jpg", "--forest-img", "has-image");

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll(
    ".section-head, .sim-panel, .drop-layout, .quote-stage, .quote-grid, .law, .forest-closer, .sophon-art, .drop-art"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ---------- main loop ---------- */
  let last = performance.now();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function frame(now) {
    const dt = Math.min(0.033, (now - last) / 1000);
    last = now;

    drawStars(now * 0.001);

    if (!reduced) {
      stepSim(dt * 18);
      drawSim();
      drawDropParts();
    } else {
      drawSim();
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // initial draw after layout
  requestAnimationFrame(() => {
    resizeTB();
    resizeDrop();
  });
})();
