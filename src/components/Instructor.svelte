<script>
    const credentials = [
        "Built 20+ production applications using AI tools",
        "Helped 500+ developers learn AI-assisted development",
        "Active contributor to open-source AI projects",
        "Former senior engineer at top tech companies"
    ];

    const socialLinks = [
        { name: "Twitter", url: "#", icon: "twitter" },
        { name: "GitHub", url: "#", icon: "github" },
        { name: "LinkedIn", url: "#", icon: "linkedin" }
    ];
</script>

<section class="instructor" id="instructor">
    <div class="container">
        <div class="instructor-grid">
            <div class="instructor-image">
                <div class="image-frame">
                    <div class="avatar-placeholder">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="floating-card card-1">
                    <span class="card-value">500+</span>
                    <span class="card-label">Students Taught</span>
                </div>
                <div class="floating-card card-2">
                    <span class="card-value">20+</span>
                    <span class="card-label">Apps Built</span>
                </div>
            </div>

            <div class="instructor-content">
                <span class="section-badge">Meet Your Instructor</span>
                <h2>Learn from Someone Who <span class="gradient-text">Ships Daily</span></h2>
                <p class="intro">
                    This course isn't taught by someone who just read about AI development. It's created by a practitioner who uses these tools every day to build and ship real products.
                </p>

                <div class="credentials">
                    {#each credentials as credential}
                        <div class="credential-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="rgba(34, 197, 94, 0.1)"/>
                                <path d="M14 7L8.5 12.5L6 10" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>{credential}</span>
                        </div>
                    {/each}
                </div>

                <div class="instructor-cta">
                    <a href="#newsletter" class="btn-primary">
                        Get Early Access
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <div class="social-links">
                        <a href="#" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .instructor {
        padding: 120px 0;
        background: var(--bg-primary);
        position: relative;
        overflow: hidden;
    }

    .instructor-grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 80px;
        align-items: center;
    }

    .instructor-image {
        position: relative;
    }

    .image-frame {
        aspect-ratio: 1;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .avatar-placeholder {
        width: 200px;
        height: 200px;
        background: var(--accent-gradient);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        opacity: 0.9;
    }

    .floating-card {
        position: absolute;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 20px 24px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-shadow: var(--shadow-lg);
        animation: float 6s ease-in-out infinite;
    }

    .card-1 {
        top: 10%;
        right: -20px;
        animation-delay: 0s;
    }

    .card-2 {
        bottom: 15%;
        left: -20px;
        animation-delay: 3s;
    }

    .card-value {
        font-size: 28px;
        font-weight: 700;
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .card-label {
        font-size: 13px;
        color: var(--text-muted);
    }

    .instructor-content {
        animation: fadeInUp 0.8s ease-out;
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
        font-size: 44px;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 24px;
        letter-spacing: -0.02em;
    }

    .gradient-text {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .intro {
        font-size: 18px;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 32px;
    }

    .credentials {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 40px;
    }

    .credential-item {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 16px;
        color: var(--text-secondary);
    }

    .instructor-cta {
        display: flex;
        align-items: center;
        gap: 24px;
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
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
    }

    .social-links {
        display: flex;
        gap: 12px;
    }

    .social-links a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        color: var(--text-muted);
        transition: all 0.2s ease;
    }

    .social-links a:hover {
        color: var(--text-primary);
        border-color: var(--border-color-light);
        transform: translateY(-2px);
    }

    @media (max-width: 1024px) {
        .instructor-grid {
            grid-template-columns: 1fr;
            gap: 60px;
        }

        .instructor-image {
            max-width: 400px;
            margin: 0 auto;
        }

        .floating-card {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .instructor {
            padding: 80px 0;
        }

        h2 {
            font-size: 32px;
        }

        .instructor-cta {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>
