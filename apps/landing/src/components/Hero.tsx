export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 ring-1 ring-purple-500/20">
            <span className="mr-2">🎉</span>
            Premium Templates Starting at $4.99
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Launch Your Whop Store
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> In Minutes</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
            Professional, conversion-optimized templates for your Whop business. No coding required. Start selling instantly with battle-tested designs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-purple-500/50"
            >
              Browse Templates
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-gray-600 hover:bg-gray-800"
            >
              See Features
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="mt-1 text-sm text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="mt-1 text-sm text-gray-400">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="mt-1 text-sm text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99%</div>
              <div className="mt-1 text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
