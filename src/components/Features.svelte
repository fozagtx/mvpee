<script>
    const learningAreas = [
        {
            title: "AI Coding",
            description: "Mastering development with Claude, GitHub Copilot, and Cursor. Building projects with AI assistance.",
            status: "Active Learning",
            progress: "Building with AI",
            icon: "code"
        },
        {
            title: "AI Prompting",
            description: "Engineering effective prompts, conversation design, and advanced techniques for AI interactions.",
            status: "Exploring",
            progress: "Prompt Engineering",
            icon: "message"
        },
        {
            title: "AI Brand Building",
            description: "Using AI tools for design, content creation, and marketing to build compelling brands.",
            status: "Experimenting",
            progress: "Creative AI Tools",
            icon: "brand"
        },
    ];
</script>

<section class="features" id="features">
    <div class="container">
        <div class="learning-grid">
            {#each learningAreas as area}
                <div class="learning-card">
                    <div class="area-icon">
                        {#if area.icon === 'code'}
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        {:else if area.icon === 'message'}
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15A2 2 0 0 1 19 17H7L4 20V6A2 2 0 0 1 6 4H19A2 2 0 0 1 21 6V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13 8H8M16 12H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        {:else}
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        {/if}
                    </div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                    <div class="progress-info">
                        <span class="status-badge">{area.status}</span>
                        <span class="current-focus">{area.progress}</span>
                    </div>
                    <button class="explore-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Explore Learning
                    </button>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .features {
        padding: 40px 0 80px;
        background: var(--bg);
    }

    .learning-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 24px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .learning-card {
        background: var(--bg);
        padding: 32px;
        border-radius: 16px;
        border: 1px solid var(--border);
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .learning-card:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        border-color: #d1d5db;
        transform: translateY(-2px);
    }

    .area-icon {
        margin-bottom: 20px;
        color: var(--primary);
    }

    .area-icon svg {
        width: 48px;
        height: 48px;
    }

    h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--text);
    }

    p {
        color: var(--text-light);
        line-height: 1.6;
        font-size: 14px;
        margin-bottom: 16px;
        flex-grow: 1;
    }

    .progress-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 20px;
        width: 100%;
    }

    .status-badge {
        display: inline-flex;
        padding: 6px 12px;
        background: var(--bg-alt);
        border: 1px solid var(--border);
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        color: var(--primary);
        align-self: center;
    }

    .current-focus {
        font-size: 13px;
        color: var(--text-light);
        font-style: italic;
    }

    .explore-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 12px 24px;
        background: var(--primary);
        color: white;
        border-radius: 8px;
        font-weight: 500;
        font-size: 15px;
        transition: all 0.2s;
        justify-content: center;
    }

    .explore-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-1px);
    }

    .explore-btn svg {
        width: 16px;
        height: 16px;
    }

    @media (max-width: 768px) {
        .features {
            padding: 30px 0 60px;
        }

        .learning-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
