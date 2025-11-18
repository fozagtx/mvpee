<section class="cta" id="contact">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to Transform Your Business with AI?</h2>
      <p>Let's discuss how our AI-powered solutions can solve your unique challenges and drive growth</p>
      <div class="cta-actions">
        <button class="btn-cta-primary">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L10 13L17 8M3 12L10 17L17 12M3 4L10 9L17 4L10 1L3 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Get Free Consultation
        </button>
        <button class="btn-cta-secondary">
          View Case Studies
        </button>
      </div>
      <div class="cta-features">
        <div class="cta-feature">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>No commitment required</span>
        </div>
        <div class="cta-feature">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Quick response time</span>
        </div>
        <div class="cta-feature">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Custom solutions</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .cta {
    padding: 80px 0;
    background: var(--bg-alt);
  }

  .cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  h2 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--text);
  }

  p {
    font-size: 20px;
    margin-bottom: 40px;
    color: var(--text-light);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 48px;
  }

  .btn-cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s;
  }

  .btn-cta-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
  }

  .btn-cta-primary svg {
    width: 20px;
    height: 20px;
  }

  .btn-cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    background: white;
    color: var(--text);
    border: 2px solid var(--border);
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s;
  }

  .btn-cta-secondary:hover {
    background: var(--bg);
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-2px);
  }

  .cta-features {
    display: flex;
    gap: 32px;
    justify-content: center;
    padding-top: 32px;
    border-top: 1px solid rgba(229, 231, 235, 0.5);
  }

  .cta-feature {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-light);
    font-size: 14px;
  }

  .cta-feature svg {
    width: 20px;
    height: 20px;
    color: #10b981;
  }

  @media (max-width: 768px) {
    .cta {
      padding: 60px 0;
    }

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }

    .cta-actions {
      flex-direction: column;
      align-items: center;
    }

    .btn-cta-primary,
    .btn-cta-secondary {
      width: 100%;
      max-width: 280px;
    }

    .cta-features {
      flex-direction: column;
      gap: 16px;
      align-items: center;
    }
  }
</style>
