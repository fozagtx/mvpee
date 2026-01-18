<script>
    const stats = [
        { value: "2+", label: "Professional Sites Delivered" },
        { value: "100%", label: "On-Time Delivery Rate" },
        { value: "Global", label: "International Client Base" },
        { value: "2-4", label: "Day Average Launch Time" }
    ];
</script>

<section class="testimonials" id="testimonials">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Social Proof</span>
            <h2>Trusted by Businesses <span class="gradient-text">Around the World</span></h2>
            <p class="section-subtitle">
                Working with businesses across continents—from Switzerland to Ghana—delivering professional websites that work.
            </p>
        </div>

        <div class="stats-grid">
            {#each stats as stat}
                <div class="stat-card">
                    <span class="stat-value">{stat.value}</span>
                    <span class="stat-label">{stat.label}</span>
                </div>
            {/each}
        </div>

        <div class="global-reach">
            <div class="global-card">
                <div class="global-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="global-content">
                    <h3>Serving Businesses Globally</h3>
                    <p>
                        From local service providers to international consultants, we've helped businesses across Switzerland, Ghana, and beyond establish their professional online presence. Our clients trust us because we deliver quality work on time, every time.
                    </p>
                    <div class="location-tags">
                        <span class="location-tag">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Switzerland
                        </span>
                        <span class="location-tag">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Ghana
                        </span>
                        <span class="location-tag">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            And Beyond
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="guarantee-section">
            <div class="guarantee-card">
                <div class="guarantee-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="guarantee-content">
                    <h4>100% Satisfaction Focus</h4>
                    <p>We don't stop until your site represents your business perfectly. Your success is our priority.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .testimonials {
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

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        margin-bottom: 48px;
    }

    .stat-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 32px 24px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .stat-card:hover {
        border-color: var(--border-color-light);
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .stat-value {
        display: block;
        font-size: 36px;
        font-weight: 700;
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 8px;
    }

    .stat-label {
        font-size: 14px;
        color: var(--text-muted);
    }

    .global-reach {
        margin-bottom: 48px;
    }

    .global-card {
        display: flex;
        gap: 32px;
        align-items: center;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        padding: 40px;
        transition: all 0.3s ease;
    }

    .global-card:hover {
        border-color: var(--border-color-light);
        box-shadow: var(--shadow-lg);
    }

    .global-icon {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--accent-gradient);
        border-radius: 20px;
        color: white;
        flex-shrink: 0;
    }

    .global-content h3 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--text-primary);
    }

    .global-content p {
        font-size: 16px;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 20px;
    }

    .location-tags {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }

    .location-tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        color: var(--text-secondary);
    }

    .location-tag svg {
        color: var(--accent-primary);
    }

    .guarantee-section {
        max-width: 600px;
        margin: 0 auto;
    }

    .guarantee-card {
        display: flex;
        gap: 20px;
        align-items: center;
        background: linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(59, 130, 246, 0.1));
        border: 1px solid rgba(20, 184, 166, 0.2);
        border-radius: 16px;
        padding: 24px 32px;
    }

    .guarantee-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--accent-gradient);
        border-radius: 14px;
        color: white;
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
        margin: 0;
    }

    @media (max-width: 1024px) {
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .global-card {
            flex-direction: column;
            text-align: center;
        }

        .location-tags {
            justify-content: center;
        }
    }

    @media (max-width: 768px) {
        .testimonials {
            padding: 80px 0;
        }

        h2 {
            font-size: 36px;
        }

        .stats-grid {
            grid-template-columns: 1fr 1fr;
        }

        .stat-value {
            font-size: 28px;
        }

        .global-card {
            padding: 24px;
        }

        .guarantee-card {
            flex-direction: column;
            text-align: center;
        }
    }
</style>
