export const html = `
  <div class="image-slide slide-compact">
    <span class="speaker-badge">Ivan BESEVIC</span>
    <h2>Architecture Payment Hub</h2>
    <img class="slide-image slide-image-medium" src="images/payment-hub-architecture.jpg" alt="Architecture Payment System">
    <p class="slide-caption">Payment Service, Executor, Ledger, Wallet — Source : ByteByteGo</p>
  </div>
  <aside class="notes">
    Composants internes : Payment Service, Executor, Ledger, Wallet, Réconciliation.
    Externe : PSP (Stripe, Adyen) et schémas cartes (Visa, Mastercard).
    Slide suivante : comparaison silos vs hub multi-rail.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
