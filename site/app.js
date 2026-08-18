/* Iceberg — iceberg.hutsonlabs.com
 *
 * Three behaviours, no dependencies, no build step:
 *   1. the dock, which appears once the hero's own install buttons are gone
 *   2. the graph: it assembles itself, then you can push it around
 *   3. the beats, which drive the graph through assemble → play → agent
 *
 * The graph is a real (small) spring system rather than a canned animation:
 * dragging a node has to tug its neighbours, or the page is claiming a
 * structure it does not have.
 */

const reduce = matchMedia('(prefers-reduced-motion: reduce)');

/* ------------------------------------------------------------------ dock */
(() => {
  const dock = document.getElementById('dock');
  const hero = document.querySelector('.hero__actions');
  const foot = document.querySelector('.close');
  if (!dock || !hero) return;

  const stage = document.querySelector('.deep__stage');
  let heroGone = false, atClose = false, overStage = false, reading = false;

  /* A fixed bar over scrolling copy will cover that copy — compacting it only
     changes which line. So it retreats while the visitor is reading forward
     and comes back the instant they scroll up, which is when someone is
     looking for a way out of the page anyway. */
  const sync = () => {
    dock.dataset.state = heroGone && !atClose && !reading ? 'shown' : 'hidden';
    dock.dataset.compact = String(overStage);
  };

  new IntersectionObserver(([e]) => { heroGone = !e.isIntersecting; sync(); },
    { rootMargin: '-10px 0px 0px 0px' }).observe(hero);

  if (foot) new IntersectionObserver(([e]) => { atClose = e.isIntersecting; sync(); },
    { rootMargin: '0px 0px -20% 0px' }).observe(foot);

  if (stage) new IntersectionObserver(([e]) => { overStage = e.isIntersecting; sync(); })
    .observe(stage);

  let lastY = scrollY;
  addEventListener('scroll', () => {
    const y = Math.max(0, scrollY);
    if (Math.abs(y - lastY) < 8) return;
    const down = y > lastY;
    lastY = y;
    if (down !== reading) { reading = down; sync(); }
  }, { passive: true });
})();

/* ----------------------------------------------------------------- graph */
/* The graph's nodes and edges are authored in index.html, not built here, so
 * the section is complete and correct with this file blocked or broken. What
 * this module adds is the assembly, the drag, the filters, and the lit path. */

const NS = 'http://www.w3.org/2000/svg';

