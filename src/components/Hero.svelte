<script>
  import { onMount } from 'svelte';

  let emailValue = '';

  function handleSubscribe(e) {
    e.preventDefault();
    if (emailValue) {
      alert('Thank you for subscribing!');
      emailValue = '';
    }
  }

  // Generate random stars
  let stars = [];
  onMount(() => {
    // Create 100 random star particles
    for (let i = 0; i < 100; i++) {
      stars.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3
      });
    }
    stars = stars; // Trigger reactivity
  });
</script>

<section class="hero">
  <!-- Star particles background -->
  <div class="stars">
    {#each stars as star}
      <div
        class="star"
        style="left: {star.left}%; top: {star.top}%; width: {star.size}px; height: {star.size}px; opacity: {star.opacity};"
      ></div>
    {/each}
  </div>

  <!-- Red gradient glow -->
  <div class="gradient-glow"></div>

  <div class="container">
    <div class="hero-content">
      <!-- Badge -->
      <div class="badge">
        <span>A Newsletter by Machina</span>
      </div>

      <!-- Headline -->
      <h1>
        Building Your<br />
        <span class="italic-serif">AI-First Brain.</span>
      </h1>

      <!-- Description -->
      <p class="description">
        Join <strong>4,500+ readers</strong> exploring how to think, create,<br />
        and build with artificial intelligence.
      </p>

      <!-- Subscription Form -->
      <form class="subscription-form" on:submit={handleSubscribe}>
        <input
          type="email"
          placeholder="Your Best Email Address"
          bind:value={emailValue}
          required
        />
        <button type="submit">Subscribe</button>
      </form>

      <!-- Reassurance Text -->
      <p class="reassurance">No ads, no spam – Pure value.</p>

      <!-- Testimonial Section -->
      <div class="testimonial">
        <div class="testimonial-name">Sarah Chen</div>
        <div class="stars-rating">
          {#each Array(5) as _, i}
            <span class="star-icon">★</span>
          {/each}
        </div>
        <p class="testimonial-text">
          "Every issue feels like a masterclass in AI.<br />
          I look forward to it every week."
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 20px;
    background: var(--bg-black);
    overflow: hidden;
  }

  /* Star particles */
  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .star {
    position: absolute;
    background: white;
    border-radius: 50%;
  }

  /* Red gradient glow from bottom */
  .gradient-glow {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 70%;
    background: radial-gradient(circle at bottom center, var(--gradient-red) 0%, transparent 70%);
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 820px;
    margin: 0 auto;
  }

  .hero-content {
    text-align: center;
  }

  /* Badge */
  .badge {
    display: inline-block;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    font-size: 13px;
    color: var(--text-white);
    margin-bottom: 40px;
    backdrop-filter: blur(10px);
  }

  /* Headline */
  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    color: var(--text-white);
    margin-bottom: 24px;
    letter-spacing: -0.02em;
  }

  .italic-serif {
    font-family: Georgia, 'Times New Roman', serif;
    font-style: italic;
    font-weight: 400;
  }

  /* Description */
  .description {
    font-size: 18px;
    color: var(--text-gray);
    margin-bottom: 40px;
    line-height: 1.7;
  }

  .description strong {
    color: var(--text-white);
    font-weight: 600;
  }

  /* Subscription Form */
  .subscription-form {
    display: flex;
    gap: 12px;
    max-width: 520px;
    margin: 0 auto 16px;
    align-items: center;
  }

  .subscription-form input {
    flex: 1;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: var(--text-white);
    font-size: 15px;
    outline: none;
    transition: all 0.3s ease;
  }

  .subscription-form input::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  .subscription-form input:focus {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }

  .subscription-form button {
    padding: 16px 32px;
    background: var(--text-white);
    color: var(--bg-black);
    font-size: 15px;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
  }

  .subscription-form button:hover {
    background: #f0f0f0;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(255, 255, 255, 0.2);
  }

  /* Reassurance Text */
  .reassurance {
    font-size: 13px;
    color: var(--text-gray);
    margin-bottom: 80px;
  }

  /* Testimonial Section */
  .testimonial {
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .testimonial-name {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-white);
    margin-bottom: 8px;
  }

  .stars-rating {
    margin-bottom: 12px;
  }

  .star-icon {
    color: var(--star-yellow);
    font-size: 18px;
    margin: 0 2px;
  }

  .testimonial-text {
    font-size: 15px;
    color: var(--text-gray);
    line-height: 1.6;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero {
      padding: 80px 20px;
    }

    h1 {
      font-size: 2.5rem;
    }

    .description {
      font-size: 16px;
    }

    .subscription-form {
      flex-direction: column;
      width: 100%;
    }

    .subscription-form input,
    .subscription-form button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    .badge {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
</style>
