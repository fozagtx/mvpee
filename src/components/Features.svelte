<script>
    const services = [
        {
            title: "AI Automation Systems",
            description:
                "Streamline operations with intelligent automation that learns and adapts to your business processes, reducing manual work by up to 80%.",
            icon: "automation",
        },
        {
            title: "Custom AI Chatbots",
            description:
                "Deploy smart conversational AI that handles customer support, lead qualification, and internal queries 24/7 with human-like understanding.",
            icon: "chatbot",
        },
        {
            title: "Predictive Analytics",
            description:
                "Make data-driven decisions with AI-powered analytics that forecast trends, identify opportunities, and optimize business outcomes.",
            icon: "analytics",
        },
        {
            title: "Document Processing",
            description:
                "Extract, analyze, and process documents at scale with AI that understands context, reducing processing time from hours to seconds.",
            icon: "document",
        },
        {
            title: "AI Integration Services",
            description:
                "Seamlessly integrate AI capabilities into your existing software stack with custom APIs and enterprise-grade solutions.",
            icon: "integration",
        },
        {
            title: "Machine Learning Models",
            description:
                "Build and deploy custom ML models tailored to your unique business challenges, from recommendation systems to fraud detection.",
            icon: "ml",
        },
    ];

    function getIconPath(iconType) {
        const icons = {
            automation: "M12 2L2 7V17L12 22L22 17V7L12 2ZM12 12L7 9.5V14.5L12 17V12ZM12 12V17L17 14.5V9.5L12 12Z",
            chatbot: "M8 10H8.01M12 10H12.01M16 10H16.01M9 16H15M21 12C21 16.9706 16.9706 21 12 21C10.3 21 8.7 20.5 7.3 19.6L3 21L4.4 16.7C3.5 15.3 3 13.7 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            analytics: "M3 3V21H21M7 14L12 9L16 13L21 8M21 8V12M21 8H17",
            document: "M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12L19 10V19C19 20.1046 18.1046 21 17 21Z",
            integration: "M17 8L21 12M21 12L17 16M21 12H9M7 8L3 12M3 12L7 16M3 12H15",
            ml: "M9.663 17H4C3.44772 17 3 16.5523 3 16V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V16C21 16.5523 20.5523 17 20 17H14.337M12 21L9.663 17M12 21L14.337 17M12 21V17",
        };
        return icons[iconType] || icons.automation;
    }
</script>

<section class="features" id="services">
    <div class="container">
        <div class="section-header">
            <h2>Our AI-Powered Services</h2>
            <p class="section-subtitle">
                Comprehensive solutions designed to solve real business challenges with cutting-edge AI technology
            </p>
        </div>
        <div class="services-grid">
            {#each services as service}
                <div class="service-card">
                    <div class="service-icon">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d={getIconPath(service.icon)}
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <button class="learn-more-btn">
                        Learn More
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .features {
        padding: 80px 0;
        background: var(--bg-alt);
    }

    .section-header {
        text-align: center;
        max-width: 700px;
        margin: 0 auto 60px;
    }

    .section-header h2 {
        font-size: 42px;
        font-weight: 600;
        margin-bottom: 16px;
        color: var(--text);
    }

    .section-subtitle {
        font-size: 18px;
        color: var(--text-light);
        line-height: 1.6;
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 32px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .service-card {
        background: white;
        padding: 40px 32px;
        border-radius: 16px;
        border: 1px solid var(--border);
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }

    .service-card:hover {
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
        border-color: var(--primary);
        transform: translateY(-4px);
    }

    .service-icon {
        width: 64px;
        height: 64px;
        background: rgba(59, 130, 246, 0.1);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
        color: var(--primary);
    }

    .service-icon svg {
        width: 32px;
        height: 32px;
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--text);
    }

    p {
        color: var(--text-light);
        line-height: 1.7;
        font-size: 15px;
        margin-bottom: 24px;
        flex-grow: 1;
    }

    .learn-more-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0;
        background: transparent;
        color: var(--primary);
        font-weight: 500;
        font-size: 15px;
        transition: all 0.2s;
    }

    .learn-more-btn:hover {
        gap: 12px;
    }

    .learn-more-btn svg {
        width: 16px;
        height: 16px;
        transition: transform 0.2s;
    }

    .learn-more-btn:hover svg {
        transform: translateX(2px);
    }

    @media (max-width: 768px) {
        .features {
            padding: 60px 0;
        }

        .section-header {
            margin-bottom: 40px;
        }

        .section-header h2 {
            font-size: 32px;
        }

        .services-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
