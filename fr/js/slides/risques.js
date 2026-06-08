export const html = `
  <span class="speaker-badge">Loïc Vanel MABOMESI</span>
  <h2>Risques et enjeux</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; max-width: 90%; margin: 0 auto;">
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="color: #ea4335; margin: 0 0 5px 0;">Risques</h4>
      <ul style="font-size: 0.48em; margin: 0;">
        <li>Souveraineté financière (2/3 des flux non européens)</li>
        <li>Géopolitique (sanctions Russie 2022)</li>
        <li>Données sensibles exportées hors UE</li>
        <li>Scheme fees non plafonnés (~1,5 Md€/an)</li>
      </ul>
    </div>
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="color: #34a853; margin: 0 0 5px 0;">Enjeux européens</h4>
      <ul style="font-size: 0.48em; margin: 0;">
        <li>Sécurité économique et financière</li>
        <li>Protection des données (RGPD vs Cloud Act)</li>
        <li>Innovation et autonomie technologique</li>
        <li>Construction d'une alternative paneuropéenne</li>
      </ul>
    </div>
  </div>
  <p class="fragment" style="font-size: 0.48em; margin-top: 15px;">
    Exemple : panne Visa Europe 2018 — millions de transactions bloquées pendant plusieurs heures.
  </p>
  <aside class="notes">
    L'exemple Russie 2022 montre que les réseaux peuvent devenir des outils de pression géopolitique.
    Visa et Mastercard sont soumis au droit américain.
    Les données de paiement (qui, quoi, où, quand) ont une valeur stratégique économique.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
