export const html = `  <span class="speaker-badge">Ivan BESEVIC</span>
  <h2>Payment Hub — Silos vs Multi-Rail</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width: 92%; margin: 0 auto;">
    <div class="card fragment" style="padding: 8px; margin: 0;">
      <h4 style="color: #ea4335; margin: 0 0 5px 0; font-size: 0.7em;">Traditional silos</h4>
      <ul style="font-size: 0.42em; margin: 0;">
        <li>Point-to-point connectivity</li>
        <li>Hard-coded business logic</li>
        <li>Scattered data</li>
      </ul>
    </div>
    <div class="card fragment" style="padding: 8px; margin: 0; border: 2px solid #34a853;">
      <h4 style="color: #34a853; margin: 0 0 5px 0; font-size: 0.7em;">Payment Hub</h4>
      <ul style="font-size: 0.42em; margin: 0;">
        <li>Unified multi-rail API</li>
        <li>Intelligent orchestration</li>
        <li>Canonical model ISO 8583 ↔ 20022</li>
      </ul>
    </div>
  </div>
  <p class="fragment" style="font-size: 0.42em; margin-top: 10px;">
    DIH + orchestration engine: Wero (P2P), card (international), SEPA Inst (domestic)
  </p>
  <aside class="notes">
    End of the card silo era. Hub selects optimal rail based on cost, speed and risk.
    Example: P2P → Wero, otherwise fallback to card if beneficiary not enrolled in EPI.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
