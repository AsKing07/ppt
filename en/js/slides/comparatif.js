export const html = `
  <span class="speaker-badge">Loïc Vanel MABOMESI</span>
  <h2>Comparative Analysis</h2>
  <div style="overflow-x: auto; max-width: 95%; margin: 0 auto;">
    <table class="compact-table" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background: #4285f4; color: white;">
          <th style="padding: 6px; border: 1px solid #ddd;">Solution</th>
          <th style="padding: 6px; border: 1px solid #ddd;">Advantages</th>
          <th style="padding: 6px; border: 1px solid #ddd;">Limitations</th>
        </tr>
      </thead>
      <tbody>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>Visa / MC</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">Global acceptance, ease of use</td>
          <td style="padding: 5px; border: 1px solid #ddd;">US dependence, high costs</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>Wero / EPI</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">Sovereignty, lower costs</td>
          <td style="padding: 5px; border: 1px solid #ddd;">Limited adoption, network effects</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>Digital euro</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">ECB control, security</td>
          <td style="padding: 5px; border: 1px solid #ddd;">Privacy, complexity</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>SEPA Instant</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">Speed, EU autonomy</td>
          <td style="padding: 5px; border: 1px solid #ddd;">Less universal than cards</td>
        </tr>
        <tr class="fragment">
          <td style="padding: 5px; border: 1px solid #ddd;"><strong>National schemes</strong></td>
          <td style="padding: 5px; border: 1px solid #ddd;">Strong local adoption</td>
          <td style="padding: 5px; border: 1px solid #ddd;">European fragmentation</td>
        </tr>
      </tbody>
    </table>
  </div>
  <aside class="notes">
    No abrupt replacement of Visa/MC — gradual diversification.
    Network effects: users adopt only if accepted everywhere, merchants vice versa.
    Competition from Big Tech (Apple Pay, Google Pay, PayPal) complicates the landscape.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
