<script lang="ts">
	const features = [
		{
			icon: "📚",
			title: "Comprehensive Guides",
			description: "Step-by-step guides covering everything from idea validation to scaling your SaaS business."
		},
		{
			icon: "🎯",
			title: "Market Research Tools",
			description: "Free templates and frameworks to help you understand your target market and competition."
		},
		{
			icon: "💡",
			title: "Startup Templates",
			description: "Ready-to-use templates for business plans, pitch decks, and financial projections."
		},
		{
			icon: "🔧",
			title: "Tech Stack Recommendations",
			description: "Expert recommendations on the best tools and technologies for your SaaS."
		},
		{
			icon: "📊",
			title: "Growth Strategies",
			description: "Proven strategies and tactics to acquire customers and grow your revenue."
		},
		{
			icon: "🤝",
			title: "Community Access",
			description: "Join thousands of SaaS founders sharing insights and supporting each other."
		}
	];
</script>

<section id="features" class="py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-base font-semibold text-purple-400">What You'll Get</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
				Everything you need to succeed
			</p>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
				Access a complete library of resources designed to help you at every stage of your SaaS journey.
			</p>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<div class="group relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-purple-500/50 hover:bg-gray-900">
					<div class="mb-4 text-4xl">{feature.icon}</div>
					<h3 class="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
					<p class="text-gray-400">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
