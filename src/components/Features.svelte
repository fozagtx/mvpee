<script>
    const modules = [
        {
            number: "01",
            title: "Cursor Fundamentals",
            description: "Master the basics of Cursor IDE, from installation to your first AI-assisted code generation.",
            topics: ["Installation & Setup", "Interface Overview", "Basic Commands", "Chat Interface"],
            icon: "cursor"
        },
        {
            number: "02",
            title: "Custom Modes & Rules",
            description: "Learn to create custom modes and rules that tailor AI behavior to your specific workflow.",
            topics: ["Mode Configuration", "Custom Rules", "Context Management", "Workflow Optimization"],
            icon: "settings"
        },
        {
            number: "03",
            title: "MCP Integration",
            description: "Integrate Model Context Protocol for enhanced AI capabilities and external tool connections.",
            topics: ["MCP Setup", "Tool Integration", "API Connections", "Custom Providers"],
            icon: "plug"
        },
        {
            number: "04",
            title: "Production Apps",
            description: "Build and deploy production-ready applications using AI-assisted development techniques.",
            topics: ["Architecture Design", "Code Quality", "Testing Strategies", "Deployment"],
            icon: "rocket"
        },
        {
            number: "05",
            title: "Advanced Prompting",
            description: "Master advanced prompting techniques to get better, more accurate code from AI assistants.",
            topics: ["Prompt Engineering", "Context Optimization", "Multi-step Tasks", "Error Handling"],
            icon: "message"
        },
        {
            number: "06",
            title: "Real Projects",
            description: "Apply everything you've learned by building real-world projects from scratch to deployment.",
            topics: ["SaaS Applications", "APIs & Backends", "Frontend Apps", "Full-stack Projects"],
            icon: "code"
        }
    ];
</script>

<section class="curriculum" id="curriculum">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Curriculum</span>
            <h2>Everything You Need to <span class="gradient-text">Ship Faster</span></h2>
            <p class="section-subtitle">
                A structured path from AI development basics to building and deploying production applications.
            </p>
        </div>

        <div class="modules-grid">
            {#each modules as module}
                <div class="module-card">
                    <div class="module-header">
                        <span class="module-number">{module.number}</span>
                        <div class="module-icon">
                            {#if module.icon === 'cursor'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 3L19 12L12 13L9 20L5.5 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else if module.icon === 'settings'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                                    <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            {:else if module.icon === 'plug'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2V6M8 6H16M9 6V10C9 12 10 14 12 14C14 14 15 12 15 10V6M12 14V22M8 18H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {:else if module.icon === 'rocket'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 16.5C3 18 3 21 3 21C3 21 6 21 7.5 19.5C8.32 18.68 8.32 17.32 7.5 16.5C6.68 15.68 5.32 15.68 4.5 16.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.5 3.5C14.5 3.5 20.5 6.5 20.5 12C20.5 14.5 18 18 14 18L6 10C6 6 9.5 3.5 12 3.5C12 3.5 14.5 3.5 14.5 3.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="15" cy="9" r="1" fill="currentColor"/>
                                </svg>
                            {:else if module.icon === 'message'}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 9H16M8 13H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            {:else}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            {/if}
                        </div>
                    </div>
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                    <ul class="topic-list">
                        {#each module.topics as topic}
                            <li>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {topic}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .curriculum {
        padding: 120px 0;
        background: var(--bg-primary);
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

    .modules-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .module-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 32px;
        transition: all 0.3s ease;
    }

    .module-card:hover {
        border-color: var(--border-color-light);
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .module-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
    }

    .module-number {
        font-size: 14px;
        font-weight: 700;
        color: var(--accent-primary);
        background: rgba(59, 130, 246, 0.1);
        padding: 6px 12px;
        border-radius: 8px;
    }

    .module-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--accent-gradient);
        border-radius: 12px;
        color: white;
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--text-primary);
    }

    p {
        font-size: 15px;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 20px;
    }

    .topic-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .topic-list li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        color: var(--text-muted);
    }

    .topic-list svg {
        color: var(--accent-green);
        flex-shrink: 0;
    }

    @media (max-width: 1024px) {
        .modules-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .curriculum {
            padding: 80px 0;
        }

        h2 {
            font-size: 36px;
        }

        .modules-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
