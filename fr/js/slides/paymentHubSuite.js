export const html = `  <span class="speaker-badge">Ivan BESEVIC</span>
  <h2>Payment Hub — Silos vs multi-rail</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width: 92%; margin: 0 auto;">
    <div class="card fragment" style="padding: 8px; margin: 0;">
      <h4 style="color: #ea4335; margin: 0 0 5px 0; font-size: 0.7em;">Silos traditionnels</h4>
      <ul style="font-size: 0.42em; margin: 0;">
        <li>Connectivité point à point</li>
        <li>Logique codée en dur</li>
        <li>Données éparpillées</li>
      </ul>
    </div>
    <div class="card fragment" style="padding: 8px; margin: 0; border: 2px solid #34a853;">
      <h4 style="color: #34a853; margin: 0 0 5px 0; font-size: 0.7em;">Payment Hub</h4>
      <ul style="font-size: 0.42em; margin: 0;">
        <li>API unifiée multi-rails</li>
        <li>Orchestration intelligente</li>
        <li>Modèle canonique ISO 8583 ↔ 20022</li>
      </ul>
    </div>
  </div>
  <p class="fragment" style="font-size: 0.42em; margin-top: 10px;">
    DIH + moteur d'orchestration : Wero (P2P), carte (international), SEPA Inst (domestique)
  </p>
  <aside class="notes">
    Fin de l'ère du silo carte. Le hub choisit le rail optimal selon coût, vitesse et risque.
    Exemple : P2P → Wero, sinon bascule carte si bénéficiaire non inscrit EPI.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
