import { buildWorkflow } from '../workflowHelper.js';

export const html = `
  <span class="speaker-badge">Charbel SONON</span>
  <h2>Chaîne Visa — Autorisation</h2>
  <div id="visaAuthWorkflow" class="visa-workflow-wrap"></div>
  <aside class="notes">
    Étapes 1 à 5 : swipe → acquéreur → réseau → émetteur → gel des fonds → réponse au TPE.
    Utiliser les boutons ou les pastilles de progression pendant la présentation.
  </aside>
`;

let workflow = null;

const authConfig = {
  theme: 'auth',
  phaseLabel: '⚡ Phase 1 · Temps réel · moins de 3 s',
  nodes: [
    { icon: '💳', label: 'Porteur / TPE', sublabel: 'Carte', color: '#7c3aed', x: 11, y: 40 },
    { icon: '🏦', label: 'Acquéreur', sublabel: 'Banque commerçant', color: '#0891b2', x: 37, y: 40 },
    { icon: '🌐', label: 'Visa / MC', sublabel: 'Réseau', color: '#1a56db', x: 63, y: 40 },
    { icon: '🏛️', label: 'Émetteur', sublabel: 'Banque client', color: '#4338ca', x: 89, y: 40 }
  ],
  connections: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 }
  ],
  steps: [
    {
      title: 'Présentation',
      activeNodes: [0],
      doneNodes: [],
      connections: [],
      desc: 'Le porteur présente sa carte au terminal (sans contact, puce ou en ligne).'
    },
    {
      title: 'Transmission',
      activeNodes: [1],
      doneNodes: [0],
      connections: [0],
      desc: 'Le TPE transmet la demande d\'autorisation à la banque acquéreuse du commerçant.'
    },
    {
      title: 'Routage',
      activeNodes: [2],
      doneNodes: [0, 1],
      connections: [0, 1],
      desc: 'L\'acquéreur envoie la transaction au réseau Visa ou Mastercard, routeur central mondial.'
    },
    {
      title: 'Décision',
      activeNodes: [3],
      doneNodes: [0, 1, 2],
      connections: [0, 1, 2],
      desc: 'Le réseau transmet à l\'émetteur : solde, plafonds, fraude — autorisation ou refus.'
    },
    {
      title: 'Réponse',
      activeNodes: [0],
      doneNodes: [1, 2, 3],
      connections: [0, 1, 2],
      desc: 'Si approuvé : gel des fonds côté émetteur. La réponse remonte réseau → acquéreur → TPE. Paiement accepté.'
    }
  ]
};

export function initialize() {
  workflow = buildWorkflow('visaAuthWorkflow', authConfig);
}

export function cleanup() {
  if (workflow) { workflow.destroy(); workflow = null; }
}
