<script lang="ts">
	let mobileMenuOpen = $state(false);
</script>

<header class="fixed top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm">
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
		<div class="flex items-center">
			<a href="/" class="text-xl font-bold text-white">
				<span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">SaaS</span> Info Hub
			</a>
		</div>

		<div class="hidden items-center space-x-8 md:flex">
			<a href="#features" class="text-gray-300 transition-colors hover:text-white">Features</a>
			<a href="#how-it-works" class="text-gray-300 transition-colors hover:text-white">How It Works</a>
			<a href="#benefits" class="text-gray-300 transition-colors hover:text-white">Benefits</a>
			<a href="#testimonials" class="text-gray-300 transition-colors hover:text-white">Testimonials</a>
		</div>

		<div class="flex items-center space-x-4">
			<a
				href="#get-started"
				class="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
			>
				Get Free Info
			</a>
		</div>
	</nav>
</header>
