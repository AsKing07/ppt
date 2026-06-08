export const html = `
  <span class="speaker-badge">Loïc Vanel MABOMESI</span>
  <h2>Risks and Strategic Issues</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; max-width: 90%; margin: 0 auto;">
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="color: #ea4335; margin: 0 0 5px 0;">Risks</h4>
      <ul style="font-size: 0.48em; margin: 0;">
        <li>Financial sovereignty (2/3 of flows are non-European)</li>
        <li>Geopolitical (Russia sanctions 2022)</li>
        <li>Sensitive data exported outside the EU</li>
        <li>Unregulated scheme fees (~€1.5B/year)</li>
      </ul>
    </div>
    <div class="card fragment" style="padding: 10px; margin: 0;">
      <h4 style="color: #34a853; margin: 0 0 5px 0;">European priorities</h4>
      <ul style="font-size: 0.48em; margin: 0;">
        <li>Economic and financial security</li>
        <li>Data protection (GDPR vs US Cloud Act)</li>
        <li>Innovation and technological autonomy</li>
        <li>Building a pan-European alternative</li>
      </ul>
    </div>
  </div>
  <p class="fragment" style="font-size: 0.48em; margin-top: 15px;">
    Example: Visa Europe outage 2018 — millions of transactions blocked for several hours.
  </p>
  <aside class="notes">
    The Russia 2022 example shows networks can become geopolitical pressure tools.
    Visa and Mastercard are subject to US law.
    Payment data (who, what, where, when) has strategic economic value.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
