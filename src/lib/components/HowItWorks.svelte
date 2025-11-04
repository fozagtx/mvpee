<script lang="ts">
	const steps = [
		{
			number: "1",
			title: "Sign Up",
			description: "Enter your email to get instant access to all our free resources."
		},
		{
			number: "2",
			title: "Choose Your Path",
			description: "Select resources based on where you are in your SaaS journey."
		},
		{
			number: "3",
			title: "Learn & Implement",
			description: "Follow our guides and templates to build your successful SaaS business."
		},
		{
			number: "4",
			title: "Grow & Scale",
			description: "Use our advanced resources to optimize and scale your operations."
		}
	];
</script>

<section id="how-it-works" class="py-20 sm:py-32 bg-gray-900/30">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-base font-semibold text-purple-400">How It Works</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
				Get started in 4 simple steps
			</p>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
				It takes less than 2 minutes to access all our resources.
			</p>
		</div>

		<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as step}
				<div class="relative">
					<div class="flex flex-col items-center text-center">
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-2xl font-bold text-white">
							{step.number}
						</div>
						<h3 class="mt-6 text-xl font-semibold text-white">{step.title}</h3>
						<p class="mt-2 text-gray-400">{step.description}</p>
					</div>
					{#if step.number !== "4"}
						<div class="absolute left-1/2 top-8 hidden h-1 w-full -translate-x-1/2 bg-gradient-to-r from-purple-500/50 to-blue-500/50 lg:block" style="width: calc(100% + 2rem); left: calc(50% + 2rem);"></div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
