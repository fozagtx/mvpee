<script>
    const faqs = [
        {
            question: "Do I need coding experience to take this course?",
            answer: "Basic programming knowledge is helpful but not required. The course is designed for both beginners and experienced developers. We start with fundamentals and progressively build to advanced topics."
        },
        {
            question: "What tools do I need to get started?",
            answer: "You'll need a computer with Cursor IDE installed (free download). We'll guide you through setting up everything else, including any API keys and integrations needed for the projects."
        },
        {
            question: "How long do I have access to the course?",
            answer: "You get lifetime access to all course materials, including any future updates. Once you purchase, you can learn at your own pace and revisit content whenever you need."
        },
        {
            question: "Is there a community or support available?",
            answer: "Yes! All students get access to our private Discord community where you can ask questions, share your projects, and connect with other learners. Pro students also get priority support."
        },
        {
            question: "What if the course doesn't work for me?",
            answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, just reach out and we'll process a full refund, no questions asked."
        },
        {
            question: "Will this course stay updated with new AI tools?",
            answer: "Absolutely. AI development moves fast, and so do we. The course is regularly updated with new modules covering the latest tools, techniques, and best practices."
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
                <h2>Frequently Asked <span class="gradient-text">Questions</span></h2>
                <p class="section-subtitle">
                    Everything you need to know about the course. Can't find your answer? Reach out to us.
                </p>
                <a href="#newsletter" class="contact-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Contact Support
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
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
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
