/* =========================================================
   THREE BODY — simulation, scenes, i18n, ambient audio
   ========================================================= */

(() => {
  "use strict";

  /* ---------- i18n ---------- */
  const I18N = {
    zh: {
      "nav.problem": "三体问题",
      "nav.droplet": "水滴",
      "nav.wallfacers": "面壁者",
      "nav.foil": "二向箔",
      "nav.quotes": "名言",
      "nav.forest": "黑暗森林",
      "nav.open": "打开菜单",
      "nav.close": "关闭菜单",
      "logo.home": "回到顶部",
      "hero.eyebrow": "给岁月以文明 · 给时光以生命",
      "hero.title": "三体",
      "hero.sub": "在不可预测的恒星引力中，文明学会了恐惧；<br />在完美的水滴面前，舰队学会了沉默。",
      "hero.enter": "进入三体世界",
      "hero.quotes": "经典名言",
      "hero.era": "危机纪元",
      "hero.axiom": "黑暗森林",
      "hero.signal": "勿回复",
      "problem.index": "01 / SIMULATION",
      "problem.title": "三体问题",
      "problem.desc": "三颗恒星的引力纠缠，使三体世界在「恒纪元」与「乱纪元」之间永恒摇摆。下方是实时 n 体引力模拟——质心跟随、能量监控，轨迹即命运。",
      "problem.sideTitle": "不可求解的命运",
      "problem.sideBody": "三体问题没有一般解析解。初始条件的毫厘之差，会在混沌中被放大成毁灭性的气候与文明崩溃。",
      "problem.f1": "Velocity Verlet 积分 · 质心坐标系",
      "problem.f2": "三星 + 行星 · 乱/恒纪元判定",
      "problem.f3": "相机自动跟随 · 混沌脉冲可见",
      "problem.reset": "重置模拟",
      "problem.chaos": "注入混沌",
      "problem.quote": "「生存是文明的第一需要。」",
      "problem.cite": "— 三体 · 黑暗森林法则",
      "problem.leg1": "恒星 α",
      "problem.leg2": "恒星 β",
      "problem.leg3": "恒星 γ",
      "problem.leg4": "行星",
      "epoch.stable": "恒纪元",
      "epoch.chaotic": "乱纪元",
      "epoch.transit": "过渡期",
      "drop.index": "02 / PROBE",
      "drop.title": "水滴 · 探测器",
      "drop.desc": "强互作用力材料构成的完美液滴——镜面无瑕，锋利无声。它以几乎静止的姿态，改写了整个星际舰队的历史。",
      "drop.badge": "STRONG INTERACTION MATERIAL",
      "drop.cap": "表面绝对光滑 · 分子级精度 · 不可摧毁",
      "drop.s1": "长度",
      "drop.s2": "强互作用力",
      "drop.s3": "摧毁整支舰队",
      "drop.h3": "「它是一面镜子」",
      "drop.p": "水滴表面反射出周围的星空与舰体，完美到令人不安。当它加速时，人类第一次真正理解了技术代差意味着什么——不是差距，而是维度。",
      "drop.t1y": "危机 205",
      "drop.t1": "水滴抵达太阳系",
      "drop.t2y": "接触",
      "drop.t2": "人类舰队举行盛大欢迎",
      "drop.t3y": "屠杀",
      "drop.t3": "两千艘战舰在寂静中消亡",
      "drop.fig": "概念视觉 · 强互作用力水滴",
      "wall.index": "03 / WALLFACERS",
      "wall.title": "面壁者计划",
      "wall.desc": "在智子的全景监视下，人类唯一的策略是：把计划锁进一个人的大脑。面壁者思考，破壁者倾听。",
      "wall.c1t": "弗雷德里克·泰勒",
      "wall.c1": "前美国国防部长。以核威慑思维构建宏大战略，却在破壁者面前溃不成军。",
      "wall.c2t": "曼努尔·雷迪亚兹",
      "wall.c2": "委内瑞拉领袖。企图以恒星级氢弹威胁三体——被本国人民处决。",
      "wall.c3t": "比尔·希恩斯",
      "wall.c3": "精神印记：让人类丧失战斗意志，或……让人类只想战斗。",
      "wall.c4t": "罗辑",
      "wall.c4": "唯一真正的面壁者。以黑暗森林威慑，把整个人类文明架在枪口上——也架在自己身上。",
      "wall.note": "「面壁者的真实战略，藏在思想的黑暗处。」",
      "foil.index": "04 / DIMENSION",
      "foil.title": "二向箔 · 降维打击",
      "foil.desc": "一张只有两个空间维度的小纸片。它展开时，三维世界被压成画——死亡以几何的形式降临。",
      "foil.play": "播放降维",
      "foil.reset": "重置空间",
      "foil.stat1": "空间维度",
      "foil.stat2": "打击方式",
      "foil.stat2v": "降维展开",
      "foil.stat3": "结果",
      "foil.stat3v": "三维归零",
      "foil.body": "歌者文明随手抛出的清理工具。太阳系在二向箔中缓缓摊开：行星变成平面上的图案，生命在二维中永久冻结。",
      "foil.q": "「不要敬畏主，因为它不是主。它只是一个更强大的清理者。」",
      "sophon.index": "05 / SOPHON",
      "sophon.title": "智子 · 锁死科学",
      "sophon.desc": "把质子展开到二维、蚀刻电路、再折叠回十一维——智子降临地球，锁死基础物理，监视每一个思想的边缘。",
      "sophon.b1t": "量子纠缠通信",
      "sophon.b1": "即时传讯，无视光速延迟",
      "sophon.b2t": "粒子加速器干扰",
      "sophon.b2": "实验结果随机化，物理学停摆",
      "sophon.b3t": "全域监视",
      "sophon.b3": "地球对三体几乎透明",
      "quotes.index": "06 / AXIOMS",
      "quotes.title": "经典名言",
      "quotes.desc": "穿越两百年危机的低语，至今仍在宇宙背景辐射中回响。",
      "quotes.prev": "上一条",
      "quotes.next": "下一条",
      "forest.index": "07 / LAW",
      "forest.title": "黑暗森林法则",
      "forest.l1t": "生存是文明的第一需要",
      "forest.l1": "一切文明的底层协议：先活下来，再谈其余。",
      "forest.l2t": "文明不断增长和扩张",
      "forest.l2": "但宇宙中的物质总量保持不变——零和的宇宙舞台。",
      "forest.l3t": "猜疑链与技术爆炸",
      "forest.l3": "无法确认对方善意，也无法确认对方永远落后——于是，先发制人成为理性选择。",
      "forest.closer": "宇宙就是一座黑暗森林，每个文明都是带枪的猎人。<br /><strong>轻轻拨开挡路的树枝，竭力不让脚步发出一点儿声音……</strong>",
      "forest.fig": "智子 · 锁死基础科学的高维监视",
      "footer.copy": "致敬刘慈欣《三体》三部曲 · 粉丝致敬页，非官方",
      "footer.quote": "「给岁月以文明，给时光以生命。」",
      "audio.play": "播放氛围音",
      "audio.mute": "静音",
      "lang.switch": "EN",
      "ticker.aria": "经典名言滚动条",
    },
    en: {
      "nav.problem": "Three-Body",
      "nav.droplet": "Droplet",
      "nav.wallfacers": "Wallfacers",
      "nav.foil": "Dual-Vector",
      "nav.quotes": "Quotes",
      "nav.forest": "Dark Forest",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "logo.home": "Back to top",
      "hero.eyebrow": "Civilization for the ages · life for the years",
      "hero.title": "三体",
      "hero.sub": "In unpredictable stellar gravity, civilizations learn fear;<br />before a perfect droplet, fleets learn silence.",
      "hero.enter": "Enter the world",
      "hero.quotes": "Classic quotes",
      "hero.era": "Crisis Era",
      "hero.axiom": "Dark Forest",
      "hero.signal": "Do not answer",
      "problem.index": "01 / SIMULATION",
      "problem.title": "The Three-Body Problem",
      "problem.desc": "Three suns lock Trisolaris between Stable and Chaotic Eras. Below: a live n-body gravity sim with COM-frame tracking—trajectories are destiny.",
      "problem.sideTitle": "No closed-form fate",
      "problem.sideBody": "The three-body problem has no general analytic solution. Tiny shifts in initial conditions explode into climate collapse and civilizational ruin.",
      "problem.f1": "Velocity Verlet · center-of-mass frame",
      "problem.f2": "Three suns + planet · era detection",
      "problem.f3": "Auto camera · visible chaos pulse",
      "problem.reset": "Reset sim",
      "problem.chaos": "Inject chaos",
      "problem.quote": "“Survival is the primary need of civilization.”",
      "problem.cite": "— Three-Body · Dark Forest law",
      "problem.leg1": "Star α",
      "problem.leg2": "Star β",
      "problem.leg3": "Star γ",
      "problem.leg4": "Planet",
      "epoch.stable": "Stable Era",
      "epoch.chaotic": "Chaotic Era",
      "epoch.transit": "Transition",
      "drop.index": "02 / PROBE",
      "drop.title": "The Droplet",
      "drop.desc": "A perfect teardrop of strong-interaction material—flawless mirror, silent edge. Almost still, it rewrote the history of an entire fleet.",
      "drop.badge": "STRONG INTERACTION MATERIAL",
      "drop.cap": "Molecular smoothness · unbreakable",
      "drop.s1": "Length",
      "drop.s2": "Strong force armor",
      "drop.s3": "Fleet annihilated",
      "drop.h3": "“It is a mirror.”",
      "drop.p": "The droplet reflects stars and hulls with unsettling perfection. When it accelerates, humanity learns what a tech gap really means—not distance, but dimension.",
      "drop.t1y": "Crisis 205",
      "drop.t1": "Droplet arrives in the solar system",
      "drop.t2y": "Contact",
      "drop.t2": "Human fleets hold a grand welcome",
      "drop.t3y": "Slaughter",
      "drop.t3": "Two thousand warships die in silence",
      "drop.fig": "Concept art · strong-interaction droplet",
      "wall.index": "03 / WALLFACERS",
      "wall.title": "Wallfacer Project",
      "wall.desc": "Under sophon surveillance, humanity’s only gambit: lock strategy inside one mind. Wallfacers think; Wallbreakers listen.",
      "wall.c1t": "Frederick Tyler",
      "wall.c1": "Ex-US Defense Secretary. Built grand strategy from nuclear deterrence—shattered by his Wallbreaker.",
      "wall.c2t": "Manuel Rey Diaz",
      "wall.c2": "Venezuelan leader. Threatened Trisolaris with stellar bombs—executed by his own people.",
      "wall.c3t": "Bill Hines",
      "wall.c3": "Mental seal: strip the will to fight—or make fighting the only will left.",
      "wall.c4t": "Luo Ji",
      "wall.c4": "The only true Wallfacer. Dark Forest deterrence holds a gun to civilization—and to himself.",
      "wall.note": "“A Wallfacer’s true strategy hides in the dark of thought.”",
      "foil.index": "04 / DIMENSION",
      "foil.title": "Dual-Vector Foil",
      "foil.desc": "A slip of two-dimensional space. When it unfolds, the 3D world is pressed into a painting—death arrives as geometry.",
      "foil.play": "Unfold foil",
      "foil.reset": "Reset space",
      "foil.stat1": "Dimensions",
      "foil.stat2": "Strike mode",
      "foil.stat2v": "Dimensional collapse",
      "foil.stat3": "Outcome",
      "foil.stat3v": "3D → 2D",
      "foil.body": "A cleanup tool tossed by the Singer civilization. The solar system slowly flattens: planets become patterns; life freezes forever in two dimensions.",
      "foil.q": "“Do not revere the Lord—it is not God. Only a stronger cleaner.”",
      "sophon.index": "05 / SOPHON",
      "sophon.title": "Sophon · Science Locked",
      "sophon.desc": "Unfold a proton to 2D, etch circuits, fold back to eleven dimensions—sophons seal fundamental physics and watch the edge of every thought.",
      "sophon.b1t": "Quantum entanglement link",
      "sophon.b1": "Instant comms, no light-lag",
      "sophon.b2t": "Accelerator sabotage",
      "sophon.b2": "Randomized results; physics stalls",
      "sophon.b3t": "Global surveillance",
      "sophon.b3": "Earth nearly transparent to Trisolaris",
      "quotes.index": "06 / AXIOMS",
      "quotes.title": "Classic Quotes",
      "quotes.desc": "Whispers across two centuries of crisis, still echoing in the cosmic microwave background.",
      "quotes.prev": "Previous",
      "quotes.next": "Next",
      "forest.index": "07 / LAW",
      "forest.title": "Dark Forest Law",
      "forest.l1t": "Survival is the primary need",
      "forest.l1": "The base protocol of every civilization: live first, everything else second.",
      "forest.l2t": "Civilization expands without limit",
      "forest.l2": "But matter in the universe is finite—a zero-sum stage.",
      "forest.l3t": "Chains of suspicion & tech explosion",
      "forest.l3": "You cannot prove goodwill or permanent inferiority—so the rational move is to strike first.",
      "forest.closer": "The universe is a dark forest; every civilization is a hunter with a gun.<br /><strong>Part the branches carefully. Make no sound…</strong>",
      "forest.fig": "Sophon · high-dimensional lock on basic science",
      "footer.copy": "Tribute to Cixin Liu’s Remembrance of Earth’s Past · fan work, unofficial",
      "footer.quote": "“Civilization for the ages · life for the years.”",
      "audio.play": "Play ambient",
      "audio.mute": "Mute",
      "lang.switch": "中文",
      "ticker.aria": "Scrolling classic quotes",
    },
  };

  const QUOTES = [
    {
      zh: { text: "给岁月以文明，给时光以生命。", source: "三体 · 序章" },
      en: { text: "Civilization for the ages; life for the years.", source: "Three-Body · Prologue" },
    },
    {
      zh: { text: "毁灭你，与你有何相干？", source: "三体 · 水滴" },
      en: { text: "Destroying you has nothing to do with you.", source: "Three-Body · Droplet" },
    },
    {
      zh: { text: "不要回答！不要回答！！不要回答！！！", source: "三体 · 红岸" },
      en: { text: "Do not answer! Do not answer!! Do not answer!!!", source: "Three-Body · Red Coast" },
    },
    {
      zh: { text: "弱小和无知不是生存的障碍，傲慢才是。", source: "三体Ⅱ · 黑暗森林" },
      en: { text: "Weakness and ignorance are not barriers to survival—arrogance is.", source: "Dark Forest" },
    },
    {
      zh: { text: "宇宙就是一座黑暗森林，每个文明都是带枪的猎人。", source: "三体Ⅱ · 黑暗森林" },
      en: { text: "The universe is a dark forest; every civilization is an armed hunter.", source: "Dark Forest" },
    },
    {
      zh: { text: "失去人性，失去很多；失去兽性，失去一切。", source: "三体Ⅱ · 黑暗森林" },
      en: { text: "Lose humanity and you lose much; lose bestiality and you lose everything.", source: "Dark Forest" },
    },
    {
      zh: { text: "前进！前进！！不择手段地前进！！！", source: "三体Ⅲ · 死神永生" },
      en: { text: "Advance! Advance!! Advance by any means necessary!!!", source: "Death's End" },
    },
    {
      zh: { text: "我们都是阴沟里的虫子，但总还是要有人仰望星空。", source: "三体" },
      en: { text: "We are all bugs in a gutter—but someone must still look at the stars.", source: "Three-Body" },
    },
    {
      zh: { text: "把我们自己也当成虫子，就谁都不可怕了。", source: "三体" },
      en: { text: "If we see ourselves as bugs too, nothing is frightening.", source: "Three-Body" },
    },
    {
      zh: { text: "空，才是最大的满。", source: "三体Ⅲ · 死神永生" },
      en: { text: "Emptiness is the greatest fullness.", source: "Death's End" },
    },
    {
      zh: { text: "生存是文明的第一需要。", source: "三体Ⅱ · 黑暗森林法则" },
      en: { text: "Survival is the primary need of civilization.", source: "Dark Forest Law" },
    },
    {
      zh: { text: "死神永生。", source: "三体Ⅲ" },
      en: { text: "Death is eternal.", source: "Death's End" },
    },
    {
      zh: { text: "在宇宙中，你的善良也许就是对别人的残忍。", source: "三体Ⅱ" },
      en: { text: "In the cosmos, your kindness may be cruelty to another.", source: "Dark Forest" },
    },
    {
      zh: { text: "一切都将逝去，只有时光长流。", source: "三体Ⅲ" },
      en: { text: "All will pass; only time flows on.", source: "Death's End" },
    },
    {
      zh: { text: "我有一枪打向天堂的子弹，叫它一声，它敢应吗？", source: "三体Ⅱ" },
      en: { text: "I have a bullet aimed at heaven—call out, does it dare answer?", source: "Dark Forest" },
    },
  ];

  let lang = localStorage.getItem("tb-lang") === "en" ? "en" : "zh";

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || key;
  }

  function applyI18n() {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (el.dataset.i18nHtml === "1") el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = t("lang.switch");
    const audioBtn = document.getElementById("audioToggle");
    if (audioBtn) {
      audioBtn.setAttribute("aria-label", audioOn ? t("audio.mute") : t("audio.play"));
      const label = audioBtn.querySelector(".audio-label");
      if (label) label.textContent = audioOn ? t("audio.mute") : t("audio.play");
    }
    buildTicker();
    renderQuote(qIndex, false);
    // refresh epoch label language if sim running
    updateEpochHud(lastEpochKey);
  }

  /* ---------- nav ---------- */
  const nav = document.querySelector(".nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener(
    "scroll",
    () => nav?.classList.toggle("scrolled", window.scrollY > 40),
    { passive: true }
  );

  navToggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? t("nav.close") : t("nav.open"));
  });

  navLinks?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("langToggle")?.addEventListener("click", () => {
    lang = lang === "zh" ? "en" : "zh";
    localStorage.setItem("tb-lang", lang);
    applyI18n();
  });

  /* ---------- quotes ---------- */
  let qIndex = 0;
  const quoteText = document.getElementById("quoteText");
  const quoteCite = document.getElementById("quoteCite");
  const quoteIdx = document.getElementById("quoteIdx");
  const quoteCard = document.getElementById("quoteCard");
  const quoteGrid = document.getElementById("quoteGrid");

  function buildTicker() {
    const ticker = document.getElementById("tickerTrack");
    if (!ticker) return;
    const items = QUOTES.map((q) => `<span>${q[lang].text}</span>`).join("");
    ticker.innerHTML = items + items;
  }

  function renderQuote(i, animate = true) {
    qIndex = ((i % QUOTES.length) + QUOTES.length) % QUOTES.length;
    const q = QUOTES[qIndex][lang];
    const apply = () => {
      if (quoteText) quoteText.textContent = q.text;
      if (quoteCite) quoteCite.textContent = "— " + q.source;
      if (quoteIdx)
        quoteIdx.textContent =
          String(qIndex + 1).padStart(2, "0") + " / " + String(QUOTES.length).padStart(2, "0");
      syncMini();
    };
    if (animate && quoteCard) {
      quoteCard.style.opacity = "0";
      quoteCard.style.transform = "translateY(12px)";
      setTimeout(() => {
        apply();
        quoteCard.style.opacity = "1";
        quoteCard.style.transform = "none";
      }, 200);
    } else apply();
  }

  function syncMini() {
    quoteGrid?.querySelectorAll(".q-mini").forEach((el, idx) => {
      el.classList.toggle("active", idx === qIndex);
      const q = QUOTES[idx][lang];
      const p = el.querySelector("p");
      const s = el.querySelector("span");
      if (p) p.textContent = q.text;
      if (s) s.textContent = q.source;
    });
  }

  function buildQuoteGrid() {
    if (!quoteGrid) return;
    quoteGrid.innerHTML = QUOTES.map(
      (q, i) => `
      <button type="button" class="q-mini" data-i="${i}">
        <p>${q[lang].text}</p>
        <span>${q[lang].source}</span>
      </button>`
    ).join("");
  }

  quoteGrid?.addEventListener("click", (e) => {
    const btn = e.target.closest(".q-mini");
    if (!btn) return;
    renderQuote(Number(btn.dataset.i));
  });
  document.getElementById("qPrev")?.addEventListener("click", () => renderQuote(qIndex - 1));
  document.getElementById("qNext")?.addEventListener("click", () => renderQuote(qIndex + 1));

  let autoQuote = setInterval(() => renderQuote(qIndex + 1), 7000);
  document.getElementById("quotes")?.addEventListener("mouseenter", () => clearInterval(autoQuote));
  document.getElementById("quotes")?.addEventListener("mouseleave", () => {
    clearInterval(autoQuote);
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

  /* =========================================================
     THREE-BODY SIM — fixed physics + chaos + camera
     ========================================================= */
  const tbCanvas = document.getElementById("threeBody");
  const tctx = tbCanvas?.getContext("2d");
  const hudEnergy = document.getElementById("hudEnergy");
  const hudEpoch = document.getElementById("hudEpoch");
  const hudTime = document.getElementById("hudTime");
  const simStage = document.querySelector(".sim-stage");

  const G = 120;
  const SOFT = 12; // Plummer softening length ε
  const COLORS = ["#ff6b3d", "#ffd166", "#e8f1ff", "#5eead4"];
  const RADII = [13, 11, 12, 5];
  const MASSES = [30, 24, 26, 1.5];
  const bodies = [];
  const trails = [[], [], [], []];
  const TRAIL_MAX = 220;

  let simTime = 0;
  let chaosTimer = 0; // seconds remaining of chaos visual / force boost
  let chaosFlash = 0;
  let camX = 0;
  let camY = 0;
  let camScale = 1;
  let targetScale = 1;
  let lastEpochKey = "stable";
  let simPaused = false;

  function totalMass() {
    return bodies.reduce((s, b) => s + b.m, 0);
  }

  function com() {
    const M = totalMass() || 1;
    let x = 0;
    let y = 0;
    let vx = 0;
    let vy = 0;
    for (const b of bodies) {
      x += b.m * b.x;
      y += b.m * b.y;
      vx += b.m * b.vx;
      vy += b.m * b.vy;
    }
    return { x: x / M, y: y / M, vx: vx / M, vy: vy / M };
  }

  function shiftToComFrame() {
    const c = com();
    for (const b of bodies) {
      b.x -= c.x;
      b.y -= c.y;
      b.vx -= c.vx;
      b.vy -= c.vy;
    }
  }

  function seedState(jitter = true) {
    bodies.length = 0;
    trails.forEach((tr) => (tr.length = 0));
    simTime = 0;
    chaosTimer = 0;
    chaosFlash = 0;

    // Equilateral-ish triple with orbital velocities + planet near center
    const R = 95;
    const positions = [
      { x: R, y: 0 },
      { x: -R * 0.5, y: (R * Math.sqrt(3)) / 2 },
      { x: -R * 0.5, y: -(R * Math.sqrt(3)) / 2 },
    ];
    // Tangential speeds for a rough figure-eight / dance
    const speed = 1.55;
    for (let i = 0; i < 3; i++) {
      const p = positions[i];
      const ang = Math.atan2(p.y, p.x) + Math.PI / 2;
      bodies.push({
        m: MASSES[i],
        x: p.x,
        y: p.y,
        vx: Math.cos(ang) * speed * (0.85 + i * 0.08),
        vy: Math.sin(ang) * speed * (0.85 + i * 0.08),
        r: RADII[i],
        c: COLORS[i],
      });
    }
    bodies.push({
      m: MASSES[3],
      x: 8,
      y: -6,
      vx: 0.2,
      vy: 2.1,
      r: RADII[3],
      c: COLORS[3],
    });

    if (jitter) {
      for (const b of bodies) {
        b.x += (Math.random() - 0.5) * 6;
        b.y += (Math.random() - 0.5) * 6;
        b.vx += (Math.random() - 0.5) * 0.25;
        b.vy += (Math.random() - 0.5) * 0.25;
      }
    }

    shiftToComFrame();
    camX = 0;
    camY = 0;
    camScale = 1;
    targetScale = 1;
  }

  function resizeTB() {
    if (!tbCanvas || !tctx || !simStage) return;
    const rect = simStage.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    tbCanvas.width = Math.floor(rect.width * dpr);
    tbCanvas.height = Math.floor(rect.height * dpr);
    tbCanvas.style.width = rect.width + "px";
    tbCanvas.style.height = rect.height + "px";
    tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  /** Acceleration with Plummer softening: a = G m r_vec / (r^2 + ε^2)^{3/2} */
  function accelOn(i) {
    let ax = 0;
    let ay = 0;
    const bi = bodies[i];
    const gNow = chaosTimer > 0 ? G * 1.35 : G;
    const eps2 = SOFT * SOFT;
    for (let j = 0; j < bodies.length; j++) {
      if (i === j) continue;
      const bj = bodies[j];
      const dx = bj.x - bi.x;
      const dy = bj.y - bi.y;
      const r2 = dx * dx + dy * dy + eps2;
      const inv = 1 / Math.sqrt(r2);
      const inv3 = inv * inv * inv;
      const f = gNow * bj.m * inv3;
      ax += f * dx;
      ay += f * dy;
    }
    // Chaos: extra random micro-forces while active
    if (chaosTimer > 0) {
      ax += (Math.random() - 0.5) * 8;
      ay += (Math.random() - 0.5) * 8;
    }
    return { ax, ay };
  }

  /** Velocity Verlet integration */
  function stepSim(dt) {
    if (!bodies.length || simPaused) return;

    const sub = Math.max(1, Math.ceil(dt / 0.008));
    const hs = dt / sub;

    for (let s = 0; s < sub; s++) {
      const acc0 = bodies.map((_, i) => accelOn(i));
      // x_{n+1} = x + v hs + 0.5 a hs^2
      for (let i = 0; i < bodies.length; i++) {
        bodies[i].x += bodies[i].vx * hs + 0.5 * acc0[i].ax * hs * hs;
        bodies[i].y += bodies[i].vy * hs + 0.5 * acc0[i].ay * hs * hs;
      }
      const acc1 = bodies.map((_, i) => accelOn(i));
      // v_{n+1} = v + 0.5 (a0 + a1) hs
      for (let i = 0; i < bodies.length; i++) {
        bodies[i].vx += 0.5 * (acc0[i].ax + acc1[i].ax) * hs;
        bodies[i].vy += 0.5 * (acc0[i].ay + acc1[i].ay) * hs;
      }
    }

    // Keep COM fixed (numerical drift correction)
    shiftToComFrame();

    simTime += dt;
    if (chaosTimer > 0) chaosTimer = Math.max(0, chaosTimer - dt);
    if (chaosFlash > 0) chaosFlash = Math.max(0, chaosFlash - dt);

    for (let i = 0; i < bodies.length; i++) {
      trails[i].push({ x: bodies[i].x, y: bodies[i].y });
      if (trails[i].length > TRAIL_MAX) trails[i].shift();
    }

    // Energy
    let ke = 0;
    let pe = 0;
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      ke += 0.5 * b.m * (b.vx * b.vx + b.vy * b.vy);
      for (let j = i + 1; j < bodies.length; j++) {
        const o = bodies[j];
        const d = Math.hypot(o.x - b.x, o.y - b.y) + 1e-6;
        pe -= (G * b.m * o.m) / d;
      }
    }
    if (hudEnergy) hudEnergy.textContent = (ke + pe).toFixed(1);
    if (hudTime) hudTime.textContent = simTime.toFixed(1);

    // Era from planet–star distances
    const p = bodies[3];
    const dists = [0, 1, 2].map((i) => Math.hypot(bodies[i].x - p.x, bodies[i].y - p.y));
    const minD = Math.min(...dists);
    const maxD = Math.max(...dists);
    const ratio = maxD / (minD + 1e-6);
    let key = "transit";
    if (minD < 55 || ratio > 2.8 || chaosTimer > 0) key = "chaotic";
    else if (ratio < 1.7 && minD > 75) key = "stable";
    updateEpochHud(key);

    // Camera: smooth follow COM (already ~0) + auto zoom to fit
    let maxR = 40;
    for (const b of bodies) {
      maxR = Math.max(maxR, Math.hypot(b.x, b.y));
    }
    const w = tbCanvas?.clientWidth || 400;
    const h = tbCanvas?.clientHeight || 400;
    const fit = (Math.min(w, h) * 0.42) / maxR;
    targetScale = Math.min(2.2, Math.max(0.35, fit));
    camScale += (targetScale - camScale) * 0.08;
    camX += (0 - camX) * 0.12;
    camY += (0 - camY) * 0.12;
  }

  function updateEpochHud(key) {
    lastEpochKey = key;
    if (!hudEpoch) return;
    const map = {
      stable: { label: t("epoch.stable"), color: "#5eead4" },
      chaotic: { label: t("epoch.chaotic"), color: "#ff6b3d" },
      transit: { label: t("epoch.transit"), color: "#ffd166" },
    };
    const e = map[key] || map.transit;
    hudEpoch.textContent = e.label;
    hudEpoch.style.color = e.color;
  }

  function drawSim() {
    if (!tctx || !tbCanvas) return;
    const w = tbCanvas.clientWidth;
    const h = tbCanvas.clientHeight;
    if (w < 2 || h < 2) return;

    tctx.clearRect(0, 0, w, h);

    // backdrop
    tctx.fillStyle = "rgba(5,8,16,0.35)";
    tctx.fillRect(0, 0, w, h);

    // grid in camera space
    tctx.save();
    tctx.translate(w / 2 + camX, h / 2 + camY);
    tctx.scale(camScale, camScale);

    tctx.strokeStyle = "rgba(94,234,212,0.05)";
    tctx.lineWidth = 1 / camScale;
    const grid = 40;
    const extent = 600;
    for (let x = -extent; x <= extent; x += grid) {
      tctx.beginPath();
      tctx.moveTo(x, -extent);
      tctx.lineTo(x, extent);
      tctx.stroke();
    }
    for (let y = -extent; y <= extent; y += grid) {
      tctx.beginPath();
      tctx.moveTo(-extent, y);
      tctx.lineTo(extent, y);
      tctx.stroke();
    }

    // trails
    for (let i = 0; i < trails.length; i++) {
      const tr = trails[i];
      if (tr.length < 2) continue;
      tctx.beginPath();
      for (let k = 0; k < tr.length; k++) {
        if (k === 0) tctx.moveTo(tr[k].x, tr[k].y);
        else tctx.lineTo(tr[k].x, tr[k].y);
      }
      tctx.strokeStyle = COLORS[i] + (i === 3 ? "66" : "55");
      tctx.lineWidth = (i === 3 ? 1.2 : 1.8) / camScale;
      tctx.lineJoin = "round";
      tctx.stroke();
    }

    // links between stars
    tctx.strokeStyle = "rgba(255,255,255,0.07)";
    tctx.lineWidth = 1 / camScale;
    for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < 3; j++) {
        tctx.beginPath();
        tctx.moveTo(bodies[i].x, bodies[i].y);
        tctx.lineTo(bodies[j].x, bodies[j].y);
        tctx.stroke();
      }
    }

    // bodies
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      const r = b.r / Math.sqrt(camScale);

      const grad = tctx.createRadialGradient(b.x - r * 0.3, b.y - r * 0.3, 0, b.x, b.y, r * 2.4);
      grad.addColorStop(0, "#fff");
      grad.addColorStop(0.22, b.c);
      grad.addColorStop(1, "transparent");
      tctx.fillStyle = grad;
      tctx.beginPath();
      tctx.arc(b.x, b.y, r * 2.4, 0, Math.PI * 2);
      tctx.fill();

      tctx.beginPath();
      tctx.arc(b.x, b.y, r, 0, Math.PI * 2);
      tctx.fillStyle = b.c;
      tctx.fill();

      if (i < 3) {
        tctx.beginPath();
        tctx.arc(b.x, b.y, r * 0.32, 0, Math.PI * 2);
        tctx.fillStyle = "rgba(255,255,255,0.9)";
        tctx.fill();
      }
    }

    // chaos flash ring
    if (chaosFlash > 0) {
      const a = Math.min(1, chaosFlash / 0.6);
      tctx.beginPath();
      tctx.arc(0, 0, 40 + (1 - a) * 180, 0, Math.PI * 2);
      tctx.strokeStyle = `rgba(255, 107, 61, ${a * 0.7})`;
      tctx.lineWidth = 3 / camScale;
      tctx.stroke();
    }

    tctx.restore();

    // HUD chaos banner
    if (chaosTimer > 0) {
      tctx.fillStyle = "rgba(255,107,61,0.12)";
      tctx.fillRect(0, 0, w, 28);
      tctx.font = "11px Share Tech Mono, monospace";
      tctx.fillStyle = "#ff6b3d";
      tctx.fillText("CHAOS PULSE  " + chaosTimer.toFixed(1) + "s", 12, 18);
    }
  }

  function injectChaos() {
    if (!bodies.length) return;
    // Strong, visible velocity kicks on all bodies
    for (let i = 0; i < bodies.length; i++) {
      const kick = i < 3 ? 3.8 : 2.2;
      const ang = Math.random() * Math.PI * 2;
      bodies[i].vx += Math.cos(ang) * kick * (0.7 + Math.random() * 0.6);
      bodies[i].vy += Math.sin(ang) * kick * (0.7 + Math.random() * 0.6);
      // slight position jitter
      bodies[i].x += (Math.random() - 0.5) * 12;
      bodies[i].y += (Math.random() - 0.5) * 12;
    }
    shiftToComFrame();
    chaosTimer = 3.5;
    chaosFlash = 0.85;
    trails.forEach((tr) => (tr.length = 0));
    simStage?.classList.add("chaos-active");
    setTimeout(() => simStage?.classList.remove("chaos-active"), 900);
  }

  seedState(true);
  resizeTB();
  window.addEventListener("resize", resizeTB, { passive: true });

  document.getElementById("btnReset")?.addEventListener("click", () => {
    seedState(true);
  });
  document.getElementById("btnChaos")?.addEventListener("click", (e) => {
    e.preventDefault();
    injectChaos();
  });

  /* ---------- dual-vector foil canvas ---------- */
  const foilCanvas = document.getElementById("foilCanvas");
  const fctx = foilCanvas?.getContext("2d");
  let foilProgress = 0; // 0..1
  let foilPlaying = false;
  let foilParts = [];

  function resizeFoil() {
    if (!foilCanvas || !fctx) return;
    const parent = foilCanvas.parentElement;
    const rect = parent.getBoundingClientRect();
    if (rect.width < 2) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    foilCanvas.width = Math.floor(rect.width * dpr);
    foilCanvas.height = Math.floor(rect.height * dpr);
    foilCanvas.style.width = rect.width + "px";
    foilCanvas.style.height = rect.height + "px";
    fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    foilParts = Array.from({ length: 48 }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      z: Math.random(),
      r: Math.random() * 3 + 1,
      hue: 180 + Math.random() * 40,
    }));
  }

  function drawFoil(dt) {
    if (!fctx || !foilCanvas) return;
    const w = foilCanvas.clientWidth;
    const h = foilCanvas.clientHeight;
    if (w < 2) return;

    if (foilPlaying) {
      foilProgress = Math.min(1, foilProgress + dt * 0.22);
      if (foilProgress >= 1) foilPlaying = false;
    }

    fctx.clearRect(0, 0, w, h);
    const p = foilProgress;

    // space gradient collapsing toward plane
    const g = fctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, `rgba(8,12,28,${1 - p * 0.3})`);
    g.addColorStop(0.5, `rgba(20,40,60,${0.5 + p * 0.4})`);
    g.addColorStop(1, `rgba(5,6,10,1)`);
    fctx.fillStyle = g;
    fctx.fillRect(0, 0, w, h);

    // 3D "bodies" flattening
    const cx = w / 2;
    const cy = h / 2;
    for (const pt of foilParts) {
      const squash = 1 - p * 0.92;
      const y = cy + (pt.y - cy) * squash + p * (h * 0.15);
      const x = pt.x + Math.sin(pt.z * 6 + p * 4) * (1 - p) * 8;
      const rr = pt.r * (1 - p * 0.5);
      fctx.beginPath();
      fctx.ellipse(x, y, rr * (1 + p), rr * squash + 0.3, 0, 0, Math.PI * 2);
      fctx.fillStyle = `hsla(${pt.hue}, 70%, ${60 - p * 20}%, ${0.7 - p * 0.2})`;
      fctx.fill();
    }

    // the foil itself — expanding plane
    const foilY = cy + (0.5 - p) * h * 0.1;
    const foilH = 2 + p * h * 0.55;
    const foilGrad = fctx.createLinearGradient(0, foilY - foilH / 2, 0, foilY + foilH / 2);
    foilGrad.addColorStop(0, "rgba(94,234,212,0)");
    foilGrad.addColorStop(0.45, `rgba(180, 220, 255, ${0.15 + p * 0.45})`);
    foilGrad.addColorStop(0.5, `rgba(255,255,255,${0.5 + p * 0.4})`);
    foilGrad.addColorStop(0.55, `rgba(180, 220, 255, ${0.15 + p * 0.45})`);
    foilGrad.addColorStop(1, "rgba(94,234,212,0)");
    fctx.fillStyle = foilGrad;
    fctx.fillRect(0, foilY - foilH / 2, w, foilH);

    // edge glow
    fctx.strokeStyle = `rgba(94,234,212,${0.3 + p * 0.5})`;
    fctx.lineWidth = 1;
    fctx.beginPath();
    fctx.moveTo(0, foilY);
    fctx.lineTo(w, foilY);
    fctx.stroke();

    // label
    fctx.font = "11px Share Tech Mono, monospace";
    fctx.fillStyle = `rgba(94,234,212,${0.5 + p * 0.5})`;
    fctx.fillText(
      p < 0.05 ? "3-SPACE" : p < 0.95 ? "COLLAPSING  " + Math.round(p * 100) + "%" : "2-SPACE  LOCKED",
      16,
      24
    );
  }

  document.getElementById("btnFoilPlay")?.addEventListener("click", () => {
    if (foilProgress >= 1) foilProgress = 0;
    foilPlaying = true;
  });
  document.getElementById("btnFoilReset")?.addEventListener("click", () => {
    foilPlaying = false;
    foilProgress = 0;
  });

  resizeFoil();
  window.addEventListener("resize", resizeFoil, { passive: true });

  /* ---------- water drop ---------- */
  const dropCanvas = document.getElementById("dropParticles");
  const dctx = dropCanvas?.getContext("2d");
  const waterDrop = document.getElementById("waterDrop");
  let dropParts = [];
  let dropTilt = { x: 0, y: 0 };

  function resizeDrop() {
    if (!dropCanvas || !dctx) return;
    const parent = dropCanvas.parentElement;
    const rect = parent.getBoundingClientRect();
    if (rect.width < 2) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dropCanvas.width = Math.floor(rect.width * dpr);
    dropCanvas.height = Math.floor(rect.height * dpr);
    dropCanvas.style.width = rect.width + "px";
    dropCanvas.style.height = rect.height + "px";
    dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dropParts = Array.from({ length: 55 }, () => ({
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

  function applyDropTransform() {
    if (!waterDrop) return;
    waterDrop.style.transform = `translateY(-6px) rotateY(${dropTilt.x}deg) rotateX(${dropTilt.y}deg)`;
  }

  resizeDrop();
  window.addEventListener("resize", resizeDrop, { passive: true });

  const dropStage = document.getElementById("dropStage");
  dropStage?.addEventListener("pointermove", (e) => {
    const rect = dropStage.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    dropTilt.x = (px - 0.5) * 28;
    dropTilt.y = (py - 0.5) * -20;
    applyDropTransform();
  });
  dropStage?.addEventListener("pointerleave", () => {
    dropTilt.x = 0;
    dropTilt.y = 0;
    if (waterDrop) waterDrop.style.transform = "";
  });

  /* ---------- ambient audio (Web Audio procedural, CC0-equivalent self-made) ---------- */
  let audioCtx = null;
  let audioOn = false;
  let masterGain = null;
  let audioNodes = [];

  function buildAmbient() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (masterGain) return;

    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(audioCtx.destination);

    // Low drone
    const makeOsc = (type, freq, gainVal, lfoFreq, lfoDepth) => {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      const lfo = audioCtx.createOscillator();
      const lfoG = audioCtx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.value = gainVal;
      lfo.frequency.value = lfoFreq;
      lfoG.gain.value = lfoDepth;
      lfo.connect(lfoG);
      lfoG.connect(osc.frequency);
      osc.connect(g);
      g.connect(masterGain);
      osc.start();
      lfo.start();
      audioNodes.push(osc, lfo);
    };

    makeOsc("sine", 55, 0.045, 0.07, 4);
    makeOsc("sine", 82.5, 0.028, 0.05, 3);
    makeOsc("triangle", 110, 0.012, 0.12, 6);

    // Filtered noise bed
    const bufferSize = 2 * audioCtx.sampleRate;
    const noiseBuf = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = audioCtx.createBufferSource();
    noise.buffer = noiseBuf;
    noise.loop = true;
    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 420;
    filter.Q.value = 0.7;
    const nGain = audioCtx.createGain();
    nGain.gain.value = 0.018;
    noise.connect(filter);
    filter.connect(nGain);
    nGain.connect(masterGain);
    noise.start();
    audioNodes.push(noise);
  }

  async function setAudio(on) {
    buildAmbient();
    if (audioCtx.state === "suspended") await audioCtx.resume();
    const now = audioCtx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.linearRampToValueAtTime(on ? 0.9 : 0, now + 0.6);
    audioOn = on;
    localStorage.setItem("tb-audio", on ? "1" : "0");
    const btn = document.getElementById("audioToggle");
    if (btn) {
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-pressed", String(on));
      btn.setAttribute("aria-label", on ? t("audio.mute") : t("audio.play"));
      const label = btn.querySelector(".audio-label");
      if (label) label.textContent = on ? t("audio.mute") : t("audio.play");
    }
  }

  document.getElementById("audioToggle")?.addEventListener("click", () => {
    setAudio(!audioOn);
  });

  /* ---------- parallax ---------- */
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

  /* ---------- assets ---------- */
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
  function setupReveal() {
    const revealEls = document.querySelectorAll(
      ".section-head, .sim-panel, .drop-layout, .wall-grid, .foil-layout, .sophon-grid, .quote-stage, .quote-grid, .law, .forest-closer, .sophon-art, .drop-art"
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- main loop ---------- */
  let last = performance.now();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function frame(now) {
    const rawDt = (now - last) / 1000;
    const dt = Math.min(0.05, Math.max(0, rawDt));
    last = now;

    drawStars(now * 0.001);

    if (!reduced) {
      // Stable time scale (~2.8x realtime), not the old unstable *18
      stepSim(dt * 2.8);
      drawSim();
      drawDropParts();
      drawFoil(dt);
    } else {
      drawSim();
      drawFoil(0);
    }

    requestAnimationFrame(frame);
  }

  /* ---------- boot ---------- */
  buildQuoteGrid();
  applyI18n();
  setupReveal();
  requestAnimationFrame(frame);
  requestAnimationFrame(() => {
    resizeTB();
    resizeDrop();
    resizeFoil();
  });

  // Pause sim when tab hidden (saves CPU, avoids huge dt spikes)
  document.addEventListener("visibilitychange", () => {
    simPaused = document.hidden;
    if (!document.hidden) last = performance.now();
  });
})();
