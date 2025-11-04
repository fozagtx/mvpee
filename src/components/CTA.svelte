<section class="cta">
  <div class="container">
    <div class="cta-content">
      <h2>Start Building Your SaaS Today</h2>
      <p>Join thousands of founders who have downloaded our free resources</p>
      <button class="btn-cta">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2V12M10 12L6 8M10 12L14 8M2 15V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Download All Resources
      </button>
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
    font-size: 18px;
    margin-bottom: 32px;
    color: var(--text-light);
  }

  .btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s;
  }

  .btn-cta:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
  }

  .btn-cta svg {
    width: 20px;
    height: 20px;
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
  }
</style>
