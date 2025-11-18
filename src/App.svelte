<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import Features from './components/Features.svelte';
  import CTA from './components/CTA.svelte';
  import Footer from './components/Footer.svelte';
</script>

<main>
  <Header />
  <Hero />
  <Features />
  <CTA />
  <Footer />
</main>

<style>
  main {
    min-height: 100vh;
  }
</style>
