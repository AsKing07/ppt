export const html = `
  <span class="speaker-badge">Ivan BESEVIC</span>
  <h2>Resilience and DORA</h2>
  <p style="font-size: 0.46em;">Digital Operational Resilience Act — applicable since January 2025</p>
  <table class="compact-table" style="margin: 10px auto; border-collapse: collapse; width: 92%;">
    <thead>
      <tr style="background: #4285f4; color: white;">
        <th style="padding: 8px; border: 1px solid #ddd;">DORA Pillar</th>
        <th style="padding: 8px; border: 1px solid #ddd;">Key Requirement</th>
      </tr>
    </thead>
    <tbody>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">ICT risk management</td><td style="padding: 6px; border: 1px solid #ddd;">Mapping of digital dependencies</td></tr>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">Incident reporting</td><td style="padding: 6px; border: 1px solid #ddd;">Near real-time notification</td></tr>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">Resilience testing</td><td style="padding: 6px; border: 1px solid #ddd;">TLPT every 3 years (critical systems)</td></tr>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">Third-party risk (TPRM)</td><td style="padding: 6px; border: 1px solid #ddd;">Monitoring of card networks</td></tr>
      <tr class="fragment"><td style="padding: 6px; border: 1px solid #ddd;">Information sharing</td><td style="padding: 6px; border: 1px solid #ddd;">Cyber threat intelligence exchange</td></tr>
    </tbody>
  </table>
  <aside class="notes">
    DORA transforms resilience from a periodic compliance exercise into a continuous, auditable business imperative.
    Banks must identify critical dependencies including Visa and Mastercard.
    A major outage on these infrastructures is a threat to financial stability.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
