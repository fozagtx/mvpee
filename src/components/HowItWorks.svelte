<script>
    const steps = [
        {
            number: "01",
            day: "Day 0",
            title: "Share Your Vision",
            description: "Fill out our quick form. Tell us about your business, what you need, and your goals. We'll confirm the timeline and get started immediately.",
            icon: "message"
        },
        {
            number: "02",
            day: "Days 1-4",
            title: "We Build Your Site",
            description: "Our team builds your professional, MVP-ready website. One-page sites in 2 days. Full-stack solutions in 4 days. You get updates along the way.",
            icon: "code"
        },
        {
            number: "03",
            day: "Day 5+",
            title: "Launch & Grow",
            description: "Your site goes live. Add our SEO package (+$79) to get discovered on Google and start attracting customers organically.",
            icon: "rocket"
        }
    ];
</script>

<section class="how-it-works" id="how-it-works">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">How It Works</span>
            <h2>Three Simple Steps to <span class="gradient-text">Your New Website</span></h2>
            <p class="section-subtitle">
                From idea to live website in days, not months. Here's how we make it happen.
            </p>
        </div>

        <div class="steps-container">
            <div class="steps-line"></div>
            {#each steps as step, index}
                <div class="step-card" style="--delay: {index * 0.1}s">
                    <div class="step-number-wrapper">
                        <span class="step-number">{step.number}</span>
                        <div class="step-dot"></div>
                    </div>
                    <div class="step-content">
                        <span class="step-day">{step.day}</span>
                        <div class="step-icon">
                            {#if step.icon === 'message'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 9H16M8 13H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            {:else if step.icon === 'code'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 16.5C3 18 3 21 3 21C3 21 6 21 7.5 19.5C8.32 18.68 8.32 17.32 7.5 16.5C6.68 15.68 5.32 15.68 4.5 16.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.5 3.5C14.5 3.5 20.5 6.5 20.5 12C20.5 14.5 18 18 14 18L6 10C6 6 9.5 3.5 12 3.5C12 3.5 14.5 3.5 14.5 3.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="15" cy="9" r="1" fill="currentColor"/>
                                </svg>
                            {/if}
                        </div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="cta-row">
            <a href="#contact" class="btn-primary">
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </div>
</section>

<style>
    .how-it-works {
        padding: 120px 0;
        background: var(--bg-secondary);
        position: relative;
    }

    .section-header {
        text-align: center;
        max-width: 600px;
        margin: 0 auto 80px;
    }

    .section-badge {
        display: inline-block;
        padding: 8px 16px;
        background: rgba(20, 184, 166, 0.1);
        border: 1px solid rgba(20, 184, 166, 0.2);
        border-radius: 24px;
        font-size: 14px;
        font-weight: 500;
        color: var(--accent-primary);
        margin-bottom: 20px;
    }

    h2 {
        font-size: 48px;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 20px;
        letter-spacing: -0.02em;
    }

    .gradient-text {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .section-subtitle {
        font-size: 18px;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    .steps-container {
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-bottom: 48px;
    }

    .steps-line {
        position: absolute;
        top: 40px;
        left: 16.66%;
        right: 16.66%;
        height: 2px;
        background: var(--border-color);
    }

    .steps-line::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 66%;
        height: 100%;
        background: var(--accent-gradient);
    }

    .step-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        animation: fadeInUp 0.6s ease-out var(--delay) both;
    }

    .step-number-wrapper {
        position: relative;
        margin-bottom: 32px;
    }

    .step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        background: var(--bg-card);
        border: 2px solid var(--border-color);
        border-radius: 50%;
        font-size: 24px;
        font-weight: 700;
        color: var(--accent-primary);
        position: relative;
        z-index: 1;
    }

    .step-dot {
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        background: var(--accent-gradient);
        border-radius: 50%;
        border: 3px solid var(--bg-secondary);
    }

    .step-content {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 32px 24px;
        width: 100%;
        transition: all 0.3s ease;
    }

    .step-content:hover {
        border-color: var(--border-color-light);
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .step-day {
        display: inline-block;
        padding: 4px 12px;
        background: rgba(20, 184, 166, 0.1);
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        color: var(--accent-primary);
        margin-bottom: 16px;
    }

    .step-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--accent-gradient);
        border-radius: 14px;
        color: white;
        margin: 0 auto 20px;
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--text-primary);
    }

    p {
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.7;
    }

    .cta-row {
        text-align: center;
    }

    .btn-primary {
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

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(20, 184, 166, 0.4);
    }

    @media (max-width: 1024px) {
        .steps-container {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto 48px;
        }

        .steps-line {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .how-it-works {
            padding: 80px 0;
        }

        h2 {
            font-size: 36px;
        }
    }
</style>
