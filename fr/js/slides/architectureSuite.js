export const html = `
  <span class="speaker-badge">Charbel SONON</span>
  <h2>Architecture — Middleware & normes</h2>
  <div class="arch-suite">
    <div class="arch-suite-layers">
      <div class="arch-layer arch-layer-channels fragment">
        <span class="arch-layer-tag">Canaux</span>
        <div class="arch-chips">
          <span class="arch-chip">🖥️ TPE</span>
          <span class="arch-chip">🏧 GAB</span>
          <span class="arch-chip">🌐 Web / Mobile</span>
        </div>
      </div>

      <div class="arch-connector-v fragment">▼</div>

      <div class="arch-layer arch-layer-core">
        <div class="arch-core-card arch-switch fragment" data-focus="switch">
          <div class="arch-card-icon">🔀</div>
          <div class="arch-card-body">
            <strong>Payment Switch</strong>
            <span>Réception · Validation · Routage ISO 8583</span>
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
            <span>Cartes · SEPA · Instant · Virements</span>
          </div>
        </div>
      </div>

      <div class="arch-connector-v fragment">▼</div>

      <div class="arch-layer arch-layer-rails fragment">
        <span class="arch-layer-tag">Rails de paiement</span>
        <div class="arch-rails">
          <div class="arch-rail arch-rail-legacy">
            <span class="arch-rail-badge">ISO 8583</span>
            <span>Visa · Mastercard · Autorisation cartes</span>
          </div>
          <div class="arch-rail arch-rail-modern">
            <span class="arch-rail-badge">ISO 20022</span>
            <span>SEPA · Instant payments · Virements</span>
          </div>
        </div>
      </div>
    </div>

    <div class="arch-security-bar fragment">
      <span class="arch-security-icon">🔒</span>
      <strong>PCI-DSS</strong>
      <span class="arch-security-sep">·</span>
      <span>Segmentation réseau</span>
      <span class="arch-security-sep">·</span>
      <span>Chiffrement bout-en-bout</span>
      <span class="arch-security-sep">·</span>
      <span>Journalisation & audit</span>
    </div>

    <p class="arch-suite-footnote fragment">Coexistence legacy / moderne — le hub mutualise sans remplacer brutalement l'existant</p>
  </div>
  <aside class="notes">
    Décrire la coexistence ISO 8583 et ISO 20022 dans les architectures hub.
    Le switch dialogue avec TPE, GAB, processeurs et réseaux internationaux.
    PFMI (CPSS-IOSCO) : redondance géographique, PCA, gestion des prestataires critiques.
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
