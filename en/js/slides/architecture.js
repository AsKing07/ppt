import { buildWorkflow } from '../workflowHelper.js';

export const html = `
  <span class="speaker-badge">Charbel SONON</span>
  <h2>Visa Chain — Authorization</h2>
  <div id="visaAuthWorkflow" class="visa-workflow-wrap"></div>
  <aside class="notes">
    Steps 1 to 5: swipe → acquirer → network → issuer → fund hold → POS response.
    Use buttons or progress dots during the presentation.
  </aside>
`;

let workflow = null;

const authConfig = {
  theme: 'auth',
  phaseLabel: '⚡ Phase 1 · Real-time · under 3 s',
  prevLabel: '◀ Previous',
  nextLabel: 'Next ▶',
  stepPrefix: 'Step',
  doneLabel: 'Done ✓',
  nodes: [
    { icon: '💳', label: 'Cardholder / POS', sublabel: 'Card', color: '#7c3aed', x: 11, y: 40 },
    { icon: '🏦', label: 'Acquirer', sublabel: 'Merchant bank', color: '#0891b2', x: 37, y: 40 },
    { icon: '🌐', label: 'Visa / MC', sublabel: 'Network', color: '#1a56db', x: 63, y: 40 },
    { icon: '🏛️', label: 'Issuer', sublabel: 'Customer bank', color: '#4338ca', x: 89, y: 40 }
  ],
  connections: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 }
  ],
  steps: [
    {
      title: 'Presentation',
      activeNodes: [0],
      doneNodes: [],
      connections: [],
      desc: 'The cardholder presents their card at the terminal (contactless, chip, or online).'
    },
    {
      title: 'Transmission',
      activeNodes: [1],
      doneNodes: [0],
      connections: [0],
      desc: 'The POS sends the authorization request to the merchant\'s acquiring bank.'
    },
    {
      title: 'Routing',
      activeNodes: [2],
      doneNodes: [0, 1],
      connections: [0, 1],
      desc: 'The acquirer forwards the transaction to the Visa or Mastercard global routing network.'
    },
    {
      title: 'Decision',
      activeNodes: [3],
      doneNodes: [0, 1, 2],
      connections: [0, 1, 2],
      desc: 'The network routes to the issuer: balance, limits, fraud — approve or decline.'
    },
    {
      title: 'Response',
      activeNodes: [0],
      doneNodes: [1, 2, 3],
      connections: [0, 1, 2],
      desc: 'If approved: funds held at issuer. Response flows back network → acquirer → POS. Payment accepted.'
    }
  ]
};

export function initialize() {
  workflow = buildWorkflow('visaAuthWorkflow', authConfig);
}

export function cleanup() {
  if (workflow) { workflow.destroy(); workflow = null; }
}
