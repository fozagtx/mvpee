const templates = [
  {
    name: "Discord Community",
    category: "Community",
    description: "Perfect for managing Discord communities with role management, gated content, and payment processing.",
    features: ["Member management", "Role automation", "Payment integration"],
    image: "🎮"
  },
  {
    name: "Course Platform",
    category: "Education",
    description: "Sell online courses with video hosting, progress tracking, and completion certificates.",
    features: ["Video player", "Progress tracking", "Certificates"],
    image: "📚"
  },
  {
    name: "Digital Downloads",
    category: "Products",
    description: "Sell digital products like ebooks, templates, and software with instant delivery.",
    features: ["File delivery", "License keys", "Updates system"],
    image: "💾"
  },
  {
    name: "Subscription Service",
    category: "Membership",
    description: "Recurring subscription platform with tier management and exclusive content access.",
    features: ["Tier management", "Auto-billing", "Member portal"],
    image: "💳"
  },
  {
    name: "Coaching Platform",
    category: "Services",
    description: "One-on-one coaching with booking system, session management, and client portal.",
    features: ["Booking system", "Video calls", "Client tracking"],
    image: "🎯"
  },
  {
    name: "SaaS Dashboard",
    category: "Software",
    description: "Complete SaaS template with user management, analytics, and billing integration.",
    features: ["User management", "Analytics", "API access"],
    image: "⚡"
  }
];

export default function Templates() {
  return (
    <section id="templates" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-purple-400">Templates</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Built for every use case
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Professional templates for every type of Whop business. Pick one and start selling in minutes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div key={template.name} className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 transition-all hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-5xl">{template.image}</div>
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                    {template.category}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  {template.name}
                </h3>

                <p className="mb-4 text-gray-400">
                  {template.description}
                </p>

                <ul className="space-y-2">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <svg className="mr-2 h-4 w-4 flex-shrink-0 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-800 bg-gray-900/80 p-4">
                <a
                  href="#pricing"
                  className="block w-full rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 py-2 text-center text-sm font-semibold text-purple-400 transition-all hover:from-purple-500/20 hover:to-blue-500/20"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            And many more templates available in our Pro and Ultimate plans
          </p>
        </div>
      </div>
    </section>
  );
}
