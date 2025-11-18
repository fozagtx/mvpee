<script>
  import Hero from './components/Hero.svelte';
  import Testimonial from './components/Testimonial.svelte';
</script>

<main>
  <Hero />
  <Testimonial />
</main>

<style>
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
