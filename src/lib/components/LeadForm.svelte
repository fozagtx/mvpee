<script lang="ts">
	let email = $state('');
	let name = $state('');
	let loading = $state(false);
	let submitted = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;

		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1500));

		submitted = true;
		loading = false;
	}
</script>

<section id="get-started" class="py-20 sm:py-32 bg-gray-900/30">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-gray-900/50 to-blue-900/20 p-8 sm:p-12 shadow-2xl shadow-purple-500/10">
			{#if !submitted}
				<div class="text-center mb-8">
					<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
						Get Your Free SaaS Resources
					</h2>
					<p class="text-lg text-gray-400">
						Join 10,000+ founders who are building successful SaaS businesses with our help.
					</p>
				</div>

				<form onsubmit={handleSubmit} class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-300 mb-2">
							Your Name
						</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							placeholder="John Doe"
							class="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
						/>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-gray-300 mb-2">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							required
							placeholder="you@example.com"
							class="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						class="w-full rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-purple-500/50 disabled:opacity-50 disabled:hover:scale-100"
					>
						{#if loading}
							<span class="flex items-center justify-center">
								<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								Processing...
							</span>
						{:else}
							Get Instant Access →
						{/if}
					</button>

					<p class="text-center text-sm text-gray-500">
						No credit card required. Unsubscribe anytime.
					</p>
				</form>
			{:else}
				<div class="text-center py-8">
					<div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
						<svg class="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-white mb-2">
						Check Your Email!
					</h3>
					<p class="text-gray-400 max-w-md mx-auto">
						We've sent your free resources to <span class="text-white font-semibold">{email}</span>.
						Check your inbox (and spam folder) for instant access.
					</p>
				</div>
			{/if}
		</div>

		<div class="mt-8 grid grid-cols-3 gap-4 text-center">
			<div>
				<div class="text-sm text-gray-500">✓ No spam</div>
			</div>
			<div>
				<div class="text-sm text-gray-500">✓ Instant delivery</div>
			</div>
			<div>
				<div class="text-sm text-gray-500">✓ 100% free</div>
			</div>
		</div>
	</div>
</section>
