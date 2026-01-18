<section class="urgency">
    <div class="container">
        <div class="urgency-content">
            <div class="urgency-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
            </div>

            <div class="urgency-inner">
                <span class="urgency-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Limited Time Offer
                </span>

                <h2>Every Day Without a Website <span class="gradient-text">Costs You Customers</span></h2>

                <p class="urgency-subtitle">
                    While you're thinking about it, your competitors are getting found on Google. Customers are choosing businesses with professional websites. Don't let another week go by leaving money on the table.
                </p>

                <div class="offer-card">
                    <div class="offer-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12V22H4V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 7H2V12H22V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 22V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="offer-content">
                        <span class="offer-label">Book this week and get:</span>
                        <span class="offer-value">Free business email setup ($49 value)</span>
                    </div>
                </div>

                <a href="#contact" class="btn-primary-large">
                    <span>Get My Website Built Now</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .urgency {
        padding: 120px 0;
        background: var(--bg-secondary);
    }

    .urgency-content {
        position: relative;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 24px;
        overflow: hidden;
    }

    .urgency-bg {
        position: absolute;
        inset: 0;
        overflow: hidden;
    }

    .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.3;
    }

    .orb-1 {
        width: 400px;
        height: 400px;
        background: linear-gradient(135deg, #14b8a6, #3b82f6);
        top: -200px;
        right: -100px;
    }

    .orb-2 {
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        bottom: -150px;
        left: -100px;
    }

    .urgency-inner {
        position: relative;
        z-index: 1;
        padding: 80px 60px;
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
    }

    .urgency-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: rgba(234, 179, 8, 0.1);
        border: 1px solid rgba(234, 179, 8, 0.2);
        border-radius: 24px;
        font-size: 14px;
        font-weight: 500;
        color: var(--accent-yellow);
        margin-bottom: 24px;
    }

    h2 {
        font-size: 42px;
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

    .urgency-subtitle {
        font-size: 18px;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 32px;
    }

    .offer-card {
        display: inline-flex;
        align-items: center;
        gap: 16px;
        padding: 16px 24px;
        background: linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(234, 179, 8, 0.05));
        border: 1px solid rgba(234, 179, 8, 0.2);
        border-radius: 16px;
        margin-bottom: 32px;
    }

    .offer-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(234, 179, 8, 0.2);
        border-radius: 12px;
        color: var(--accent-yellow);
    }

    .offer-content {
        text-align: left;
    }

    .offer-label {
        display: block;
        font-size: 13px;
        color: var(--text-muted);
        margin-bottom: 2px;
    }

    .offer-value {
        display: block;
        font-size: 16px;
        font-weight: 600;
        color: var(--accent-yellow);
    }

    .btn-primary-large {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 18px 36px;
        background: var(--accent-gradient);
        color: white;
        border-radius: 12px;
        font-weight: 600;
        font-size: 17px;
        transition: all 0.2s ease;
    }

    .btn-primary-large:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(20, 184, 166, 0.4);
    }

    @media (max-width: 768px) {
        .urgency {
            padding: 80px 0;
        }

        .urgency-inner {
            padding: 48px 24px;
        }

        h2 {
            font-size: 32px;
        }

        .offer-card {
            flex-direction: column;
            text-align: center;
        }

        .offer-content {
            text-align: center;
        }
    }
</style>