const graph = (() => {
  const svg = document.getElementById('graph');
  if (!svg) return null;

  const edgeLayer = svg.querySelector('.graph__edges');
  const nodeLayer = svg.querySelector('.graph__nodes');
  const by = new Map();
  const NODES = [], EDGES = [];

  for (const g of nodeLayer.querySelectorAll('g[data-id]')) {
    const x = +g.dataset.x, y = +g.dataset.y;
    const rec = { id: g.dataset.id, type: g.dataset.type, r: +g.dataset.r,
                  x, y, hx: x, hy: y, vx: 0, vy: 0, g, hidden: false,
                  arrives: g.dataset.id === 'clipping' };
    NODES.push(rec);
    by.set(rec.id, rec);
  }
  for (const line of edgeLayer.querySelectorAll('line')) {
    EDGES.push({ a: line.dataset.a, b: line.dataset.b, rel: line.dataset.rel,
                 na: by.get(line.dataset.a), nb: by.get(line.dataset.b), line });
  }

  function place(n) { n.g.setAttribute('transform', `translate(${n.x.toFixed(1)} ${n.y.toFixed(1)})`); }
  function draw(e) {
    e.line.setAttribute('x1', e.na.x.toFixed(1)); e.line.setAttribute('y1', e.na.y.toFixed(1));
    e.line.setAttribute('x2', e.nb.x.toFixed(1)); e.line.setAttribute('y2', e.nb.y.toFixed(1));
  }

  /* --- the spring system ------------------------------------------------
     Every node is sprung to its authored home, and every edge is a much
     weaker spring between its ends. So a drag displaces the thing you
     grabbed and visibly pulls what it is connected to. */
  let dragging = null, running = false, frame = 0;

  function tick() {
    let energy = 0;
    for (const n of by.values()) {
      if (n === dragging) continue;
      n.vx += (n.hx - n.x) * 0.022;
      n.vy += (n.hy - n.y) * 0.022;
    }
    for (const e of EDGES) {
      const dx = e.nb.x - e.na.x, dy = e.nb.y - e.na.y;
      const d = Math.hypot(dx, dy) || 1;
      const rest = Math.hypot(e.nb.hx - e.na.hx, e.nb.hy - e.na.hy);
      const f = (d - rest) * 0.010;
      const ux = (dx / d) * f, uy = (dy / d) * f;
      if (e.na !== dragging) { e.na.vx += ux; e.na.vy += uy; }
      if (e.nb !== dragging) { e.nb.vx -= ux; e.nb.vy -= uy; }
    }
    for (const n of by.values()) {
      if (n === dragging) continue;
      n.vx *= 0.86; n.vy *= 0.86;
      n.x += n.vx; n.y += n.vy;
      energy += Math.abs(n.vx) + Math.abs(n.vy);
      place(n);
    }
    for (const e of EDGES) draw(e);

    if (dragging || energy > 0.06) frame = requestAnimationFrame(tick);
    else { running = false; }
  }
  function kick() { if (!running) { running = true; frame = requestAnimationFrame(tick); } }

  /* --- dragging --------------------------------------------------------- */
  const pt = svg.createSVGPoint();
  function toSvg(ev) {
    pt.x = ev.clientX; pt.y = ev.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  nodeLayer.addEventListener('pointerdown', ev => {
    const g = ev.target.closest('g[data-id]');
    if (!g) return;
    const n = by.get(g.dataset.id);
    if (!n || n.hidden) return;
    dragging = n;
    g.classList.add('dragging');
    g.setPointerCapture(ev.pointerId);
    ev.preventDefault();
    hint('Let go and it settles back');
    kick();
  });

  nodeLayer.addEventListener('pointermove', ev => {
    if (!dragging) return;
    const p = toSvg(ev);
    dragging.x = p.x; dragging.y = p.y; dragging.vx = dragging.vy = 0;
    place(dragging);
    for (const e of EDGES) if (e.na === dragging || e.nb === dragging) draw(e);
  });

  const release = ev => {
    if (!dragging) return;
    dragging.g.classList.remove('dragging');
    try { dragging.g.releasePointerCapture(ev.pointerId); } catch {}
    dragging = null;
    kick();
  };
  nodeLayer.addEventListener('pointerup', release);
  nodeLayer.addEventListener('pointercancel', release);

  /* --- type filters ------------------------------------------------------ */
  const off = new Set();
  function applyFilter() {
    for (const n of by.values()) {
      n.hidden = off.has(n.type);
      n.g.classList.toggle('muted', n.hidden);
    }
    for (const e of EDGES) {
      const live = !e.na.hidden && !e.nb.hidden;
      e.line.style.opacity = e.line.classList.contains('on') ? (live ? '' : '.06') : '';
    }
  }
  for (const box of document.querySelectorAll('.legend input')) {
    box.addEventListener('change', () => {
      box.checked ? off.delete(box.dataset.type) : off.add(box.dataset.type);
      applyFilter();
      hint(off.size ? 'Re-reading without those' : 'Drag a node');
    });
  }

  /* --- hint ------------------------------------------------------------- */
  const hintEl = document.getElementById('stage-hint');
  let hintTimer;
  function hint(text) {
    if (!hintEl || hintEl.textContent === text) return;
    hintEl.style.opacity = '0';
    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => { hintEl.textContent = text; hintEl.style.opacity = ''; }, 180);
  }

  /* --- assembly --------------------------------------------------------- */
  function stageWhenReady() { stage(); }
  let assembled = false, staged = false;
  stageWhenReady();
  const ENTRY = { x: 700, y: -70 };          // off the panel's top-right corner

  function reveal(id, arriving) {
    const n = by.get(id);
    if (arriving) {
      n.x = ENTRY.x; n.y = ENTRY.y; n.vx = 0; n.vy = 0;
      place(n);
      for (const e of EDGES) if (e.na === n || e.nb === n) draw(e);
      n.g.classList.add('arriving');
      setTimeout(() => n.g.classList.remove('arriving'), 1600);
    }
    n.g.classList.add('on');
    for (const e of EDGES) {
      if (e.na.g.classList.contains('on') && e.nb.g.classList.contains('on')) e.line.classList.add('on');
    }
  }

  // staged only if this module is alive and motion is welcome; the markup's
  // own state is "everything visible"
  function stage() {
    if (reduce.matches || staged || assembled) return;
    staged = true;
    svg.classList.add('graph--staged');
    for (const n of NODES) n.g.classList.remove('on');
    for (const e of EDGES) e.line.classList.remove('on');
  }

  function assemble() {
    if (assembled) return;
    assembled = true;
    if (!staged) return;                       // nothing was ever hidden
    const settled = NODES.filter(n => !n.arrives);
    settled.forEach((n, i) => setTimeout(() => reveal(n.id, false), 90 * i));
    setTimeout(() => {
      reveal('clipping', true);
      hint('Drag a node');
      kick();
    }, 90 * settled.length + 420);
  }

  /* --- lighting a path (the agent's answer) ------------------------------ */
  function light(ids, on) {
    const set = new Set(ids);
    // marking the path is not enough to read at a glance — the graph drops
    // everything that is not on it
    svg.classList.toggle('lighting', on && set.size > 0);
    for (const n of by.values()) n.g.classList.toggle('lit', on && set.has(n.id));
    for (const e of EDGES) e.line.classList.toggle('lit', on && set.has(e.a) && set.has(e.b));
  }

  return { assemble, stage, light, kick };
})();

