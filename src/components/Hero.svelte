<script>
    const stats = [
        { value: "2+", label: "Sites Built" },
        { value: "2-4", label: "Day Delivery" },
        { value: "$150", label: "Starting Price" }
    ];
</script>

<section class="hero">
    <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="grid-overlay"></div>
    </div>

    <div class="container">
        <div class="hero-content">
            <div class="badge">
                <span class="badge-dot"></span>
                <span>MVP-Ready Web Design</span>
            </div>

            <h1>
                Get Your Business Online in <span class="gradient-text">2-4 Days</span>—Without the $10K Agency Price Tag
            </h1>

            <p class="subtitle">
                Professional, MVP-ready websites for established businesses. One-page sites from $150. Full-stack solutions from $500. Fast delivery guaranteed.
            </p>

            <div class="hero-cta">
                <a href="#contact" class="btn-primary-large">
                    <span>Get Your Website Built</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="#pricing" class="btn-secondary">
                    See Pricing
                </a>
            </div>

            <div class="trust-text">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Trusted by businesses in Switzerland, Ghana, and beyond</span>
            </div>

            <div class="stats">
                {#each stats as stat}
                    <div class="stat-item">
                        <span class="stat-value">{stat.value}</span>
                        <span class="stat-label">{stat.label}</span>
                    </div>
                {/each}
            </div>
        </div>

        <div class="hero-visual">
            <div class="website-mockup">
                <div class="mockup-browser">
                    <div class="browser-header">
                        <div class="browser-dots">
                            <span class="dot red"></span>
                            <span class="dot yellow"></span>
                            <span class="dot green"></span>
                        </div>
                        <div class="browser-url">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                                <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>yourbusiness.com</span>
                        </div>
                    </div>
                    <div class="browser-content">
                        <div class="mock-nav"></div>
                        <div class="mock-hero">
                            <div class="mock-headline"></div>
                            <div class="mock-subheadline"></div>
                            <div class="mock-cta"></div>
                        </div>
                        <div class="mock-features">
                            <div class="mock-feature"></div>
                            <div class="mock-feature"></div>
                            <div class="mock-feature"></div>
                        </div>
                    </div>
                </div>
                <div class="floating-card card-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Fast Delivery</span>
                </div>
                <div class="floating-card card-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>100% Responsive</span>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        position: relative;
        min-height: auto;
        padding: 140px 0 100px;
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    .hero-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
    }

    .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        opacity: 0.4;
    }

    .orb-1 {
        width: 600px;
        height: 600px;
        background: linear-gradient(135deg, #14b8a6, #3b82f6);
        top: -200px;
        right: -100px;
    }

    .orb-2 {
        width: 400px;
        height: 400px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        bottom: -100px;
        left: -100px;
    }

    .grid-overlay {
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 60px 60px;
    }

    .container {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
    }

    .hero-content {
        animation: fadeInUp 0.8s ease-out;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: rgba(20, 184, 166, 0.1);
        border: 1px solid rgba(20, 184, 166, 0.2);
        border-radius: 24px;
        font-size: 14px;
        color: var(--accent-primary);
        margin-bottom: 24px;
    }

    .badge-dot {
        width: 8px;
        height: 8px;
        background: var(--accent-green);
        border-radius: 50%;
        animation: pulse 2s infinite;
    }

    h1 {
        font-size: 52px;
        font-weight: 700;
        line-height: 1.15;
        margin-bottom: 24px;
        letter-spacing: -0.02em;
    }

    .gradient-text {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .subtitle {
        font-size: 18px;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 32px;
        max-width: 540px;
    }

    .hero-cta {
        display: flex;
        gap: 16px;
        margin-bottom: 24px;
    }

    .btn-primary-large {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 16px 32px;
        background: var(--accent-gradient);
        color: white;
        border-radius: 12px;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.2s ease;
    }

    .btn-primary-large:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(20, 184, 166, 0.4);
    }

    .btn-secondary {
        display: inline-flex;
        align-items: center;
        padding: 16px 32px;
        background: transparent;
        color: var(--text-primary);
        border: 1px solid var(--border-color-light);
        border-radius: 12px;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.2s ease;
    }

    .btn-secondary:hover {
        background: var(--bg-card);
        border-color: var(--text-secondary);
    }

    .trust-text {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: var(--text-muted);
        margin-bottom: 32px;
    }

    .trust-text svg {
        color: var(--accent-green);
    }

    .stats {
        display: flex;
        gap: 48px;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .stat-value {
        font-size: 32px;
        font-weight: 700;
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .stat-label {
        font-size: 14px;
        color: var(--text-muted);
    }

    .hero-visual {
        animation: fadeInUp 0.8s ease-out 0.2s both;
        position: relative;
    }

    .website-mockup {
        position: relative;
    }

    .mockup-browser {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: var(--shadow-lg), var(--shadow-glow);
    }

    .browser-header {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border-color);
    }

    .browser-dots {
        display: flex;
        gap: 8px;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .dot.red { background: #ff5f56; }
    .dot.yellow { background: #ffbd2e; }
    .dot.green { background: #27c93f; }

    .browser-url {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        padding: 8px 16px;
        background: var(--bg-card);
        border-radius: 8px;
        font-size: 13px;
        color: var(--text-muted);
    }

    .browser-url svg {
        color: var(--accent-green);
    }

    .browser-content {
        padding: 24px;
        min-height: 280px;
    }

    .mock-nav {
        height: 12px;
        width: 60%;
        background: var(--bg-secondary);
        border-radius: 6px;
        margin-bottom: 32px;
    }

    .mock-hero {
        margin-bottom: 32px;
    }

    .mock-headline {
        height: 24px;
        width: 80%;
        background: linear-gradient(90deg, var(--border-color-light), var(--border-color));
        border-radius: 8px;
        margin-bottom: 12px;
    }

    .mock-subheadline {
        height: 12px;
        width: 60%;
        background: var(--border-color);
        border-radius: 6px;
        margin-bottom: 20px;
    }

    .mock-cta {
        height: 36px;
        width: 120px;
        background: var(--accent-gradient);
        border-radius: 8px;
    }

    .mock-features {
        display: flex;
        gap: 16px;
    }

    .mock-feature {
        flex: 1;
        height: 80px;
        background: var(--bg-secondary);
        border-radius: 12px;
        border: 1px solid var(--border-color);
    }

    .floating-card {
        position: absolute;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 16px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        font-size: 13px;
        font-weight: 500;
        color: var(--text-primary);
        box-shadow: var(--shadow-lg);
        animation: float 4s ease-in-out infinite;
    }

    .floating-card svg {
        color: var(--accent-primary);
    }

    .card-1 {
        top: 20px;
        right: -20px;
        animation-delay: 0s;
    }

    .card-2 {
        bottom: 40px;
        left: -20px;
        animation-delay: 2s;
    }

    @media (max-width: 1024px) {
        .container {
            grid-template-columns: 1fr;
            text-align: center;
        }

        h1 {
            font-size: 42px;
        }

        .subtitle {
            margin: 0 auto 32px;
        }

        .hero-cta {
            justify-content: center;
        }

        .trust-text {
            justify-content: center;
        }

        .stats {
            justify-content: center;
        }

        .hero-visual {
            max-width: 600px;
            margin: 0 auto;
        }

        .floating-card {
            display: none;
        }
    }

    @media (max-width: 640px) {
        .hero {
            padding: 120px 0 60px;
        }

        h1 {
            font-size: 32px;
        }

        .subtitle {
            font-size: 16px;
        }

        .hero-cta {
            flex-direction: column;
        }

        .stats {
            gap: 24px;
        }

        .stat-value {
            font-size: 24px;
        }
    }
</style>
