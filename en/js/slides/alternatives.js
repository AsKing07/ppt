export const html = `
  <span class="speaker-badge">Dandara Helen SOUZA GOMEZ</span>
  <h2>European Alternatives</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width: 92%; margin: 0 auto;">
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="margin: 0 0 5px 0;">EPI / Wero</h4>
      <p style="font-size: 0.45em; margin: 0;">Pan-European A2A payment — BNP Paribas, Deutsche Bank, Société Générale</p>
    </div>
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="margin: 0 0 5px 0;">SEPA Instant (TIPS)</h4>
      <p style="font-size: 0.45em; margin: 0;">Transfers in &lt; 10 seconds, 24/7, ISO 20022</p>
    </div>
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="margin: 0 0 5px 0;">Digital euro (ECB)</h4>
      <p style="font-size: 0.45em; margin: 0;">Complementary CBDC, monetary sovereignty</p>
    </div>
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="margin: 0 0 5px 0;">National schemes</h4>
      <p style="font-size: 0.45em; margin: 0;">CB (FR), Girocard (DE), Bancontact (BE), iDEAL (NL)</p>
    </div>
  </div>
  <p class="fragment" style="font-size: 0.45em; margin-top: 12px;">
    Main challenge: <strong>interoperability</strong> between fragmented national systems
  </p>
  <aside class="notes">
    Wero already deployed for P2P in Germany, France, Belgium. Ambition: in-store, online, mobile payments.
    SEPA Instant via TIPS (Eurosystem) — very low unit costs.
    National schemes are effective locally but not interoperable at EU scale.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
