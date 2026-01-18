<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-brand">
                <a href="/" class="logo">
                    <div class="logo-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="8" fill="url(#footer-logo-gradient)"/>
                            <path d="M8 16L12 12V20L8 16Z" fill="white"/>
                            <path d="M14 10L18 16L14 22V10Z" fill="white" fill-opacity="0.8"/>
                            <path d="M20 12L24 16L20 20V12Z" fill="white" fill-opacity="0.6"/>
                            <defs>
                                <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#14b8a6"/>
                                    <stop offset="1" stop-color="#3b82f6"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span class="logo-text">MVPE</span>
                </a>
                <p class="brand-description">
                    MVP-Ready Websites for Established Businesses. Get your business online in 2-4 days without the $10K agency price tag.
                </p>
                <div class="social-links">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                        </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="footer-links">
                <div class="link-group">
                    <h4>Quick Links</h4>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#faq">FAQ</a>
                </div>

                <div class="link-group">
                    <h4>Services</h4>
                    <a href="#pricing">One-Page Sites</a>
                    <a href="#pricing">Full-Stack Sites</a>
                    <a href="#pricing">SEO Add-On</a>
                    <a href="#contact">Get Started</a>
                </div>

                <div class="link-group">
                    <h4>Legal</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; {new Date().getFullYear()} MVPE. All rights reserved.</p>
            <p class="built-with">MVP-Ready Websites for Established Businesses</p>
        </div>
    </div>
</footer>

<style>
    footer {
        padding: 80px 0 40px;
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-color);
    }

    .footer-content {
        display: grid;
        grid-template-columns: 1.5fr 2fr;
        gap: 80px;
        margin-bottom: 60px;
    }

    .footer-brand {
        max-width: 320px;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
    }

    .logo-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-text {
        font-size: 20px;
        font-weight: 700;
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: 0.05em;
    }

    .brand-description {
        font-size: 14px;
        color: var(--text-muted);
        line-height: 1.7;
        margin-bottom: 24px;
    }

    .social-links {
        display: flex;
        gap: 12px;
    }

    .social-links a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        color: var(--text-muted);
        transition: all 0.2s ease;
    }

    .social-links a:hover {
        color: var(--text-primary);
        border-color: var(--border-color-light);
        transform: translateY(-2px);
    }

    .footer-links {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }

    .link-group h4 {
        font-size: 14px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .link-group a {
        display: block;
        font-size: 14px;
        color: var(--text-muted);
        margin-bottom: 14px;
        transition: color 0.2s ease;
    }

    .link-group a:hover {
        color: var(--text-primary);
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 32px;
        border-top: 1px solid var(--border-color);
    }

    .footer-bottom p {
        font-size: 14px;
        color: var(--text-muted);
    }

    .built-with {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    @media (max-width: 1024px) {
        .footer-content {
            grid-template-columns: 1fr;
            gap: 48px;
        }

        .footer-brand {
            max-width: 100%;
        }
    }

    @media (max-width: 768px) {
        footer {
            padding: 60px 0 32px;
        }

        .footer-links {
            grid-template-columns: repeat(2, 1fr);
        }

        .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        .footer-links {
            grid-template-columns: 1fr;
        }
    }
</style>
