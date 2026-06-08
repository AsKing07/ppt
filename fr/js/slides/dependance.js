/**
 * Dépendance des banques européennes - avec graphique Chart.js
 */

export const html = `
  <span class="speaker-badge">Ivan BESEVIC</span>
  <h2>Dépendance des banques européennes</h2>
  <div style="display: flex; gap: 12px; align-items: flex-start; justify-content: center;">
    <ul style="flex: 1; max-width: 45%; font-size: 0.46em;">
      <li class="fragment"><strong>57%</strong> des paiements scripturaux par carte (zone euro, H1 2025)</li>
      <li class="fragment"><strong>61%+</strong> des transactions captées par les schémas internationaux</li>
      <li class="fragment"><strong>13 pays</strong> sans schéma national — 100% Visa/MC</li>
      <li class="fragment">Verrouillage ISO 8583 + certifications propriétaires (Kernel L2)</li>
    </ul>
    <div class="chart-container" style="flex: 1; max-width: 50%; height: 220px;">
      <canvas id="dependanceChart"></canvas>
    </div>
  </div>
  <aside class="notes">
    Chiffres BCE H1 2024/2025 : 77,7 milliards de paiements scripturaux, 879M cartes en circulation.
    Même en France (CB) ou Allemagne (Girocard), érosion au profit des réseaux globaux via e-commerce et Apple/Google Pay.
    Le TCO des infrastructures legacy ISO 8583 est sous-estimé de 70-80%.
  </aside>
`;

let dependanceChart = null;

export function initialize() {
  const ctx = document.getElementById('dependanceChart').getContext('2d');
  dependanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Cartes', 'Virements', 'Prélèvements', 'Autres'],
      datasets: [{
        label: 'Part des paiements scripturaux (%)',
        data: [57, 25, 14, 4],
        backgroundColor: [
          'rgba(66, 133, 244, 0.7)',
          'rgba(52, 168, 83, 0.5)',
          'rgba(251, 188, 5, 0.5)',
          'rgba(234, 67, 53, 0.4)'
        ],
        borderColor: [
          'rgba(66, 133, 244, 1)',
          'rgba(52, 168, 83, 1)',
          'rgba(251, 188, 5, 1)',
          'rgba(234, 67, 53, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: { display: true, text: 'Répartition zone euro (H1 2025)' },
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true, max: 70, title: { display: true, text: '%' } }
      }
    }
  });
}

export function cleanup() {
  if (dependanceChart) {
    dependanceChart.destroy();
    dependanceChart = null;
  }
}
