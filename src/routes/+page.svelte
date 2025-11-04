<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Benefits from '$lib/components/Benefits.svelte';
	import LeadForm from '$lib/components/LeadForm.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Get Free SaaS Info - Essential Resources for Your Business</title>
	<meta name="description" content="Get free essential information, guides, and resources to help launch and grow your SaaS business successfully." />
</svelte:head>

<Header />
<main class="pt-16">
	<Hero />
	<Features />
	<HowItWorks />
	<Benefits />
	<LeadForm />
	<Testimonials />
	<CTA />
</main>
<Footer />
