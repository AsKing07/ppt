export const html = `
  <span class="speaker-badge">Loïc Vanel MABOMESI</span>
  <h2>Constraints Imposed by Visa / Mastercard</h2>
  <ul>
    <li class="fragment"><strong>EMV</strong> — Mandatory chip, ADVT/CDET certification, liability shift</li>
    <li class="fragment"><strong>PCI-DSS</strong> — 12 requirements, 4 tiers by volume (QSA audit for Tier 1)</li>
    <li class="fragment"><strong>Honor All Cards</strong> — Mandatory acceptance of all cards under the brand</li>
    <li class="fragment"><strong>Scheme Fees</strong> — 800+ fees per network, opacity, unilateral increases</li>
  </ul>
  <p class="fragment" style="font-size: 0.48em; margin-top: 10px;">
    Interchange capped (0.2% debit / 0.3% credit) but scheme fees <em>uncapped</em> — EU Commission inquiry since 2024.
  </p>
  <aside class="notes">
    EMV co-developed since 1995 by Visa and Mastercard.
    PCI-DSS initially created by Visa (CISP) — perpetual compliance constraint.
    Honor All Cards: merchants must accept all Visa/MC cards under the brand.
    EuroCommerce estimates €1.5 billion/year in costs linked to scheme fees.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
