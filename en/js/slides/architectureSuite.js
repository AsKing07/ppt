export const html = `  <span class="speaker-badge">Charbel SONON</span>
  <h2>Architecture — Middleware & Standards</h2>
  <ul style="font-size: 0.52em;">
    <li class="fragment"><strong>Payment Switch</strong> — Receives, validates and routes ISO 8583 messages</li>
    <li class="fragment"><strong>Payment Hub</strong> — Pools cards, SEPA, instant payments, transfers</li>
    <li class="fragment"><strong>ISO 8583</strong> — Card authorization (legacy) · <strong>ISO 20022</strong> — SEPA & instant</li>
    <li class="fragment"><strong>PCI-DSS</strong> — Network segmentation, encryption, logging</li>
  </ul>
  <aside class="notes">
    Describe coexistence of ISO 8583 and ISO 20022 in hub architectures.
    Switch communicates with POS, ATMs, processors and international networks.
    PFMI (CPSS-IOSCO): geographic redundancy, DR, critical vendor management.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
