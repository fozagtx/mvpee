<script>
    let email = '';
    let isSubmitting = false;
    let isSuccess = false;
    let errorMessage = '';

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            errorMessage = 'Please enter a valid email address';
            return;
        }

        isSubmitting = true;
        errorMessage = '';

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        isSuccess = true;
        isSubmitting = false;
        email = '';
    }
</script>

<section class="newsletter" id="newsletter">
    <div class="container">
        <div class="newsletter-content">
            <div class="newsletter-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
            </div>

            <div class="newsletter-inner">
                <span class="section-badge">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4L8 8.5L14 4M2 12H14V4H2V12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Get Notified
                </span>

                <h2>Stay Updated on <span class="gradient-text">New Resources</span></h2>

                <p class="newsletter-subtitle">
                    Get notified about new lessons, platform updates, and exclusive content. No spam, just valuable AI development insights.
                </p>

                {#if isSuccess}
                    <div class="success-message">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>You're on the list! We'll notify you about new updates.</span>
                    </div>
                {:else}
                    <form on:submit={handleSubmit} class="newsletter-form">
                        <div class="input-wrapper">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                bind:value={email}
                                disabled={isSubmitting}
                            />
                            <button type="submit" disabled={isSubmitting}>
                                {#if isSubmitting}
                                    <span class="spinner"></span>
                                {:else}
                                    Get Notified
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                {/if}
                            </button>
                        </div>
                        {#if errorMessage}
                            <span class="error-message">{errorMessage}</span>
                        {/if}
                    </form>
                {/if}

                <div class="trust-signals">
                    <div class="trust-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>No spam, ever</span>
                    </div>
                    <div class="trust-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Unsubscribe anytime</span>
                    </div>
                    <div class="trust-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Early access to content</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .newsletter {
        padding: 120px 0;
        background: var(--bg-primary);
    }

    .newsletter-content {
        position: relative;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 24px;
        overflow: hidden;
    }

    .newsletter-bg {
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
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        top: -200px;
        right: -100px;
    }

    .orb-2 {
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, #8b5cf6, #ec4899);
        bottom: -150px;
        left: -100px;
    }

    .newsletter-inner {
        position: relative;
        z-index: 1;
        padding: 80px 60px;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .section-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.2);
        border-radius: 24px;
        font-size: 14px;
        font-weight: 500;
        color: var(--accent-primary);
        margin-bottom: 24px;
    }

    h2 {
        font-size: 42px;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 16px;
        letter-spacing: -0.02em;
    }

    .gradient-text {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .newsletter-subtitle {
        font-size: 18px;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 32px;
    }

    .newsletter-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .input-wrapper {
        display: flex;
        gap: 12px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 6px;
    }

    input {
        flex: 1;
        padding: 14px 18px;
        background: transparent;
        border: none;
        font-size: 16px;
        color: var(--text-primary);
        outline: none;
    }

    input::placeholder {
        color: var(--text-muted);
    }

    button[type="submit"] {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 28px;
        background: var(--accent-gradient);
        color: white;
        border-radius: 10px;
        font-weight: 600;
        font-size: 15px;
        transition: all 0.2s ease;
        white-space: nowrap;
    }

    button[type="submit"]:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }

    button[type="submit"]:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .spinner {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .error-message {
        font-size: 14px;
        color: #ef4444;
    }

    .success-message {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 20px;
        background: rgba(34, 197, 94, 0.1);
        border: 1px solid rgba(34, 197, 94, 0.2);
        border-radius: 12px;
        color: var(--accent-green);
        font-size: 16px;
        margin-bottom: 24px;
    }

    .trust-signals {
        display: flex;
        justify-content: center;
        gap: 32px;
        margin-top: 32px;
    }

    .trust-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: var(--text-muted);
    }

    .trust-item svg {
        color: var(--accent-green);
    }

    @media (max-width: 768px) {
        .newsletter {
            padding: 80px 0;
        }

        .newsletter-inner {
            padding: 48px 24px;
        }

        h2 {
            font-size: 32px;
        }

        .input-wrapper {
            flex-direction: column;
        }

        button[type="submit"] {
            justify-content: center;
        }

        .trust-signals {
            flex-direction: column;
            gap: 12px;
        }
    }
</style>
