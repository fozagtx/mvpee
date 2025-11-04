<script lang="ts">
	const benefits = [
		{
			title: "Save Time & Money",
			description: "Avoid costly mistakes with our proven templates and frameworks. Get what took us years to learn, instantly.",
			stats: "Save $10K+"
		},
		{
			title: "Validated Strategies",
			description: "Learn from successful SaaS founders who've built and scaled million-dollar businesses.",
			stats: "100+ Case Studies"
		},
		{
			title: "Stay Updated",
			description: "Get the latest insights, trends, and best practices delivered to your inbox regularly.",
			stats: "Weekly Updates"
		}
	];
</script>

<section id="benefits" class="py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-base font-semibold text-purple-400">Why Choose Us</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
				Built by founders, for founders
			</p>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
				We've been where you are. Let us help you skip the hard lessons.
			</p>
		</div>

		<div class="mt-16 grid gap-8 lg:grid-cols-3">
			{#each benefits as benefit}
				<div class="relative rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-900/10 to-gray-900/50 p-8">
					<div class="mb-4 inline-flex rounded-lg bg-purple-500/10 px-3 py-1 text-sm font-semibold text-purple-400">
						{benefit.stats}
					</div>
					<h3 class="mb-3 text-2xl font-bold text-white">{benefit.title}</h3>
					<p class="text-gray-400">{benefit.description}</p>
				</div>
			{/each}
		</div>

		<div class="mt-16 rounded-2xl border border-gray-800 bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 sm:p-12">
			<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
				<div>
					<h3 class="text-3xl font-bold text-white">Not sure if this is for you?</h3>
					<p class="mt-4 text-lg text-gray-400">
						Our resources are perfect whether you're just getting started or looking to scale to 7 figures.
						Join thousands of SaaS founders who are already using our content to grow their businesses.
					</p>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="rounded-lg bg-gray-900/50 p-4 text-center">
						<div class="text-2xl font-bold text-white">$0</div>
						<div class="mt-1 text-sm text-gray-400">Cost to you</div>
					</div>
					<div class="rounded-lg bg-gray-900/50 p-4 text-center">
						<div class="text-2xl font-bold text-white">Forever</div>
						<div class="mt-1 text-sm text-gray-400">Access period</div>
					</div>
					<div class="rounded-lg bg-gray-900/50 p-4 text-center">
						<div class="text-2xl font-bold text-white">All</div>
						<div class="mt-1 text-sm text-gray-400">Resources included</div>
					</div>
					<div class="rounded-lg bg-gray-900/50 p-4 text-center">
						<div class="text-2xl font-bold text-white">Instant</div>
						<div class="mt-1 text-sm text-gray-400">Delivery</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
