export const html = `
  <span class="speaker-badge">Loïc Vanel MABOMESI</span>
  <h2>Contraintes imposées par Visa / Mastercard</h2>
  <ul>
    <li class="fragment"><strong>EMV</strong> — Puce obligatoire, certification ADVT/CDET, liability shift</li>
    <li class="fragment"><strong>PCI-DSS</strong> — 12 exigences, 4 niveaux selon volume (audit QSA pour Niveau 1)</li>
    <li class="fragment"><strong>Honor All Cards</strong> — Acceptation totale des cartes de la marque</li>
    <li class="fragment"><strong>Scheme Fees</strong> — 800+ frais par réseau, opacité, hausse unilatérale</li>
  </ul>
  <p class="fragment" style="font-size: 0.48em; margin-top: 10px;">
    Interchange plafonné (0,2% débit / 0,3% crédit) mais scheme fees <em>non plafonnés</em> — enquête CE depuis 2024.
  </p>
  <aside class="notes">
    EMV co-développé depuis 1995 par Visa et Mastercard.
    PCI-DSS créé initialement par Visa (CISP) — contrainte perpétuelle de conformité.
    Honor All Cards : commerçant doit accepter toutes les cartes Visa/MC de la marque.
    EuroCommerce estime 1,5 milliard €/an de coûts liés aux scheme fees.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
