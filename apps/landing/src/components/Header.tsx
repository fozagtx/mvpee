export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-white">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Whop</span> Templates
          </a>
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          <a href="#features" className="text-gray-300 transition-colors hover:text-white">Features</a>
          <a href="#templates" className="text-gray-300 transition-colors hover:text-white">Templates</a>
          <a href="#pricing" className="text-gray-300 transition-colors hover:text-white">Pricing</a>
          <a href="#" className="text-gray-300 transition-colors hover:text-white">Support</a>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#pricing"
            className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
