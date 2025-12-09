<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="badge">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2L10 6L14 7L11 10L11.5 14L8 12L4.5 14L5 10L2 7L6 6L8 2Z" fill="currentColor"/>
        </svg>
        <span>Learning Journey</span>
      </div>
      <h1>Mastering AI in Three Domains</h1>
      <p class="subtitle">
        Building expertise in AI coding, prompting, and brand building through hands-on learning
      </p>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 80px 0 40px;
    background: var(--bg);
    text-align: center;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--bg-alt);
    border: 1px solid var(--border);
    border-radius: 20px;
    font-size: 14px;
    color: var(--text-light);
    margin-bottom: 24px;
  }

  .badge svg {
    width: 16px;
    height: 16px;
    color: var(--primary);
  }

  h1 {
    font-size: 56px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.2;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .subtitle {
    font-size: 18px;
    color: var(--text-light);
    margin-bottom: 40px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 60px 0 30px;
    }

    h1 {
      font-size: 36px;
    }

    .subtitle {
      font-size: 16px;
    }
  }
</style>