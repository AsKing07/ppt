import { buildWorkflow } from '../workflowHelper.js';

export const html = `
  <span class="speaker-badge">Charbel SONON</span>
  <h2>Visa Chain — Settlement</h2>
  <div id="visaSettleWorkflow" class="visa-workflow-wrap"></div>
  <aside class="notes">
  1. Merchant batch capture → acquirer.
  2. File presentment → network.
  3. Clearing: net positions, issuer notification.
  4. Settlement: issuer debits cardholders, funds flow via network to acquirer.
  5. Final credit to merchant bank account.
  </aside>
`;

let workflow = null;

const settleConfig = {
  theme: 'settle',
  tall: true,
  phaseLabel: '📦 Phase 2 · End of day · Fund movement',
  prevLabel: '◀ Previous',
  nextLabel: 'Next ▶',
  stepPrefix: 'Step',
  doneLabel: 'Done ✓',
  nodes: [
    { icon: '🏪', label: 'Merchant', sublabel: 'Capture', color: '#ea580c', x: 10, y: 28 },
    { icon: '🏦', label: 'Acquirer', sublabel: 'Presentment', color: '#0891b2', x: 38, y: 28 },
    { icon: '🌐', label: 'Network', sublabel: 'Clearing', color: '#1a56db', x: 65, y: 28 },
    { icon: '🏛️', label: 'Issuer', sublabel: 'Cardholder debit', color: '#4338ca', x: 90, y: 28 },
    { icon: '💰', label: 'Merchant acct', sublabel: 'Final credit', color: '#16a34a', x: 10, y: 90 }
  ],
  connections: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 2, curved: true, bulge: 34, funds: true },
    { from: 2, to: 1, curved: true, bulge: 52, funds: true },
    { from: 1, to: 4, drop: true, funds: true }
  ],
  steps: [
    {
      title: 'Capture',
      activeNodes: [0],
      doneNodes: [],
      connections: [],
      desc: 'At end of day, the merchant captures already-authorized transactions and sends them in a batch to the acquirer.'
    },
    {
      title: 'Presentment',
      activeNodes: [1],
      doneNodes: [0],
      connections: [0],
      desc: 'The acquirer formats the presentment file and transmits it to the Visa or Mastercard network.'
    },
    {
      title: 'Clearing',
      activeNodes: [2],
      doneNodes: [0, 1],
      connections: [0, 1, 2],
      desc: 'The network calculates net positions (clearing) and notifies each issuer of the amount to settle.'
    },
    {
      title: 'Settlement',
      activeNodes: [3, 2, 1],
      doneNodes: [0],
      connections: [0, 1, 2, 3, 4],
      desc: 'The issuer debits cardholders and pays the network, which transfers funds to the acquirer — money actually moves.'
    },
    {
      title: 'Credit',
      activeNodes: [4],
      doneNodes: [0, 1, 2, 3],
      connections: [0, 1, 2, 3, 4, 5],
      desc: 'The acquirer credits the merchant\'s bank account, net of interchange fees. Settlement complete.'
    }
  ]
};

export function initialize() {
  workflow = buildWorkflow('visaSettleWorkflow', settleConfig);
}

export function cleanup() {
  if (workflow) { workflow.destroy(); workflow = null; }
}
