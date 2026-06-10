import { buildWorkflow } from '../workflowHelper.js';

export const html = `
  <span class="speaker-badge">Charbel SONON</span>
  <h2>Chaîne Visa — Règlement</h2>
  <div id="visaSettleWorkflow" class="visa-workflow-wrap"></div>
  <aside class="notes">
  1. Capture batch commerçant → acquéreur.
  2. Présentation fichier → réseau.
  3. Clearing : calcul des positions nettes, notification émetteurs.
  4. Settlement : émetteur débite porteurs, fonds transitent via le réseau vers l'acquéreur.
  5. Crédit final sur le compte bancaire du commerçant.
  </aside>
`;

let workflow = null;

const settleConfig = {
  theme: 'settle',
  tall: true,
  phaseLabel: '📦 Phase 2 · Fin de journée · Mouvement des fonds',
  nodes: [
    { icon: '🏪', label: 'Commerçant', sublabel: 'Capture', color: '#ea580c', x: 10, y: 28 },
    { icon: '🏦', label: 'Acquéreur', sublabel: 'Présentation', color: '#0891b2', x: 38, y: 28 },
    { icon: '🌐', label: 'Réseau', sublabel: 'Clearing', color: '#1a56db', x: 65, y: 28 },
    { icon: '🏛️', label: 'Émetteur', sublabel: 'Débit porteur', color: '#4338ca', x: 90, y: 28 },
    { icon: '💰', label: 'Cpte commerçant', sublabel: 'Crédit final', color: '#16a34a', x: 10, y: 90 }
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
      desc: 'En fin de journée, le commerçant capture les transactions déjà autorisées et les envoie en lot (batch) à son acquéreur.'
    },
    {
      title: 'Présentation',
      activeNodes: [1],
      doneNodes: [0],
      connections: [0],
      desc: 'L\'acquéreur formate le fichier de présentation et le transmet au réseau Visa ou Mastercard.'
    },
    {
      title: 'Clearing',
      activeNodes: [2],
      doneNodes: [0, 1],
      connections: [0, 1, 2],
      desc: 'Le réseau calcule les positions nettes (clearing) et notifie chaque émetteur du montant à régler.'
    },
    {
      title: 'Settlement',
      activeNodes: [3, 2, 1],
      doneNodes: [0],
      connections: [0, 1, 2, 3, 4],
      desc: 'L\'émetteur débite les porteurs et verse les fonds au réseau, qui les transfère à l\'acquéreur — l\'argent bouge réellement.'
    },
    {
      title: 'Crédit',
      activeNodes: [4],
      doneNodes: [0, 1, 2, 3],
      connections: [0, 1, 2, 3, 4, 5],
      desc: 'L\'acquéreur crédite le compte bancaire du commerçant, net des commissions d\'interchange. Règlement terminé.'
    }
  ]
};

export function initialize() {
  workflow = buildWorkflow('visaSettleWorkflow', settleConfig);
}

export function cleanup() {
  if (workflow) { workflow.destroy(); workflow = null; }
}
