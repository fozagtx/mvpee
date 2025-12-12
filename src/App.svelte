<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import HowItWorks from './components/HowItWorks.svelte';
  import Features from './components/Features.svelte';
  import Instructor from './components/Instructor.svelte';
  import Testimonials from './components/Testimonials.svelte';
  import FAQ from './components/FAQ.svelte';
  import CTA from './components/CTA.svelte';
  import Footer from './components/Footer.svelte';
</script>

<main>
  <Header />
  <Hero />
  <HowItWorks />
  <Features />
  <Instructor />
  <Testimonials />
  <FAQ />
  <CTA />
  <Footer />
</main>

<style>
  main {
    min-height: 100vh;
    background: var(--bg-primary);
  }
</style>
