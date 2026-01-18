<script>
    const faqs = [
        {
            question: "Why are your prices so low compared to agencies?",
            answer: "We focus on MVP-ready sites—lean, professional, and effective. No bloat, no overhead, just what your business needs to get online and start converting. We've streamlined our process to deliver quality work without the agency markup."
        },
        {
            question: "What's the difference between one-page and full-stack?",
            answer: "One-page sites are perfect for simple businesses—service providers, consultants, local shops. Everything your customers need on a single, scrollable page. Full-stack sites include multiple pages, advanced features like CMS integration, and are better for growing businesses, e-commerce, or content-heavy sites."
        },
        {
            question: "Do I really need the SEO add-on?",
            answer: "If you want customers to find you on Google, yes. The SEO package ensures your site gets properly indexed and ranks for relevant searches in your area. Without it, you'll have a beautiful site that nobody can find through search engines."
        },
        {
            question: "What if I need changes after launch?",
            answer: "Minor revisions are included with all packages. For major updates or ongoing maintenance, we can discuss additional work at fair rates. We're here to support your business long-term."
        },
        {
            question: "Can you handle international businesses?",
            answer: "Absolutely. We've successfully delivered sites for clients in Switzerland, Ghana, and beyond. We understand diverse markets and can adapt your site for international audiences. Time zones are never a problem—we work asynchronously to meet your deadlines."
        },
        {
            question: "How do I get started?",
            answer: "Simply fill out the contact form below with your project details. We'll review your requirements and get back to you within 24 hours with a confirmation and timeline. Once you approve, we start building immediately."
        }
    ];

    let openIndex = null;

    function toggleFaq(index) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<section class="faq" id="faq">
    <div class="container">
        <div class="faq-grid">
            <div class="faq-header">
                <span class="section-badge">FAQ</span>
                <h2>Common Questions <span class="gradient-text">Answered</span></h2>
                <p class="section-subtitle">
                    Everything you need to know about our web design service. Can't find your answer? Reach out to us.
                </p>
                <a href="#contact" class="contact-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Contact Us
                </a>
            </div>

            <div class="faq-list">
                {#each faqs as faq, index}
                    <div class="faq-item" class:open={openIndex === index}>
                        <button class="faq-trigger" on:click={() => toggleFaq(index)}>
                            <span class="faq-question">{faq.question}</span>
                            <div class="faq-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </button>
                        <div class="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .faq {
        padding: 120px 0;
        background: var(--bg-primary);
        position: relative;
    }

    .faq-grid {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 80px;
        align-items: start;
    }

    .faq-header {
        position: sticky;
        top: 120px;
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

    .section-subtitle {
        font-size: 17px;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 32px;
    }

    .contact-link {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-size: 15px;
        font-weight: 500;
        color: var(--accent-primary);
        transition: all 0.2s ease;
    }

    .contact-link:hover {
        gap: 14px;
    }

    .faq-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .faq-item {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .faq-item:hover {
        border-color: var(--border-color-light);
    }

    .faq-item.open {
        border-color: var(--accent-primary);
        box-shadow: 0 0 20px rgba(20, 184, 166, 0.1);
    }

    .faq-trigger {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 24px;
        background: transparent;
        text-align: left;
        color: var(--text-primary);
    }

    .faq-question {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.4;
    }

    .faq-icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-secondary);
        border-radius: 8px;
        color: var(--text-secondary);
        flex-shrink: 0;
        transition: all 0.3s ease;
    }

    .faq-item.open .faq-icon {
        background: var(--accent-gradient);
        color: white;
        transform: rotate(45deg);
    }

    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }

    .faq-item.open .faq-answer {
        max-height: 300px;
    }

    .faq-answer p {
        padding: 0 24px 24px;
        font-size: 15px;
        color: var(--text-secondary);
        line-height: 1.7;
    }

    @media (max-width: 1024px) {
        .faq-grid {
            grid-template-columns: 1fr;
            gap: 48px;
        }

        .faq-header {
            position: static;
            text-align: center;
        }

        .contact-link {
            justify-content: center;
        }
    }

    @media (max-width: 768px) {
        .faq {
            padding: 80px 0;
        }

        h2 {
            font-size: 32px;
        }

        .faq-trigger {
            padding: 20px;
        }

        .faq-answer p {
            padding: 0 20px 20px;
        }
    }
</style>
