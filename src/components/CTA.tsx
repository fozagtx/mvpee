export default function CTA() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 to-blue-900 px-8 py-16 shadow-2xl sm:px-16">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

          <div className="relative text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to launch your Whop store?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-200">
              Join hundreds of successful entrepreneurs who chose our templates to kickstart their business.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition-all hover:scale-105"
              >
                Get Started for $4.99
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-200">
              <div className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instant Access
              </div>
              <div className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Subscription
              </div>
              <div className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Lifetime Updates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
