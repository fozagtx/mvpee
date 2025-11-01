const plans = [
  {
    name: "Starter",
    price: "$4.99",
    description: "Perfect for getting started",
    features: [
      "1 Premium Template",
      "Basic Customization",
      "Mobile Responsive",
      "Email Support",
      "Lifetime Updates",
      "Documentation Access"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For serious entrepreneurs",
    features: [
      "5 Premium Templates",
      "Advanced Customization",
      "Mobile Responsive",
      "Priority Support",
      "Lifetime Updates",
      "Source Code Included",
      "Commercial License",
      "Custom Branding"
    ],
    popular: true,
    cta: "Start Pro"
  },
  {
    name: "Ultimate",
    price: "$19.99",
    description: "Everything you need to dominate",
    features: [
      "All Premium Templates",
      "Full Customization",
      "Mobile Responsive",
      "24/7 VIP Support",
      "Lifetime Updates",
      "Source Code Included",
      "Extended License",
      "Custom Development",
      "Priority Updates",
      "Private Discord Access"
    ],
    popular: false,
    cta: "Go Ultimate"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-purple-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Choose your perfect plan
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            One-time payment. Lifetime access. No subscriptions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl border p-8 ${
              plan.popular
                ? 'border-purple-500 bg-gradient-to-b from-purple-900/20 to-gray-900/50 shadow-xl shadow-purple-500/20'
                : 'border-gray-800 bg-gray-900/50'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400"> /one-time</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <svg className="mr-3 h-5 w-5 flex-shrink-0 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#"
                  className={`block w-full rounded-lg py-3 text-center font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:scale-105 hover:shadow-purple-500/50'
                      : 'border border-gray-700 bg-gray-800 text-white hover:border-gray-600 hover:bg-gray-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All plans include a 30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
