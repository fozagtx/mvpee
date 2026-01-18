<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import Problem from './components/Problem.svelte';
  import Solution from './components/Solution.svelte';
  import HowItWorks from './components/HowItWorks.svelte';
  import Pricing from './components/Pricing.svelte';
  import Testimonials from './components/Testimonials.svelte';
  import FAQ from './components/FAQ.svelte';
  import Urgency from './components/Urgency.svelte';
  import CTA from './components/CTA.svelte';
  import Footer from './components/Footer.svelte';
</script>

<main>
  <Header />
  <Hero />
  <Problem />
  <Solution />
  <HowItWorks />
  <Pricing />
  <Testimonials />
  <FAQ />
  <Urgency />
  <CTA />
  <Footer />
</main>

<style>
  main {
    min-height: 100vh;
    background: var(--bg-primary);
  }
</style>
