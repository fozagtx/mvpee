<script>
    const stats = [
        { value: "10+", label: "Modules" },
        { value: "50+", label: "Lessons" },
        { value: "24/7", label: "AI Support" }
    ];
</script>

<section class="hero">
    <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="grid-overlay"></div>
    </div>

    <div class="container">
        <div class="hero-content">
            <div class="badge">
                <span class="badge-dot"></span>
                <span>AI-Powered Development Education</span>
            </div>

            <h1>
                Master <span class="gradient-text">AI-Powered</span> Development
            </h1>

            <p class="subtitle">
                A comprehensive course to master AI-powered development. Learn Cursor, custom modes, rules, MCPs, and build production-ready applications with AI assistance.
            </p>

            <div class="hero-cta">
                <a href="#newsletter" class="btn-primary-large">
                    <span>Get Early Access</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="#curriculum" class="btn-secondary">
                    View Curriculum
                </a>
            </div>

            <div class="stats">
                {#each stats as stat}
                    <div class="stat-item">
                        <span class="stat-value">{stat.value}</span>
                        <span class="stat-label">{stat.label}</span>
                    </div>
                {/each}
            </div>
        </div>

        <div class="hero-visual">
            <div class="code-window">
                <div class="window-header">
                    <div class="window-dots">
                        <span class="dot red"></span>
                        <span class="dot yellow"></span>
                        <span class="dot green"></span>
                    </div>
                    <span class="window-title">cursor.ai</span>
                </div>
                <div class="window-content">
                    <pre><code><span class="comment">// AI-assisted development</span>
<span class="keyword">const</span> <span class="variable">buildProduct</span> = <span class="keyword">async</span> () => {'{'}
  <span class="keyword">const</span> <span class="variable">ai</span> = <span class="keyword">await</span> <span class="function">initCursor</span>();
  <span class="keyword">const</span> <span class="variable">app</span> = <span class="keyword">await</span> <span class="variable">ai</span>.<span class="function">generate</span>({'{'}
    <span class="property">prompt</span>: <span class="string">"Build a SaaS app"</span>,
    <span class="property">framework</span>: <span class="string">"Next.js"</span>,
    <span class="property">database</span>: <span class="string">"PostgreSQL"</span>
  {'}'});

  <span class="keyword">return</span> <span class="variable">app</span>.<span class="function">deploy</span>();
{'}'};

<span class="comment">// Ship faster with AI</span>
<span class="function">buildProduct</span>().<span class="function">then</span>(<span class="function">console.log</span>);</code></pre>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        position: relative;
        min-height: auto;
        padding: 140px 0 100px;
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    .hero-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
    }

    .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        opacity: 0.4;
    }

    .orb-1 {
        width: 600px;
        height: 600px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        top: -200px;
        right: -100px;
    }

    .orb-2 {
        width: 400px;
        height: 400px;
        background: linear-gradient(135deg, #8b5cf6, #ec4899);
        bottom: -100px;
        left: -100px;
    }

    .grid-overlay {
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 60px 60px;
    }

    .container {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
    }

    .hero-content {
        animation: fadeInUp 0.8s ease-out;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.2);
        border-radius: 24px;
        font-size: 14px;
        color: var(--accent-primary);
        margin-bottom: 24px;
    }

    .badge-dot {
        width: 8px;
        height: 8px;
        background: var(--accent-green);
        border-radius: 50%;
        animation: pulse 2s infinite;
    }

    h1 {
        font-size: 64px;
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 24px;
        letter-spacing: -0.02em;
    }

    .gradient-text {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .subtitle {
        font-size: 20px;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 32px;
        max-width: 540px;
    }

    .hero-cta {
        display: flex;
        gap: 16px;
        margin-bottom: 48px;
    }

    .btn-primary-large {
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

    .btn-primary-large:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
    }

    .btn-secondary {
        display: inline-flex;
        align-items: center;
        padding: 16px 32px;
        background: transparent;
        color: var(--text-primary);
        border: 1px solid var(--border-color-light);
        border-radius: 12px;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.2s ease;
    }

    .btn-secondary:hover {
        background: var(--bg-card);
        border-color: var(--text-secondary);
    }

    .stats {
        display: flex;
        gap: 48px;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .stat-value {
        font-size: 32px;
        font-weight: 700;
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .stat-label {
        font-size: 14px;
        color: var(--text-muted);
    }

    .hero-visual {
        animation: fadeInUp 0.8s ease-out 0.2s both;
    }

    .code-window {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: var(--shadow-lg), var(--shadow-glow);
    }

    .window-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 20px;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border-color);
    }

    .window-dots {
        display: flex;
        gap: 8px;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .dot.red { background: #ff5f56; }
    .dot.yellow { background: #ffbd2e; }
    .dot.green { background: #27c93f; }

    .window-title {
        font-size: 13px;
        color: var(--text-muted);
    }

    .window-content {
        padding: 24px;
        overflow-x: auto;
    }

    pre {
        margin: 0;
        font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
        font-size: 14px;
        line-height: 1.7;
    }

    code {
        color: var(--text-secondary);
    }

    .comment { color: #6b7280; }
    .keyword { color: #c084fc; }
    .variable { color: #60a5fa; }
    .function { color: #34d399; }
    .string { color: #fbbf24; }
    .property { color: #f472b6; }

    @media (max-width: 1024px) {
        .container {
            grid-template-columns: 1fr;
            text-align: center;
        }

        h1 {
            font-size: 48px;
        }

        .subtitle {
            margin: 0 auto 32px;
        }

        .hero-cta {
            justify-content: center;
        }

        .stats {
            justify-content: center;
        }

        .hero-visual {
            max-width: 600px;
            margin: 0 auto;
        }
    }

    @media (max-width: 640px) {
        .hero {
            padding: 120px 0 60px;
        }

        h1 {
            font-size: 36px;
        }

        .subtitle {
            font-size: 16px;
        }

        .hero-cta {
            flex-direction: column;
        }

        .stats {
            gap: 24px;
        }

        .stat-value {
            font-size: 24px;
        }

        pre {
            font-size: 12px;
        }
    }
</style>
