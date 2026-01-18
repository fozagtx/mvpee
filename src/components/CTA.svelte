<script>
    let formData = {
        name: '',
        email: '',
        phone: '',
        businessType: '',
        packageInterest: '',
        message: ''
    };
    let isSubmitting = false;
    let isSuccess = false;
    let errorMessage = '';

    const packageOptions = [
        { value: 'one-page', label: 'One-Page Site ($150)' },
        { value: 'full-stack', label: 'Full-Stack Site ($500)' },
        { value: 'unsure', label: 'Not sure yet' }
    ];

    async function handleSubmit(e) {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            errorMessage = 'Please fill in all required fields';
            return;
        }

        if (!formData.email.includes('@')) {
            errorMessage = 'Please enter a valid email address';
            return;
        }

        isSubmitting = true;
        errorMessage = '';

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        isSuccess = true;
        isSubmitting = false;
    }
</script>

<section class="contact" id="contact">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-info">
                <span class="section-badge">Get Started</span>
                <h2>Ready to Get Your <span class="gradient-text">Business Online?</span></h2>
                <p class="contact-subtitle">
                    Professional website. Fast delivery. Transparent pricing. Let's build your MVP-ready site.
                </p>

                <div class="contact-features">
                    <div class="contact-feature">
                        <div class="feature-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>Response within 24 hours</span>
                    </div>
                    <div class="contact-feature">
                        <div class="feature-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>No obligation consultation</span>
                    </div>
                    <div class="contact-feature">
                        <div class="feature-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>100% satisfaction focus</span>
                    </div>
                </div>

                <div class="risk-reversal">
                    <p>We don't stop until your site represents your business perfectly.</p>
                </div>
            </div>

            <div class="contact-form-wrapper">
                {#if isSuccess}
                    <div class="success-message">
                        <div class="success-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out. We'll get back to you within 24 hours with a project confirmation and timeline.</p>
                    </div>
                {:else}
                    <form on:submit={handleSubmit} class="contact-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    bind:value={formData.name}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="you@company.com"
                                    bind:value={formData.email}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="+1 (555) 000-0000"
                                    bind:value={formData.phone}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div class="form-group">
                                <label for="businessType">Business Type</label>
                                <input
                                    type="text"
                                    id="businessType"
                                    placeholder="e.g., Consulting, Retail, Services"
                                    bind:value={formData.businessType}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="packageInterest">Package Interest</label>
                            <select
                                id="packageInterest"
                                bind:value={formData.packageInterest}
                                disabled={isSubmitting}
                            >
                                <option value="">Select a package...</option>
                                {#each packageOptions as option}
                                    <option value={option.value}>{option.label}</option>
                                {/each}
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Project Details *</label>
                            <textarea
                                id="message"
                                placeholder="Tell us about your business and what you need..."
                                rows="4"
                                bind:value={formData.message}
                                disabled={isSubmitting}
                            ></textarea>
                        </div>

                        {#if errorMessage}
                            <div class="error-message">{errorMessage}</div>
                        {/if}

                        <button type="submit" class="submit-btn" disabled={isSubmitting}>
                            {#if isSubmitting}
                                <span class="spinner"></span>
                                <span>Sending...</span>
                            {:else}
                                <span>Start Your Project</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {/if}
                        </button>
                    </form>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .contact {
        padding: 120px 0;
        background: var(--bg-primary);
    }

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 80px;
        align-items: start;
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
        font-size: 44px;
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

    .contact-subtitle {
        font-size: 18px;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 32px;
    }

    .contact-features {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 32px;
    }

    .contact-feature {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 15px;
        color: var(--text-secondary);
    }

    .feature-icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(34, 197, 94, 0.1);
        border-radius: 10px;
        color: var(--accent-green);
    }

    .risk-reversal {
        padding: 16px 20px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 12px;
    }

    .risk-reversal p {
        font-size: 14px;
        color: var(--text-muted);
        margin: 0;
        font-style: italic;
    }

    .contact-form-wrapper {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 20px;
        padding: 40px;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    label {
        font-size: 14px;
        font-weight: 500;
        color: var(--text-primary);
    }

    input, select, textarea {
        padding: 14px 16px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        font-size: 15px;
        color: var(--text-primary);
        font-family: inherit;
        transition: all 0.2s ease;
    }

    input::placeholder, textarea::placeholder {
        color: var(--text-muted);
    }

    input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: var(--accent-primary);
        box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
    }

    select {
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2371717a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 16px center;
        padding-right: 44px;
    }

    textarea {
        resize: vertical;
        min-height: 120px;
    }

    .error-message {
        padding: 12px 16px;
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.2);
        border-radius: 10px;
        font-size: 14px;
        color: #ef4444;
    }

    .submit-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 16px 32px;
        background: var(--accent-gradient);
        color: white;
        border-radius: 12px;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.2s ease;
        margin-top: 8px;
    }

    .submit-btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(20, 184, 166, 0.4);
    }

    .submit-btn:disabled {
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

    .success-message {
        text-align: center;
        padding: 40px 20px;
    }

    .success-icon {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(34, 197, 94, 0.1);
        border-radius: 50%;
        color: var(--accent-green);
        margin: 0 auto 24px;
    }

    .success-message h3 {
        font-size: 24px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 12px;
    }

    .success-message p {
        font-size: 16px;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    @media (max-width: 1024px) {
        .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
        }

        .contact-info {
            text-align: center;
        }

        .contact-features {
            align-items: center;
        }
    }

    @media (max-width: 768px) {
        .contact {
            padding: 80px 0;
        }

        h2 {
            font-size: 32px;
        }

        .contact-form-wrapper {
            padding: 24px;
        }

        .form-row {
            grid-template-columns: 1fr;
        }
    }
</style>
