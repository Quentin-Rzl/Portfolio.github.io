/* ============================================================
   animations.js — Animations de fond (un canvas par onglet)
   ============================================================ */
(function () {

  /* ---- Utilitaires ---- */
  function hex2rgb(h) {
    const n = parseInt(h.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  const LIGHT_RGB = [60, 60, 60];

  function getRGB(darkRgb) {
    return document.body.classList.contains('light-mode') ? LIGHT_RGB : darkRgb;
  }

  /* ---- Étoiles flottantes (Accueil) ---- */
  function makeStars(rgb) {
    const N = 100;
    const stars = Array.from({ length: N }, () => ({
      x:  Math.random(),
      y:  Math.random(),
      vx: (Math.random() - .5) * .00015,
      vy: (Math.random() - .5) * .00015,
      s:  Math.random() * 2.5 + 1,
      a:  Math.random(),
      da: (Math.random() - .5) * .015,
    }));

    return function (ctx, w, h) {
      const [r, g, b] = getRGB(rgb);
      ctx.clearRect(0, 0, w, h);
      stars.forEach(s => {
        s.x = (s.x + s.vx + 1) % 1;
        s.y = (s.y + s.vy + 1) % 1;
        s.a = Math.max(0, Math.min(1, s.a + s.da));
        if (s.a <= 0 || s.a >= 1) s.da = -s.da;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${s.a * .55})`;
        ctx.fill();
      });
    };
  }

  /* ---- Pluie matricielle (Projets) ---- */
  function makeMatrix(rgb) {
    const chars = '01アイウエカキクコサシスセタチ'.split('');
    let cols = [];
    let lastWidth = 0;

    function initCols(w, h) {
      const n = Math.floor(w / 18);
      cols = Array.from({ length: n }, () => ({
        x:   Math.random() * w,
        y:   Math.random() * h * -1,
        spd: Math.random() * 60 + 40,
        len: Math.floor(Math.random() * 14) + 6,
      }));
    }

    return function (ctx, w, h, t) {
      if (w !== lastWidth) { initCols(w, h); lastWidth = w; }
      const [r, g, b] = getRGB(rgb);
      ctx.clearRect(0, 0, w, h);
      ctx.font = '13px monospace';

      cols.forEach(col => {
        const yy = col.y % (h + col.len * 18);
        for (let i = 0; i < col.len; i++) {
          const cy = yy - i * 18;
          if (cy < 0 || cy > h) continue;
          const a = (1 - i / col.len) * .45;
          ctx.fillStyle = `rgba(${r},${g},${b},${i === 0 ? a * 1.8 : a})`;
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], col.x, cy);
        }
        col.y += col.spd * .016;
        if (col.y > h + col.len * 18) col.y = -col.len * 18;
      });
    };
  }

  /* ---- Radar (Veille) ---- */
  function makeRadar(rgb) {
    const pings = [];
    return function (ctx, w, h, t) {
      const [r, g, b] = getRGB(rgb);
      ctx.clearRect(0, 0, w, h);
      const cx    = w / 2;
      const cy    = h / 2;
      const R     = Math.min(w, h) * .42;
      const angle = (t * .0005) % (Math.PI * 2);

      // Cercles concentriques
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, R * i / 4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r},${g},${b},.12)`;
        ctx.lineWidth   = 1;
        ctx.stroke();
      }

      // Balayage
      ctx.beginPath(); ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * R, cy + Math.sin(angle) * R);
      ctx.strokeStyle = `rgba(${r},${g},${b},.7)`;
      ctx.lineWidth   = 2;
      ctx.stroke();

      // Pings aléatoires
      if (Math.random() < .004) {
        pings.push({
          x:  cx + (Math.random() - .5) * R * 1.6,
          y:  cy + (Math.random() - .5) * R * 1.6,
          rr: 0,
          a:  .6,
        });
      }

      pings.forEach((p) => {
        p.rr += .8; p.a -= .01;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r},${g},${b},${Math.max(0, p.a)})`;
        ctx.lineWidth   = 1.5;
        ctx.stroke();
      });
      // Nettoyage hors boucle pour éviter le décalage d'index
      pings.splice(0, pings.length, ...pings.filter(p => p.a > 0));
    };
  }

  /* ---- Réseau Neuronal (Compétences) ---- */
  function makeNetwork(rgb) {
    const N = 30;
    let nodes = [];
    let lastWidth = 0;

    function init(w, h) {
      nodes = Array.from({ length: N }, () => ({
        x:  Math.random() * w,
        y:  Math.random() * h,
        vx: (Math.random() - .5) * .4,
        vy: (Math.random() - .5) * .4,
        rr: Math.random() * 3 + 2,
      }));
    }

    return function (ctx, w, h) {
      if (w !== lastWidth) { init(w, h); lastWidth = w; }
      const [r, g, b] = getRGB(rgb);
      ctx.clearRect(0, 0, w, h);

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx = -n.vx;
        if (n.y < 0 || n.y > h) n.vy = -n.vy;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - d / 160) * .3})`;
            ctx.lineWidth   = 1;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.rr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},.45)`;
        ctx.fill();
      });
    };
  }

  /* ---- Ondes concentriques (Contact) ---- */
  function makeRipples(rgb) {
    const rings = [];
    let lastTime = 0;

    return function (ctx, w, h, t) {
      const [r, g, b] = getRGB(rgb);
      ctx.clearRect(0, 0, w, h);

      if (t - lastTime > 1200) {
        rings.push({
          x:   Math.random() * w,
          y:   Math.random() * h,
          rr:  0,
          a:   .55,
          spd: Math.random() * 35 + 20,
        });
        lastTime = t;
      }

      rings.forEach((ring) => {
        ring.rr += ring.spd * .016;
        ring.a  -= .003;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.rr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r},${g},${b},${Math.max(0, ring.a)})`;
        ctx.lineWidth   = 2;
        ctx.stroke();
      });
      rings.splice(0, rings.length, ...rings.filter(ring => ring.a > 0));
    };
  }

  /* ---- Orbes flottants (Profil) ---- */
  function makeOrbs(rgb) {
    const orbs = [];
    let lastWidth = 0;

    function init(w, h) {
      orbs.length = 0;
      for (let i = 0; i < 22; i++) {
        orbs.push({
          x:     Math.random() * w,
          y:     Math.random() * h,
          sp:    Math.random() * .5 + .15,
          rr:    Math.random() * 28 + 8,
          op:    Math.random() * .35 + .08,
          wx:    Math.random() * 2 - 1,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    return function (ctx, w, h, t) {
      if (w !== lastWidth) { init(w, h); lastWidth = w; }
      const [rv, gv, bv] = getRGB(rgb);
      ctx.clearRect(0, 0, w, h);

      orbs.forEach(o => {
        o.y -= o.sp;
        o.x += Math.sin(t * .0008 + o.phase) * o.wx * .4;
        if (o.y + o.rr < 0) { o.y = h + o.rr; o.x = Math.random() * w; }

        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.rr);
        grad.addColorStop(0, `rgba(${rv},${gv},${bv},${o.op})`);
        grad.addColorStop(1, `rgba(${rv},${gv},${bv},0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.rr, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });
    };
  }

  /* ---- Circuit imprimé (E5) ---- */
  function makeCircuit(rgb) {
    const pulses = [];
    let lastW = 0, lastH = 0;
    const STEP = 80;

    return function (ctx, w, h, t) {
      if (w !== lastW || h !== lastH) { lastW = w; lastH = h; }
      const [rv, gv, bv] = getRGB(rgb);
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / STEP);
      const rows = Math.ceil(h / STEP);

      // Grille de fond
      ctx.strokeStyle = `rgba(${rv},${gv},${bv},.07)`;
      ctx.lineWidth   = 1;
      for (let x = 0; x <= cols; x++) {
        ctx.beginPath(); ctx.moveTo(x * STEP, 0); ctx.lineTo(x * STEP, h); ctx.stroke();
      }
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath(); ctx.moveTo(0, y * STEP); ctx.lineTo(w, y * STEP); ctx.stroke();
      }

      // Noeuds
      for (let x = 0; x <= cols; x++) {
        for (let y = 0; y <= rows; y++) {
          ctx.beginPath(); ctx.arc(x * STEP, y * STEP, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rv},${gv},${bv},.22)`;
          ctx.fill();
        }
      }

      // Pulses
      if (Math.random() < .018) {
        if (Math.random() < .5) {
          const y = Math.floor(Math.random() * (rows + 1)) * STEP;
          pulses.push({ x: 0, y, vx: 2.5, vy: 0, a: .8, len: 50 });
        } else {
          const x = Math.floor(Math.random() * (cols + 1)) * STEP;
          pulses.push({ x, y: 0, vx: 0, vy: 2.5, a: .8, len: 50 });
        }
      }

      pulses.forEach((p) => {
        ctx.beginPath();
        if (p.vx) { ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.len, p.y); }
        else       { ctx.moveTo(p.x, p.y); ctx.lineTo(p.x, p.y - p.len); }
        ctx.strokeStyle = `rgba(${rv},${gv},${bv},${p.a})`;
        ctx.lineWidth   = 1.8;
        ctx.stroke();

        ctx.beginPath(); ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rv},${gv},${bv},${p.a})`;
        ctx.fill();

        p.x += p.vx; p.y += p.vy; p.a -= .004;
      });
      pulses.splice(0, pulses.length, ...pulses.filter(p => p.a > 0 && p.x <= w + p.len && p.y <= h + p.len));
    };
  }

  /* ---- Configuration des onglets ---- */
  const TABS = {
    accueil:     { color: '#ffffff', maker: makeStars   },
    profil:      { color: '#ff8c00', maker: makeOrbs    },
    projets:     { color: '#ffd700', maker: makeMatrix  },
    e5:          { color: '#39d353', maker: makeCircuit },
    veille:      { color: '#3b9eff', maker: makeRadar   },
    competences: { color: '#a855f7', maker: makeNetwork },
    contact:     { color: '#ff3b3b', maker: makeRipples },
  };

  const renderers = {};

  /* Création d'un canvas par onglet */
  Object.entries(TABS).forEach(([id, cfg]) => {
    const page = document.getElementById(id);
    if (!page) return;

    const canvas      = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    page.insertBefore(canvas, page.firstChild);

    const ctx     = canvas.getContext('2d');
    const darkRgb = hex2rgb(cfg.color);
    const fn      = cfg.maker(darkRgb);

    function resize() {
      canvas.width  = page.offsetWidth;
      canvas.height = page.offsetHeight;
    }
    resize();
    new ResizeObserver(resize).observe(page);

    renderers[id] = { ctx, canvas, fn, darkRgb, page };
  });

  /* ---- Boucle de rendu unique ---- */
  function loop(t) {
    Object.entries(renderers).forEach(([id, rd]) => {
      if (!rd.page.classList.contains('active')) return;
      rd.fn(rd.ctx, rd.canvas.width, rd.canvas.height, t);
    });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

})();
