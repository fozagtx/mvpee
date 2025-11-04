<script lang="ts">
	const testimonials = [
		{
			name: "Sarah Chen",
			role: "Founder @ DataFlow",
			image: "👩‍💼",
			content: "These resources helped me validate my SaaS idea and launch in just 3 months. The templates alone saved me weeks of work!",
			company: "$50K MRR"
		},
		{
			name: "Michael Rodriguez",
			role: "CEO @ CloudSync",
			image: "👨‍💼",
			content: "I wish I had found this when I started. The growth strategies section is pure gold. Highly recommend to any SaaS founder.",
			company: "$200K MRR"
		},
		{
			name: "Emily Watson",
			role: "Co-founder @ TeamHub",
			image: "👩‍💻",
			content: "The community alone is worth it. Being able to connect with other founders and learn from their experiences is invaluable.",
			company: "$100K MRR"
		},
		{
			name: "David Kim",
			role: "Founder @ AnalyticsPro",
			image: "👨‍💻",
			content: "From idea to first paying customer in 60 days. These guides gave me the confidence and roadmap I needed to execute.",
			company: "$75K MRR"
		},
		{
			name: "Lisa Thompson",
			role: "CEO @ MarketMind",
			image: "👩‍🚀",
			content: "The tech stack recommendations saved me from making expensive mistakes. Built my MVP with the right tools from day one.",
			company: "$150K MRR"
		},
		{
			name: "James Park",
			role: "Founder @ AutomateX",
			image: "👨‍🔬",
			content: "Best free resource for SaaS founders, period. The business templates and financial models are professional-grade.",
			company: "$300K MRR"
		}
	];
</script>

<section id="testimonials" class="py-20 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-base font-semibold text-purple-400">Testimonials</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
				Trusted by thousands of founders
			</p>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
				Join successful SaaS founders who used our resources to build their businesses.
			</p>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<div class="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
					<div class="flex items-start space-x-4">
						<div class="text-4xl">{testimonial.image}</div>
						<div class="flex-1">
							<h4 class="font-semibold text-white">{testimonial.name}</h4>
							<p class="text-sm text-gray-400">{testimonial.role}</p>
							<div class="mt-1 inline-flex items-center rounded-full bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-400">
								{testimonial.company}
							</div>
						</div>
					</div>
					<p class="mt-4 text-gray-300">"{testimonial.content}"</p>
					<div class="mt-4 flex text-yellow-400">
						{#each Array(5) as _}
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
