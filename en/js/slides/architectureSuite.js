export const html = `
  <span class="speaker-badge">Charbel SONON</span>
  <h2>Architecture — Middleware & Standards</h2>
  <div class="arch-suite">
    <div class="arch-suite-layers">
      <div class="arch-layer arch-layer-channels fragment">
        <span class="arch-layer-tag">Channels</span>
        <div class="arch-chips">
          <span class="arch-chip">🖥️ POS</span>
          <span class="arch-chip">🏧 ATM</span>
          <span class="arch-chip">🌐 Web / Mobile</span>
        </div>
      </div>

      <div class="arch-connector-v fragment">▼</div>

      <div class="arch-layer arch-layer-core">
        <div class="arch-core-card arch-switch fragment" data-focus="switch">
          <div class="arch-card-icon">🔀</div>
          <div class="arch-card-body">
            <strong>Payment Switch</strong>
            <span>Receive · Validate · Route ISO 8583</span>
          </div>
        </div>
        <div class="arch-core-bridge fragment">
          <span class="arch-bridge-line"></span>
          <span class="arch-bridge-label">Orchestration</span>
          <span class="arch-bridge-line"></span>
        </div>
        <div class="arch-core-card arch-hub fragment" data-focus="hub">
          <div class="arch-card-icon">🏗️</div>
          <div class="arch-card-body">
            <strong>Payment Hub</strong>
            <span>Cards · SEPA · Instant · Transfers</span>
          </div>
        </div>
      </div>

      <div class="arch-connector-v fragment">▼</div>

      <div class="arch-layer arch-layer-rails fragment">
        <span class="arch-layer-tag">Payment rails</span>
        <div class="arch-rails">
          <div class="arch-rail arch-rail-legacy">
            <span class="arch-rail-badge">ISO 8583</span>
            <span>Visa · Mastercard · Card authorization</span>
          </div>
          <div class="arch-rail arch-rail-modern">
            <span class="arch-rail-badge">ISO 20022</span>
            <span>SEPA · Instant payments · Transfers</span>
          </div>
        </div>
      </div>
    </div>

    <div class="arch-security-bar fragment">
      <span class="arch-security-icon">🔒</span>
      <strong>PCI-DSS</strong>
      <span class="arch-security-sep">·</span>
      <span>Network segmentation</span>
      <span class="arch-security-sep">·</span>
      <span>End-to-end encryption</span>
      <span class="arch-security-sep">·</span>
      <span>Logging & audit</span>
    </div>

    <p class="arch-suite-footnote fragment">Legacy / modern coexistence — the hub consolidates without abrupt replacement</p>
  </div>
  <aside class="notes">
    Describe ISO 8583 and ISO 20022 coexistence in hub architectures.
    The switch connects POS, ATMs, processors and international networks.
    PFMI (CPSS-IOSCO): geographic redundancy, BCP, critical vendor management.
  </aside>
`;

export function initialize() {
  document.querySelectorAll('.arch-core-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.arch-core-card').forEach(c => c.classList.remove('focused'));
      card.classList.add('focused');
    });
  });
}

export function cleanup() {
  document.querySelectorAll('.arch-core-card').forEach(card => {
    card.replaceWith(card.cloneNode(true));
  });
}
