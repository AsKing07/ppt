export const html = `
  <span class="speaker-badge">Dandara Helen SOUZA GOMES</span>
  <h2>Alternatives européennes</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width: 92%; margin: 0 auto;">
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="margin: 0 0 5px 0;">EPI / Wero</h4>
      <p style="font-size: 0.45em; margin: 0;">Paiement paneuropéen A2A — BNP Paribas, Deutsche Bank, Société Générale</p>
    </div>
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="margin: 0 0 5px 0;">SEPA Instant (TIPS)</h4>
      <p style="font-size: 0.45em; margin: 0;">Virements en &lt; 10 secondes, 24/7, ISO 20022</p>
    </div>
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="margin: 0 0 5px 0;">Euro numérique (BCE)</h4>
      <p style="font-size: 0.45em; margin: 0;">MNBC complémentaire, souveraineté monétaire</p>
    </div>
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="margin: 0 0 5px 0;">Réseaux nationaux</h4>
      <p style="font-size: 0.45em; margin: 0;">CB (FR), Girocard (DE), Bancontact (BE), iDEAL (NL)</p>
    </div>
  </div>
  <p class="fragment" style="font-size: 0.45em; margin-top: 12px;">
    Défi principal : <strong>interopérabilité</strong> entre systèmes nationaux fragmentés
  </p>
  <aside class="notes">
    Wero déjà déployé P2P en Allemagne, France, Belgique. Ambition : paiements magasin, en ligne, mobile.
    SEPA Instant via TIPS (Eurosystème) — coûts unitaires très faibles.
    Les réseaux nationaux sont efficaces localement mais non interopérables à l'échelle UE.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
