<script>
    const benefits = [
        {
            icon: "zap",
            title: "Lightning-Fast Delivery",
            description: "Your site goes live in 2-4 days, not weeks or months. We respect your time and urgency."
        },
        {
            icon: "dollar",
            title: "Transparent Pricing",
            description: "One-page sites from $150. Full-stack from $500. No hidden fees, no surprises."
        },
        {
            icon: "target",
            title: "MVP-Ready Design",
            description: "Professional, conversion-focused websites that actually work for your business."
        },
        {
            icon: "globe",
            title: "Global Experience",
            description: "Trusted by businesses from Switzerland to Ghana. We understand diverse markets."
        }
    ];
</script>

<section class="solution" id="solution">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">The Solution</span>
            <h2>Launch Your Professional Website in <span class="gradient-text">Days, Not Months</span></h2>
            <p class="section-subtitle">
                MVPE builds MVP-ready websites designed specifically for established businesses that need to get online fast—without the enterprise price tag.
            </p>
        </div>

        <div class="solution-content">
            <div class="solution-intro">
                <p>
                    Whether you need a sleek one-page site or a full-stack solution, we deliver professional results in 2-4 days.
                </p>
                <div class="promise-list">
                    <div class="promise-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>No confusing tech</span>
                    </div>
                    <div class="promise-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>No hidden costs</span>
                    </div>
                    <div class="promise-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>No 6-week timelines</span>
                    </div>
                </div>
            </div>

            <div class="benefits-grid">
                {#each benefits as benefit}
                    <div class="benefit-card">
                        <div class="benefit-icon">
                            {#if benefit.icon === 'zap'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else if benefit.icon === 'dollar'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1V23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else if benefit.icon === 'target'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {/if}
                        </div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .solution {
        padding: 120px 0;
        background: var(--bg-primary);
        position: relative;
    }

    .section-header {
        text-align: center;
        max-width: 700px;
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
        line-height: 1.7;
    }

    .solution-content {
        display: flex;
        flex-direction: column;
        gap: 48px;
    }

    .solution-intro {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .solution-intro p {
        font-size: 18px;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 24px;
    }

    .promise-list {
        display: flex;
        justify-content: center;
        gap: 32px;
        flex-wrap: wrap;
    }

    .promise-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 15px;
        font-weight: 500;
        color: var(--text-primary);
    }

    .promise-item svg {
        color: var(--accent-green);
    }

    .benefits-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
    }

    .benefit-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 32px 24px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .benefit-card:hover {
        border-color: var(--border-color-light);
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .benefit-icon {
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
        margin-bottom: 10px;
        color: var(--text-primary);
    }

    .benefit-card p {
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    @media (max-width: 1024px) {
        .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .solution {
            padding: 80px 0;
        }

        h2 {
            font-size: 36px;
        }

        .promise-list {
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }

        .benefits-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
