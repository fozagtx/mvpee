<script>
    const packages = [
        {
            name: "One-Page Site",
            price: "$150",
            delivery: "2-Day Delivery",
            description: "Perfect for service businesses, consultants, local shops",
            features: [
                "Professional design",
                "Mobile responsive",
                "Contact form integration",
                "Basic SEO setup",
                "Fast loading speed"
            ],
            popular: false
        },
        {
            name: "Full-Stack Site",
            price: "$500",
            delivery: "4-Day Delivery",
            description: "Perfect for growing businesses, e-commerce, content-heavy sites",
            features: [
                "Multi-page design",
                "Advanced features & CMS",
                "Mobile responsive",
                "Contact form integration",
                "Analytics integration",
                "Performance optimized"
            ],
            popular: true
        },
        {
            name: "SEO Add-On",
            price: "+$79",
            delivery: "Get Found on Google",
            description: "Perfect for any business that wants organic traffic",
            features: [
                "Search engine optimization",
                "Google indexing setup",
                "Local SEO configuration",
                "Meta tags optimization",
                "Site speed optimization"
            ],
            popular: false,
            addon: true
        }
    ];
</script>

<section class="pricing" id="pricing">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Pricing</span>
            <h2>Simple Pricing. <span class="gradient-text">No Hidden Fees.</span></h2>
            <p class="section-subtitle">
                Transparent pricing for professional websites. Choose what works for your business.
            </p>
        </div>

        <div class="pricing-grid">
            {#each packages as pkg}
                <div class="pricing-card" class:popular={pkg.popular} class:addon={pkg.addon}>
                    {#if pkg.popular}
                        <div class="popular-badge">Most Popular</div>
                    {/if}
                    {#if pkg.addon}
                        <div class="addon-badge">Add-On</div>
                    {/if}
                    <div class="pricing-header">
                        <h3>{pkg.name}</h3>
                        <div class="price-row">
                            <span class="price">{pkg.price}</span>
                        </div>
                        <span class="delivery">{pkg.delivery}</span>
                        <p class="pricing-description">{pkg.description}</p>
                    </div>
                    <ul class="features-list">
                        {#each pkg.features as feature}
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {feature}
                            </li>
                        {/each}
                    </ul>
                    <a href="#contact" class="pricing-cta" class:primary={pkg.popular}>
                        {pkg.addon ? 'Add to Package' : 'Get Started'}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            {/each}
        </div>

        <div class="pricing-note">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p>All packages include minor revisions. Major updates can be discussed as additional work.</p>
        </div>
    </div>
</section>

<style>
    .pricing {
        padding: 120px 0;
        background: var(--bg-primary);
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

    .pricing-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-bottom: 40px;
    }

    .pricing-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: all 0.3s ease;
    }

    .pricing-card:hover {
        border-color: var(--border-color-light);
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .pricing-card.popular {
        border-color: var(--accent-primary);
        background: linear-gradient(180deg, rgba(20, 184, 166, 0.05) 0%, var(--bg-card) 100%);
    }

    .pricing-card.addon {
        border-style: dashed;
    }

    .popular-badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px 16px;
        background: var(--accent-gradient);
        color: white;
        font-size: 12px;
        font-weight: 600;
        border-radius: 20px;
        white-space: nowrap;
    }

    .addon-badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px 16px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        color: var(--text-secondary);
        font-size: 12px;
        font-weight: 600;
        border-radius: 20px;
        white-space: nowrap;
    }

    .pricing-header {
        text-align: center;
        margin-bottom: 24px;
        padding-bottom: 24px;
        border-bottom: 1px solid var(--border-color);
    }

    h3 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 16px;
        color: var(--text-primary);
    }

    .price-row {
        margin-bottom: 8px;
    }

    .price {
        font-size: 48px;
        font-weight: 700;
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .delivery {
        display: inline-block;
        padding: 4px 12px;
        background: rgba(20, 184, 166, 0.1);
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        color: var(--accent-primary);
        margin-bottom: 12px;
    }

    .pricing-description {
        font-size: 14px;
        color: var(--text-muted);
        line-height: 1.5;
    }

    .features-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 14px;
        flex-grow: 1;
        margin-bottom: 28px;
    }

    .features-list li {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        color: var(--text-secondary);
    }

    .features-list svg {
        color: var(--accent-green);
        flex-shrink: 0;
    }

    .pricing-cta {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 14px 24px;
        background: transparent;
        border: 1px solid var(--border-color-light);
        color: var(--text-primary);
        border-radius: 12px;
        font-weight: 600;
        font-size: 15px;
        transition: all 0.2s ease;
    }

    .pricing-cta:hover {
        background: var(--bg-secondary);
        border-color: var(--text-secondary);
    }

    .pricing-cta.primary {
        background: var(--accent-gradient);
        border: none;
        color: white;
    }

    .pricing-cta.primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(20, 184, 166, 0.4);
    }

    .pricing-note {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 16px 24px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        max-width: 600px;
        margin: 0 auto;
    }

    .pricing-note svg {
        color: var(--text-muted);
        flex-shrink: 0;
    }

    .pricing-note p {
        font-size: 14px;
        color: var(--text-muted);
        margin: 0;
    }

    @media (max-width: 1024px) {
        .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto 40px;
        }

        .pricing-card.popular {
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

        .price {
            font-size: 40px;
        }
    }
</style>
