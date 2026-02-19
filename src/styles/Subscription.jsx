import './subscription.css'

export default function Subscription({ lang, onSubscribe }) {
  const isBG = lang === 'bg'

  const plans = [
    {
      id: 'basic',
      title: isBG ? 'Basic план' : 'Basic Plan',
      daily: {
        quarterly: '€0.16/day',
        yearly: '€0.13/day'
      },
      prices: {
        monthly: 5.90,
        quarterly: 14.90,
        yearly: 49
      },
      features: isBG
        ? [
            'Дневни менюта',
            'Рецепти',
            'Списък за пазаруване',
            'Насоки',
            'PDF (неперсонализиран)'
          ]
        : [
            'Daily menus',
            'Recipes',
            'Shopping list',
            'Guidance',
            'PDF (non‑personalized)'
          ]
    },
    {
      id: 'premium',
      title: isBG ? 'Premium план' : 'Premium Plan',
      daily: {
        quarterly: '€0.27/day',
        yearly: '€0.21/day'
      },
      prices: {
        monthly: 9.90,
        quarterly: 24.90,
        yearly: 79
      },
      features: isBG
        ? [
            'Всичко от Basic',
            'Персонален 7‑дневен план',
            'Персонализиран PDF',
            'Персонални корекции',
            'Приоритетна поддръжка'
          ]
        : [
            'Everything in Basic',
            'Personal 7‑day plan',
            'Personalized PDF',
            'Personal adjustments',
            'Priority support'
          ]
    }
  ]

  return (
    <div className="subscription-section">
      <h2 className="subscription-title">
        {isBG ? 'Абонаментни планове' : 'Subscription Plans'}
      </h2>

      <div className="plans-grid">
        {plans.map(plan => (
          <div key={plan.id} className="plan-card">
            <h3 className="plan-title">{plan.title}</h3>

            <div className="plan-daily">
              <span>{plan.daily.quarterly}</span>
              <span>{plan.daily.yearly}</span>
            </div>

            <ul className="plan-features">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="billing-options">
              <button
                className="billing-btn"
                onClick={() => onSubscribe('paypal', plan.id, 'monthly')}
              >
                PayPal — €{plan.prices.monthly}/mo
              </button>

              <button
                className="billing-btn"
                onClick={() => onSubscribe('paypal', plan.id, 'quarterly')}
              >
                PayPal — €{plan.prices.quarterly}/3mo
              </button>

              <button
                className="billing-btn"
                onClick={() => onSubscribe('paypal', plan.id, 'yearly')}
              >
                PayPal — €{plan.prices.yearly}/yr
              </button>

              <button
                className="billing-btn mypos"
                onClick={() => onSubscribe('mypos', plan.id, 'monthly')}
              >
                myPOS — €{plan.prices.monthly}
              </button>

              <button
                className="billing-btn mypos"
                onClick={() => onSubscribe('mypos', plan.id, 'quarterly')}
              >
                myPOS — €{plan.prices.quarterly}
              </button>

              <button
                className="billing-btn mypos"
                onClick={() => onSubscribe('mypos', plan.id, 'yearly')}
              >
                myPOS — €{plan.prices.yearly}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
