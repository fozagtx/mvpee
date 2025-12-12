<script>
    const plans = [
        {
            name: "Starter",
            price: "Free",
            period: "",
            description: "Perfect for trying out AI-assisted development basics",
            features: [
                "Access to 3 introductory modules",
                "Community Discord access",
                "Basic prompt templates",
                "Weekly newsletter"
            ],
            cta: "Get Started",
            highlighted: false
        },
        {
            name: "Pro",
            price: "$97",
            period: "one-time",
            description: "Everything you need to master AI development",
            features: [
                "All 10+ course modules",
                "Lifetime access & updates",
                "Private Discord community",
                "Custom modes & rules library",
                "MCP integration templates",
                "Project source code",
                "Certificate of completion"
            ],
            cta: "Get Early Access",
            highlighted: true,
            badge: "Most Popular"
        },
        {
            name: "Team",
            price: "$297",
            period: "per seat",
            description: "For teams wanting to upskill together",
            features: [
                "Everything in Pro",
                "Team license (5 seats)",
                "Team analytics dashboard",
                "Priority support",
                "Custom onboarding call",
                "Invoice & receipts"
            ],
            cta: "Contact Us",
            highlighted: false
        }
    ];
</script>

<section class="pricing" id="pricing">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Pricing</span>
            <h2>Simple, <span class="gradient-text">Transparent</span> Pricing</h2>
            <p class="section-subtitle">
                One-time payment for lifetime access. No subscriptions, no hidden fees.
            </p>
        </div>

        <div class="pricing-grid">
            {#each plans as plan}
                <div class="pricing-card" class:highlighted={plan.highlighted}>
                    {#if plan.badge}
                        <div class="card-badge">{plan.badge}</div>
                    {/if}
                    <div class="plan-header">
                        <h3>{plan.name}</h3>
                        <div class="price-wrapper">
                            <span class="price">{plan.price}</span>
                            {#if plan.period}
                                <span class="period">{plan.period}</span>
                            {/if}
                        </div>
                        <p class="plan-description">{plan.description}</p>
                    </div>

                    <ul class="features-list">
                        {#each plan.features as feature}
                            <li>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="rgba(34, 197, 94, 0.1)"/>
                                    <path d="M14 7L8.5 12.5L6 10" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>{feature}</span>
                            </li>
                        {/each}
                    </ul>

                    <a href="#newsletter" class="plan-cta" class:primary={plan.highlighted}>
                        {plan.cta}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            {/each}
        </div>

        <div class="guarantee">
            <div class="guarantee-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="guarantee-content">
                <h4>30-Day Money-Back Guarantee</h4>
                <p>Not satisfied? Get a full refund within 30 days, no questions asked.</p>
            </div>
        </div>
    </div>
</section>

<style>
    .pricing {
        padding: 120px 0;
        background: var(--bg-secondary);
        position: relative;
    }

    .section-header {
        text-align: center;
        max-width: 600px;
        margin: 0 auto 64px;
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

    .pricing-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-bottom: 48px;
    }

    .pricing-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        padding: 40px 32px;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: all 0.3s ease;
    }

    .pricing-card:hover {
        border-color: var(--border-color-light);
        transform: translateY(-4px);
    }

    .pricing-card.highlighted {
        border-color: var(--accent-primary);
        background: linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, var(--bg-card) 100%);
        box-shadow: var(--shadow-glow);
    }

    .card-badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px 16px;
        background: var(--accent-gradient);
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        color: white;
        white-space: nowrap;
    }

    .plan-header {
        text-align: center;
        margin-bottom: 32px;
        padding-bottom: 32px;
        border-bottom: 1px solid var(--border-color);
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 16px;
    }

    .price-wrapper {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 8px;
        margin-bottom: 12px;
    }

    .price {
        font-size: 48px;
        font-weight: 700;
        color: var(--text-primary);
    }

    .period {
        font-size: 16px;
        color: var(--text-muted);
    }

    .plan-description {
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.5;
    }

    .features-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
        flex-grow: 1;
        margin-bottom: 32px;
    }

    .features-list li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        font-size: 15px;
        color: var(--text-secondary);
    }

    .features-list svg {
        flex-shrink: 0;
        margin-top: 2px;
    }

    .plan-cta {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 16px 24px;
        background: transparent;
        color: var(--text-primary);
        border: 1px solid var(--border-color-light);
        border-radius: 12px;
        font-weight: 600;
        font-size: 15px;
        transition: all 0.2s ease;
    }

    .plan-cta:hover {
        background: var(--bg-secondary);
        border-color: var(--text-secondary);
    }

    .plan-cta.primary {
        background: var(--accent-gradient);
        color: white;
        border: none;
    }

    .plan-cta.primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
    }

    .guarantee {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 32px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        max-width: 600px;
        margin: 0 auto;
    }

    .guarantee-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(34, 197, 94, 0.1);
        border-radius: 16px;
        color: var(--accent-green);
        flex-shrink: 0;
    }

    .guarantee-content h4 {
        font-size: 18px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 4px;
    }

    .guarantee-content p {
        font-size: 14px;
        color: var(--text-secondary);
    }

    @media (max-width: 1024px) {
        .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto 48px;
        }

        .pricing-card.highlighted {
            order: -1;
        }
    }

    @media (max-width: 768px) {
        .pricing {
            padding: 80px 0;
        }

        h2 {
            font-size: 36px;
        }

        .guarantee {
            flex-direction: column;
            text-align: center;
        }
    }
</style>
