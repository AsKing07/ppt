export const html = `
  <span class="speaker-badge">Loïc Vanel MABOMESI</span>
  <h2>Analyse comparative</h2>
  <div style="overflow-x: auto; max-width: 95%; margin: 0 auto;">
    <table class="compact-table" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background: #4285f4; color: white;">
          <th style="padding: 5px; border: 1px solid #ddd;">Solution</th>
          <th style="padding: 5px; border: 1px solid #ddd;">Avantages</th>
          <th style="padding: 5px; border: 1px solid #ddd;">Limites</th>
        </tr>
      </thead>
      <tbody>
        <tr class="fragment">
          <td style="padding: 4px; border: 1px solid #ddd;"><strong>Visa / MC</strong></td>
          <td style="padding: 4px; border: 1px solid #ddd;">Acceptation mondiale</td>
          <td style="padding: 4px; border: 1px solid #ddd;">Dépendance US, coûts élevés</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 4px; border: 1px solid #ddd;"><strong>Wero / EPI</strong></td>
          <td style="padding: 4px; border: 1px solid #ddd;">Souveraineté, coûts réduits</td>
          <td style="padding: 4px; border: 1px solid #ddd;">Adoption limitée, effet réseau</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 4px; border: 1px solid #ddd;"><strong>Euro numérique</strong></td>
          <td style="padding: 4px; border: 1px solid #ddd;">Contrôle BCE</td>
          <td style="padding: 4px; border: 1px solid #ddd;">Vie privée, complexité</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 4px; border: 1px solid #ddd;"><strong>SEPA Instant</strong></td>
          <td style="padding: 4px; border: 1px solid #ddd;">Rapidité, autonomie UE</td>
          <td style="padding: 4px; border: 1px solid #ddd;">Moins universel que cartes</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 4px; border: 1px solid #ddd;"><strong>Systèmes nationaux</strong></td>
          <td style="padding: 4px; border: 1px solid #ddd;">Adoption locale</td>
          <td style="padding: 4px; border: 1px solid #ddd;">Fragmentation européenne</td>
        </tr>
      </tbody>
    </table>
  </div>
  <ul class="fragment" style="font-size: 0.4em; margin-top: 8px; text-align: left; max-width: 92%;">
    <li><strong>Défis transverses</strong> : effets de réseau, fragmentation réglementaire, concurrence Big Tech (Apple Pay, Google Pay)</li>
    <li><strong>Enjeu</strong> : masse critique commerçants + consommateurs — diversification progressive, pas de remplacement brutal</li>
  </ul>
  <aside class="notes">
    Tableau comparatif + limites fusionnées. Insister sur l'effet réseau et la souveraineté numérique.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
