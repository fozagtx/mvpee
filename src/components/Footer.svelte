<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="4" fill="#3B82F6"/>
            <path d="M8 12H16M12 8V16" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="logo-text">SupaDB</span>
        </div>
        <p>Free resources for SaaS founders</p>
      </div>
      
      <div class="footer-links">
        <div class="link-group">
          <h4>Resources</h4>
          <a href="#features">Browse All</a>
          <a href="#features">Categories</a>
        </div>
        
        <div class="link-group">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2024 SupaDB. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 60px 0 30px;
    background: var(--bg);
    border-top: 1px solid var(--border);
  }

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    margin-bottom: 40px;
  }

  .footer-brand {
    max-width: 400px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--text);
  }

  .logo svg {
    width: 24px;
    height: 24px;
  }

  .footer-brand p {
    color: var(--text-light);
    font-size: 14px;
    line-height: 1.6;
  }

  .footer-links {
    display: flex;
    gap: 60px;
  }

  .link-group h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--text);
  }

  .link-group a {
    display: block;
    color: var(--text-light);
    font-size: 14px;
    margin-bottom: 10px;
    transition: color 0.2s;
  }

  .link-group a:hover {
    color: var(--text);
  }

  .footer-bottom {
    padding-top: 24px;
    border-top: 1px solid var(--border);
    text-align: center;
    color: var(--text-light);
    font-size: 13px;
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .footer-links {
      gap: 40px;
    }
  }
</style>
