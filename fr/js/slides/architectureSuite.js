export const html = `  <span class="speaker-badge">Charbel SONON</span>
  <h2>Architecture — Middleware & normes</h2>
  <ul style="font-size: 0.52em;">
    <li class="fragment"><strong>Payment Switch</strong> — Réception, validation et routage des messages ISO 8583</li>
    <li class="fragment"><strong>Payment Hub</strong> — Mutualisation cartes, SEPA, instant payments, virements</li>
    <li class="fragment"><strong>ISO 8583</strong> — Autorisation cartes (legacy) · <strong>ISO 20022</strong> — SEPA & instant</li>
    <li class="fragment"><strong>PCI-DSS</strong> — Segmentation réseau, chiffrement, journalisation</li>
  </ul>
  <aside class="notes">
    Décrire la coexistence ISO 8583 et ISO 20022 dans les architectures hub.
    Le switch dialogue avec TPE, GAB, processeurs et réseaux internationaux.
    PFMI (CPSS-IOSCO) : redondance géographique, PCA, gestion des prestataires critiques.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
