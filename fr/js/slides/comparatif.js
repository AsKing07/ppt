export const html = `
  <span class="speaker-badge">Loïc Vanel MABOMESI</span>
  <h2>Analyse comparative</h2>
  <div style="overflow-x: auto; max-width: 95%; margin: 0 auto;">
    <table class="compact-table" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background: #4285f4; color: white;">
          <th style="padding: 6px; border: 1px solid #ddd;">Solution</th>
          <th style="padding: 6px; border: 1px solid #ddd;">Avantages</th>
          <th style="padding: 6px; border: 1px solid #ddd;">Limites</th>
        </tr>
      </thead>
      <tbody>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>Visa / MC</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">Acceptation mondiale, simplicité</td>
          <td style="padding: 5px; border: 1px solid #ddd;">Dépendance US, coûts élevés</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>Wero / EPI</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">Souveraineté, coûts réduits</td>
          <td style="padding: 5px; border: 1px solid #ddd;">Adoption limitée, effet réseau</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>Euro numérique</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">Contrôle BCE, sécurité</td>
          <td style="padding: 5px; border: 1px solid #ddd;">Vie privée, complexité</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>SEPA Instant</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">Rapidité, autonomie UE</td>
          <td style="padding: 5px; border: 1px solid #ddd;">Moins universel que cartes</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>Systèmes nationaux</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">Adoption locale forte</td>
          <td style="padding: 5px; border: 1px solid #ddd;">Fragmentation européenne</td>
        </tr>
      </tbody>
    </table>
  </div>
  <aside class="notes">
    Pas de remplacement brutal de Visa/MC — diversification progressive.
    Effets de réseau : utilisateurs n'adoptent que si accepté partout, commerçants inversement.
    Concurrence des Big Tech (Apple Pay, Google Pay, PayPal) complique le paysage.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
