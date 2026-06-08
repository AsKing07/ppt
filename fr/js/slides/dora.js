export const html = `
  <span class="speaker-badge">Ivan BESEVIC</span>
  <h2>Résilience et DORA</h2>
  <p style="font-size: 0.46em;">Digital Operational Resilience Act — applicable depuis janvier 2025</p>
  <table class="compact-table" style="margin: 10px auto; border-collapse: collapse; width: 92%;">
    <thead>
      <tr style="background: #4285f4; color: white;">
        <th style="padding: 8px; border: 1px solid #ddd;">Pilier DORA</th>
        <th style="padding: 8px; border: 1px solid #ddd;">Exigence clé</th>
      </tr>
    </thead>
    <tbody>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">Gestion risques TIC</td><td style="padding: 6px; border: 1px solid #ddd;">Cartographie des dépendances numériques</td></tr>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">Déclaration incidents</td><td style="padding: 6px; border: 1px solid #ddd;">Signalement quasi temps réel</td></tr>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">Tests de résilience</td><td style="padding: 6px; border: 1px solid #ddd;">TLPT tous les 3 ans (systèmes critiques)</td></tr>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">Risques tiers (TPRM)</td><td style="padding: 6px; border: 1px solid #ddd;">Surveillance des réseaux de cartes</td></tr>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">Partage d'informations</td><td style="padding: 6px; border: 1px solid #ddd;">Échange sur les cybermenaces</td></tr>
    </tbody>
  </table>
  <aside class="notes">
    DORA transforme la résilience d'un exercice de conformité en impératif métier continu.
    Les banques doivent identifier leurs dépendances critiques incluant Visa et Mastercard.
    Une panne majeure sur ces infrastructures est une menace pour la stabilité financière.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
