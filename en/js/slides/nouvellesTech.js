export const html = `
  <span class="speaker-badge">Charbel SONON</span>
  <h2>New Payment Technologies</h2>
  <ul>
    <li class="fragment"><strong>SEPA Instant Credit Transfer</strong> — Alternative rail to cards, TIPS settlement in central bank money</li>
    <li class="fragment"><strong>A2A payments</strong> — Account-to-account without card intermediary, lower cost</li>
    <li class="fragment"><strong>Open Banking (PSD2/PSD3)</strong> — PISP/AISP APIs, strong customer authentication (SCA)</li>
    <li class="fragment"><strong>Pay by Bank</strong> — Transfer initiation directly from the customer's account</li>
  </ul>
  <p class="fragment" style="font-size: 0.48em; margin-top: 12px;">
    IT impact: API management, payment hubs, real-time scoring, 24/7 monitoring
  </p>
  <aside class="notes">
    PSD2 requires banks to expose secure APIs for PISPs.
    Fintechs can offer A2A journeys in direct competition with cards.
    Visa and Mastercard responded with their own developer platforms (Visa Developer, Mastercard Developers).
    Key challenge: orchestrate cards + SEPA Inst + Open Banking within a single hub.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
