<script>
    const testimonials = [
        {
            quote: "I've been a designer in the blockchain space for years, but only started learning to code less than 3 weeks ago. This weekend, I won 3 prizes at a NYC hackathon with a fully functional AI + blockchain product I built solo - in production, with live integrations.",
            author: "Sarah Chen",
            role: "Designer turned Developer",
            avatar: "SC",
            highlight: "Won 3 prizes at a hackathon"
        },
        {
            quote: "The teaching helped me go from zero to shipping real products insanely fast. As a domain expert, these skills helped me excel quickly. I went from never writing code to deploying my first SaaS in under a month.",
            author: "Marcus Rodriguez",
            role: "Product Manager",
            avatar: "MR",
            highlight: "First SaaS in under a month"
        },
        {
            quote: "The MCP integration module alone was worth the entire course. I've automated so many workflows that used to take hours. My productivity has at least tripled since applying these techniques.",
            author: "Emily Watson",
            role: "Software Engineer",
            avatar: "EW",
            highlight: "3x productivity increase"
        },
        {
            quote: "Coming from a non-technical background, I was skeptical. But the structured approach to learning AI-assisted development made everything click. Now I build tools for my team regularly.",
            author: "David Kim",
            role: "Marketing Lead",
            avatar: "DK",
            highlight: "Building tools for the team"
        },
        {
            quote: "The custom modes and rules section transformed how I work with Cursor. I've created workflows that my entire team now uses. It's become our competitive advantage.",
            author: "Alex Thompson",
            role: "Tech Lead",
            avatar: "AT",
            highlight: "Team-wide workflow adoption"
        },
        {
            quote: "I shipped 4 side projects in 2 months after taking this course. The real-world project modules gave me the confidence to actually launch instead of endlessly tinkering.",
            author: "Priya Sharma",
            role: "Indie Maker",
            avatar: "PS",
            highlight: "4 projects in 2 months"
        }
    ];
</script>

<section class="testimonials" id="testimonials">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Testimonials</span>
            <h2>Trusted by <span class="gradient-text">Builders</span></h2>
            <p class="section-subtitle">
                See what developers, designers, and makers are saying about their learning experience.
            </p>
        </div>

        <div class="testimonials-grid">
            {#each testimonials as testimonial}
                <div class="testimonial-card">
                    <div class="highlight-badge">{testimonial.highlight}</div>
                    <blockquote>"{testimonial.quote}"</blockquote>
                    <div class="testimonial-author">
                        <div class="avatar">{testimonial.avatar}</div>
                        <div class="author-info">
                            <span class="author-name">{testimonial.author}</span>
                            <span class="author-role">{testimonial.role}</span>
                        </div>
                    </div>
                </div>
            {/each}
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

    .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .testimonial-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        transition: all 0.3s ease;
    }

    .testimonial-card:hover {
        border-color: var(--border-color-light);
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .highlight-badge {
        display: inline-flex;
        align-self: flex-start;
        padding: 6px 12px;
        background: rgba(34, 197, 94, 0.1);
        border: 1px solid rgba(34, 197, 94, 0.2);
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        color: var(--accent-green);
        margin-bottom: 20px;
    }

    blockquote {
        font-size: 15px;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 24px;
        flex-grow: 1;
    }

    .testimonial-author {
        display: flex;
        align-items: center;
        gap: 14px;
        padding-top: 20px;
        border-top: 1px solid var(--border-color);
    }

    .avatar {
        width: 48px;
        height: 48px;
        background: var(--accent-gradient);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        color: white;
    }

    .author-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .author-name {
        font-size: 15px;
        font-weight: 600;
        color: var(--text-primary);
    }

    .author-role {
        font-size: 13px;
        color: var(--text-muted);
    }

    @media (max-width: 1024px) {
        .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .testimonials {
            padding: 80px 0;
        }

        h2 {
            font-size: 36px;
        }

        .testimonials-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
