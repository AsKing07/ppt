/**
 * Workflow interactif Visa — visuel enrichi
 */

export function buildWorkflow(containerId, config) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  const state = { step: 0, maxStep: config.steps.length };
  const theme = config.theme || 'auth';

  container.innerHTML = `
    <div class="visa-workflow visa-theme-${theme}${config.tall ? ' visa-workflow-tall' : ''}">
      <div class="visa-workflow-header">
        ${config.phaseLabel ? `<span class="visa-phase-badge">${config.phaseLabel}</span>` : ''}
        <div class="visa-progress" id="${containerId}-progress"></div>
      </div>
      <div class="visa-workflow-body">
        <div class="visa-workflow-track" id="${containerId}-track"></div>
        <svg class="visa-workflow-svg" id="${containerId}-svg"></svg>
      </div>
      <div class="visa-step-card" id="${containerId}-card">
        <span class="visa-step-num" id="${containerId}-num">01</span>
        <p class="visa-step-desc" id="${containerId}-desc">${config.steps[0].desc}</p>
      </div>
      <div class="visa-workflow-controls">
        <button type="button" class="visa-btn" id="${containerId}-prev" disabled>${config.prevLabel || '◀ Précédent'}</button>
        <span class="visa-step-counter" id="${containerId}-counter">${config.stepPrefix || 'Étape'} 1 / ${state.maxStep}</span>
        <button type="button" class="visa-btn visa-btn-primary" id="${containerId}-next">${config.nextLabel || 'Suivant ▶'}</button>
      </div>
    </div>
  `;

  const track = document.getElementById(`${containerId}-track`);
  const svg = document.getElementById(`${containerId}-svg`);
  const desc = document.getElementById(`${containerId}-desc`);
  const numEl = document.getElementById(`${containerId}-num`);
  const counter = document.getElementById(`${containerId}-counter`);
  const btnPrev = document.getElementById(`${containerId}-prev`);
  const btnNext = document.getElementById(`${containerId}-next`);
  const progressEl = document.getElementById(`${containerId}-progress`);

  config.steps.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'visa-progress-dot';
    dot.title = config.steps[i].title || `${config.stepPrefix || 'Étape'} ${i + 1}`;
    dot.addEventListener('click', () => { state.step = i; updateUI(); });
    progressEl.appendChild(dot);
  });

  config.nodes.forEach((node, i) => {
    const el = document.createElement('div');
    el.className = 'visa-node';
    el.id = `${containerId}-node-${i}`;
    const color = node.color || '#4285f4';
    el.innerHTML = `
      <span class="visa-node-icon" style="--node-color:${color}">
        <span class="visa-node-pulse"></span>
        <span class="visa-node-emoji">${node.icon}</span>
      </span>
      <span class="visa-node-label">${node.label}</span>
      ${node.sublabel ? `<span class="visa-node-sublabel">${node.sublabel}</span>` : ''}
    `;
    el.style.left = `${node.x}%`;
    el.style.top = `${node.y}%`;
    track.appendChild(el);
  });

  function getStepState() {
    const stepData = config.steps[state.step];
    const lastNode = config.nodes.length - 1;
    const activeNodes = stepData.activeNodes ?? [Math.min(state.step, lastNode)];
    const doneNodes = stepData.doneNodes ?? [];
    const connections = stepData.connections ?? (
      Array.from({ length: state.step }, (_, i) => i)
    );
    return { stepData, activeNodes, doneNodes, connections };
  }

  function pathD(x1, y1, x2, y2, conn) {
    if (conn.drop) {
      const midY = y1 + (y2 - y1) * 0.5;
      return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
    }
    const curved = conn.curved ?? conn.from > conn.to;
    if (!curved) return `M ${x1} ${y1} L ${x2} ${y2}`;
    const laneY = Math.max(y1, y2) + (conn.bulge ?? 40);
    const cx = (x1 + x2) / 2;
    return `M ${x1} ${y1} Q ${cx} ${laneY} ${x2} ${y2}`;
  }

  function drawArrows() {
    svg.innerHTML = '';
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker.setAttribute('id', `arrow-${containerId}`);
    marker.setAttribute('markerWidth', '7');
    marker.setAttribute('markerHeight', '7');
    marker.setAttribute('refX', '6');
    marker.setAttribute('refY', '3.5');
    marker.setAttribute('orient', 'auto');
    const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    poly.setAttribute('points', '0 0, 7 3.5, 0 7');
    poly.setAttribute('fill', '#1a56db');
    marker.appendChild(poly);
    defs.appendChild(marker);
    svg.appendChild(defs);

    const { connections: activeConns } = getStepState();
    const cr = container.getBoundingClientRect();

    config.connections.forEach((conn, i) => {
      const from = document.getElementById(`${containerId}-node-${conn.from}`);
      const to = document.getElementById(`${containerId}-node-${conn.to}`);
      if (!from || !to) return;
      const fr = from.getBoundingClientRect();
      const tr = to.getBoundingClientRect();
      const x1 = fr.left + fr.width / 2 - cr.left;
      const y1 = fr.top + fr.height / 2 - cr.top;
      const x2 = tr.left + tr.width / 2 - cr.left;
      const y2 = tr.top + tr.height / 2 - cr.top;
      const active = activeConns.includes(i);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathD(x1, y1, x2, y2, conn));
      path.setAttribute('class', `visa-arrow ${active ? 'active' : ''}${conn.funds ? ' visa-arrow-funds' : ''}`);
      if (active) path.setAttribute('marker-end', `url(#arrow-${containerId})`);
      svg.appendChild(path);
    });
  }

  function updateUI() {
    const { stepData, activeNodes, doneNodes, connections } = getStepState();
    const activeSet = new Set(activeNodes);
    const doneSet = new Set(doneNodes);

    config.nodes.forEach((_, i) => {
      const el = document.getElementById(`${containerId}-node-${i}`);
      if (!el) return;
      el.classList.remove('active', 'done');
      if (activeSet.has(i)) el.classList.add('active');
      else if (doneSet.has(i)) el.classList.add('done');
    });

    progressEl.querySelectorAll('.visa-progress-dot').forEach((dot, i) => {
      dot.classList.toggle('done', i < state.step);
      dot.classList.toggle('active', i === state.step);
    });

    desc.textContent = stepData.desc;
    numEl.textContent = String(state.step + 1).padStart(2, '0');
    counter.textContent = `${config.stepPrefix || 'Étape'} ${state.step + 1} / ${state.maxStep}`;
    btnPrev.disabled = state.step === 0;
    btnNext.disabled = state.step >= state.maxStep - 1;
    btnNext.textContent = state.step >= state.maxStep - 1
      ? (config.doneLabel || 'Terminé ✓')
      : (config.nextLabel || 'Suivant ▶');
    requestAnimationFrame(drawArrows);
  }

  btnNext.addEventListener('click', () => {
    if (state.step < state.maxStep - 1) { state.step++; updateUI(); }
  });
  btnPrev.addEventListener('click', () => {
    if (state.step > 0) { state.step--; updateUI(); }
  });

  const onResize = () => drawArrows();
  window.addEventListener('resize', onResize);
  updateUI();

  return {
    destroy() {
      window.removeEventListener('resize', onResize);
      container.innerHTML = '';
    }
  };
}
