<script>
  let email = '';

  function handleSubmit(e) {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    // You can add your subscription logic here
    alert(`Thank you for subscribing with ${email}!`);
    email = '';
  }
</script>

<section class="newsletter-hero">
  <div class="container">
    <div class="hero-content">
      <!-- Badge -->
      <div class="badge">
        A Newsletter by Machina
      </div>

      <!-- Headline -->
      <h1>
        Building Your<br>
        <em class="ai-emphasis">AI-First Brain.</em>
      </h1>

      <!-- Description -->
      <p class="description">
        Join <strong>4,500+ readers</strong> who get weekly insights on building with AI,<br>
        staying ahead of the curve, and thinking like a machine.
      </p>

      <!-- Subscription Form -->
      <form class="subscribe-form" on:submit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Best Email Address"
          bind:value={email}
          required
          class="email-input"
        />
        <button type="submit" class="subscribe-btn">
          Subscribe
        </button>
      </form>

      <!-- Reassurance Text -->
      <p class="reassurance">
        No ads, no spam – Pure value.
      </p>
    </div>
  </div>
</section>

<style>
  .newsletter-hero {
    padding: 120px 0 80px;
    text-align: center;
    position: relative;
  }

  .hero-content {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  /* Badge */
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 8px 20px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    font-size: 13px;
    color: var(--white);
    font-weight: 500;
    letter-spacing: 0.3px;
    backdrop-filter: blur(10px);
  }

  /* Headline */
  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    color: var(--white);
    letter-spacing: -0.03em;
    margin: 16px 0;
  }

  .ai-emphasis {
    font-style: italic;
    font-family: Georgia, 'Times New Roman', serif;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  /* Description */
  .description {
    font-size: 17px;
    color: var(--gray);
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .description strong {
    color: var(--white);
    font-weight: 600;
  }

  /* Subscribe Form */
  .subscribe-form {
    display: flex;
    gap: 12px;
    width: 100%;
    max-width: 540px;
    margin: 24px 0 12px;
  }

  .email-input {
    flex: 1;
    padding: 14px 20px;
    font-size: 15px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    color: var(--white);
    font-family: inherit;
    transition: all 0.2s ease;
  }

  .email-input::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  .email-input:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }

  .subscribe-btn {
    padding: 14px 32px;
    font-size: 15px;
    font-weight: 600;
    color: var(--deep-black);
    background: var(--white);
    border-radius: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .subscribe-btn:hover {
    background: rgba(255, 255, 255, 0.92);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .subscribe-btn:active {
    transform: translateY(0);
  }

  /* Reassurance Text */
  .reassurance {
    font-size: 13px;
    color: rgba(199, 199, 199, 0.7);
    margin-top: 4px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .newsletter-hero {
      padding: 80px 0 60px;
    }

    h1 {
      font-size: 2.75rem;
    }

    .description {
      font-size: 16px;
    }

    .description br {
      display: none;
    }

    .subscribe-form {
      flex-direction: column;
      gap: 12px;
    }

    .email-input,
    .subscribe-btn {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.25rem;
    }

    .badge {
      font-size: 12px;
      padding: 6px 16px;
    }
  }
</style>
