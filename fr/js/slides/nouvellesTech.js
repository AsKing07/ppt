export const html = `
  <span class="speaker-badge">Charbel SONON</span>
  <h2>Nouvelles technologies de paiement</h2>
  <ul>
    <li class="fragment"><strong>SEPA Instant Credit Transfer</strong> — Rail alternatif aux cartes, règlement TIPS en monnaie centrale</li>
    <li class="fragment"><strong>Paiements A2A</strong> — Compte à compte sans intermédiaire carte, moins coûteux</li>
    <li class="fragment"><strong>Open Banking (PSD2/PSD3)</strong> — APIs PISP/AISP, authentification forte (SCA)</li>
    <li class="fragment"><strong>Pay by Bank</strong> — Initiation de virement depuis le compte client</li>
  </ul>
  <p class="fragment" style="font-size: 0.48em; margin-top: 12px;">
    Impact SI : API management, hubs de paiement, scoring temps réel, monitoring 24/7
  </p>
  <aside class="notes">
    PSD2 oblige les banques à exposer des APIs sécurisées pour les PISP.
    Les fintechs peuvent offrir des parcours A2A en concurrence directe avec les cartes.
    Visa et Mastercard ont réagi avec leurs propres plateformes développeurs (Visa Developer, Mastercard Developers).
    L'enjeu : orchestrer cartes + SEPA Inst + Open Banking dans un hub unique.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
