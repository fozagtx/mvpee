<script>
    const steps = [
        {
            number: "01",
            title: "Sign Up & Get Access",
            description: "Join the waitlist and get early access to the platform. You'll receive login credentials and can start immediately.",
            icon: "user"
        },
        {
            number: "02",
            title: "Follow the Curriculum",
            description: "Work through structured modules at your own pace. Each lesson builds on the previous one for progressive learning.",
            icon: "book"
        },
        {
            number: "03",
            title: "Build Real Projects",
            description: "Apply your skills by building actual applications. Get hands-on experience with AI-assisted development.",
            icon: "code"
        },
        {
            number: "04",
            title: "Ship & Iterate",
            description: "Deploy your projects to production. Learn the full cycle from idea to shipped product using AI tools.",
            icon: "rocket"
        }
    ];
</script>

<section class="how-it-works" id="how-it-works">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">How It Works</span>
            <h2>Your Path to <span class="gradient-text">AI Mastery</span></h2>
            <p class="section-subtitle">
                A simple, structured approach to mastering AI-powered development in weeks, not months.
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
                        <div class="step-icon">
                            {#if step.icon === 'user'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else if step.icon === 'book'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.2);
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
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
    }

    .steps-line {
        position: absolute;
        top: 40px;
        left: 12.5%;
        right: 12.5%;
        height: 2px;
        background: var(--border-color);
    }

    .steps-line::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
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
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--text-primary);
    }

    p {
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    @media (max-width: 1024px) {
        .steps-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
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

        .steps-container {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
        }
    }
</style>
