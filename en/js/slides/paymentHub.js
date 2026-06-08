export const html = `
  <div class="image-slide slide-compact">
    <span class="speaker-badge">Ivan BESEVIC</span>
    <h2>Payment Hub Architecture</h2>
    <img class="slide-image slide-image-medium" src="images/payment-hub-architecture.jpg" alt="Payment System architecture">
    <p class="slide-caption">Payment Service, Executor, Ledger, Wallet — Source: ByteByteGo</p>
  </div>
  <aside class="notes">
    Internal components: Payment Service, Executor, Ledger, Wallet, Reconciliation.
    External: PSPs (Stripe, Adyen) and card schemes (Visa, Mastercard).
    Next slide: silos vs multi-rail hub comparison.
  </aside>
`;

export function initialize() {}

export function cleanup() {}