/* ----------------------------------------------------------------- beats */
(() => {
  if (!graph) return;
  const beats = [...document.querySelectorAll('.beat')];
  const answer = document.getElementById('answer');
  const PATH = ['tools-thought', 'second-brain', 'coffee-ada', 'attention', 'extended-mind', 'saturday'];

  const stage = document.querySelector('.stage');

  /* On a phone the stage pins to the top, and there is not enough screen for
     the graph and the answer to share it. Below the breakpoint the answer
     leaves the pinned panel and reads inline, under the beat that asks for
     it; the graph stays pinned above, still lighting the path. */
  const narrow = matchMedia('(max-width: 960px)');
  const agentBeat = document.querySelector('[data-beat=agent]');
  const placeAnswer = () => {
    const host = narrow.matches ? agentBeat : stage;
    if (host && answer.parentElement !== host) host.append(answer);
  };
  placeAnswer();
  narrow.addEventListener('change', placeAnswer);

  const visible = new Set();
  let current = null;

  function settle() {
    // one current beat — whichever visible beat is furthest down the page.
    // Reacting per-entry let a later entry undo an earlier one's state.
    let next = null;
    for (const b of beats) if (visible.has(b)) next = b;
    if (!next || next === current) return;
    current = next;
    for (const b of beats) b.classList.toggle('active', b === current);

    const beat = current.dataset.beat;
    graph.assemble();
    const answering = beat === 'agent';
    answer.hidden = !answering;
    stage?.classList.toggle('stage--answering', answering);
    graph.light(answering ? PATH : [], answering);
  }

  const io = new IntersectionObserver(entries => {
    for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
    settle();
  }, { rootMargin: '-42% 0px -42% 0px' });

  for (const b of beats) io.observe(b);

  /* The beats only become current inside a narrow band, but the stage is on
     screen well before that. Without this the visitor can sit looking at an
     empty panel — the one state the whole section must never show. */
  const stageEl = document.querySelector('.deep__stage');
  if (stageEl) new IntersectionObserver(([e]) => { if (e.isIntersecting) graph.assemble(); },
    { rootMargin: '120px' }).observe(stageEl);

  // the answer names nodes; hovering one isolates it in the graph
  for (const b of document.querySelectorAll('.answer b[data-node]')) {
    const focus = () => graph.light([b.dataset.node], true);
    const blur  = () => graph.light(PATH, true);
    b.addEventListener('pointerenter', focus);
    b.addEventListener('pointerleave', blur);
  }

})();
