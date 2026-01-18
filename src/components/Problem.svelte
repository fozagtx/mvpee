<script>
    const painPoints = [
        {
            icon: "users",
            title: "Losing Customers to Competitors",
            description: "Businesses with professional websites are capturing your potential customers every day."
        },
        {
            icon: "search",
            title: "Invisible on Google",
            description: "Without a website, customers can't find you when they search for services you offer."
        },
        {
            icon: "dollar",
            title: "Agency Quotes are $10K+",
            description: "Traditional agencies charge enterprise prices and take months to deliver."
        },
        {
            icon: "clock",
            title: "DIY Wastes Your Time",
            description: "Website builders are confusing and pull you away from running your business."
        }
    ];
</script>

<section class="problem" id="problem">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">The Challenge</span>
            <h2>Your Business Deserves Better Than <span class="gradient-text">No Website</span></h2>
            <p class="section-subtitle">
                Every day without a website is money left on the table. Your competitors are getting found on Google. Customers are checking you out online before they buy. And right now, they're finding nothing.
            </p>
        </div>

        <div class="problem-content">
            <div class="problem-text">
                <p class="lead-text">
                    You know you need to get online, but the options seem impossible:
                </p>
                <ul class="problem-list">
                    <li>Agency quotes are $5K-$15K+ (way over budget)</li>
                    <li>DIY website builders are confusing and time-consuming</li>
                    <li>You need it done fast, not in 6 weeks</li>
                    <li>You're not sure if you need "just a page" or a full website</li>
                </ul>
            </div>

            <div class="pain-points-grid">
                {#each painPoints as point}
                    <div class="pain-point-card">
                        <div class="pain-icon">
                            {#if point.icon === 'users'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else if point.icon === 'search'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else if point.icon === 'dollar'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1V23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {/if}
                        </div>
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                    </div>
                {/each}
            </div>
        </div>

        <div class="cta-row">
            <a href="#contact" class="btn-primary">
                Get Your Website Built
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </div>
</section>

<style>
    .problem {
        padding: 120px 0;
        background: var(--bg-secondary);
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
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.2);
        border-radius: 24px;
        font-size: 14px;
        font-weight: 500;
        color: #ef4444;
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

    .problem-content {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 60px;
        align-items: start;
        margin-bottom: 48px;
    }

    .problem-text {
        position: sticky;
        top: 120px;
    }

    .lead-text {
        font-size: 20px;
        font-weight: 500;
        color: var(--text-primary);
        margin-bottom: 24px;
    }

    .problem-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .problem-list li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        font-size: 16px;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    .problem-list li::before {
        content: '';
        width: 8px;
        height: 8px;
        background: #ef4444;
        border-radius: 50%;
        margin-top: 8px;
        flex-shrink: 0;
    }

    .pain-points-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }

    .pain-point-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 28px;
        transition: all 0.3s ease;
    }

    .pain-point-card:hover {
        border-color: var(--border-color-light);
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .pain-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(239, 68, 68, 0.1);
        border-radius: 12px;
        color: #ef4444;
        margin-bottom: 16px;
    }

    h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
        color: var(--text-primary);
    }

    .pain-point-card p {
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.6;
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
        .problem-content {
            grid-template-columns: 1fr;
            gap: 48px;
        }

        .problem-text {
            position: static;
            text-align: center;
        }

        .problem-list {
            align-items: center;
        }
    }

    @media (max-width: 768px) {
        .problem {
            padding: 80px 0;
        }

        h2 {
            font-size: 36px;
        }

        .pain-points-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
