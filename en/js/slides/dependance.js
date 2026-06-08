export const html = `
  <span class="speaker-badge">Ivan BESEVIC</span>
  <h2>Dependence of European Banks</h2>
  <div style="display: flex; gap: 12px; align-items: flex-start; justify-content: center;">
    <ul style="flex: 1; max-width: 45%; font-size: 0.46em;">
      <li class="fragment"><strong>57%</strong> of non-cash payments by card (euro area, H1 2025)</li>
      <li class="fragment"><strong>61%+</strong> of transactions captured by international schemes</li>
      <li class="fragment"><strong>13 countries</strong> with no national scheme — 100% Visa/MC</li>
      <li class="fragment">ISO 8583 lock-in + proprietary certifications (Kernel L2)</li>
    </ul>
    <div class="chart-container" style="flex: 1; max-width: 50%; height: 220px;">
      <canvas id="dependanceChart"></canvas>
    </div>
  </div>
  <aside class="notes">
    ECB figures H1 2024/2025: 77.7 billion non-cash payments, 879M cards in circulation.
    Even in France (CB) or Germany (Girocard), erosion in favor of global networks via e-commerce and Apple/Google Pay.
    TCO of legacy ISO 8583 infrastructure is underestimated by 70-80%.
  </aside>
`;

let dependanceChart = null;

export function initialize() {
  const ctx = document.getElementById('dependanceChart').getContext('2d');
  dependanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Cards', 'Transfers', 'Direct debits', 'Other'],
      datasets: [{
        label: 'Share of non-cash payments (%)',
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
        title: { display: true, text: 'Euro area breakdown (H1 2025)' },
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
