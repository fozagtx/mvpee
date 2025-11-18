<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="badge">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2L10 6L14 7L11 10L11.5 14L8 12L4.5 14L5 10L2 7L6 6L8 2Z" fill="currentColor"/>
        </svg>
        <span>AI-Powered Innovation</span>
      </div>
      <h1>Transform Your Business with AI-Powered Software</h1>
      <p class="subtitle">
        We build custom AI solutions that automate workflows, enhance decision-making, and drive measurable growth for modern companies
      </p>
      <div class="hero-actions">
        <button class="btn-hero-primary">Schedule Consultation</button>
        <button class="btn-hero-secondary">View Our Work</button>
      </div>
      <div class="stats">
        <div class="stat">
          <div class="stat-number">50+</div>
          <div class="stat-label">Projects Delivered</div>
        </div>
        <div class="stat">
          <div class="stat-number">95%</div>
          <div class="stat-label">Client Satisfaction</div>
        </div>
        <div class="stat">
          <div class="stat-number">3x</div>
          <div class="stat-label">Avg. Efficiency Gain</div>
        </div>
      </div>
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
    font-size: 20px;
    color: var(--text-light);
    margin-bottom: 40px;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 60px;
  }

  .btn-hero-primary {
    padding: 14px 32px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.2s;
  }

  .btn-hero-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
  }

  .btn-hero-secondary {
    padding: 14px 32px;
    background: white;
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.2s;
  }

  .btn-hero-secondary:hover {
    background: var(--bg-alt);
    border-color: var(--text-light);
    transform: translateY(-2px);
  }

  .stats {
    display: flex;
    gap: 48px;
    justify-content: center;
    padding-top: 40px;
    border-top: 1px solid var(--border);
  }

  .stat {
    text-align: center;
  }

  .stat-number {
    font-size: 36px;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 14px;
    color: var(--text-light);
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

    .hero-actions {
      flex-direction: column;
      align-items: center;
    }

    .btn-hero-primary,
    .btn-hero-secondary {
      width: 100%;
      max-width: 280px;
    }

    .stats {
      gap: 24px;
      flex-wrap: wrap;
    }

    .stat-number {
      font-size: 28px;
    }
  }
</style>
