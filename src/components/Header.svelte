<script>
    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
</script>

<header>
    <div class="container">
        <nav>
            <a href="/" class="logo">
                <div class="logo-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="url(#logo-gradient)"/>
                        <path d="M8 16L12 12V20L8 16Z" fill="white"/>
                        <path d="M14 10L18 16L14 22V10Z" fill="white" fill-opacity="0.8"/>
                        <path d="M20 12L24 16L20 20V12Z" fill="white" fill-opacity="0.6"/>
                        <defs>
                            <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#14b8a6"/>
                                <stop offset="1" stop-color="#3b82f6"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <span class="logo-text">MVPE</span>
            </a>

            <div class="nav-links" class:open={mobileMenuOpen}>
                <a href="#how-it-works" on:click={() => mobileMenuOpen = false}>How It Works</a>
                <a href="#pricing" on:click={() => mobileMenuOpen = false}>Pricing</a>
                <a href="#testimonials" on:click={() => mobileMenuOpen = false}>Testimonials</a>
                <a href="#faq" on:click={() => mobileMenuOpen = false}>FAQ</a>
            </div>

            <div class="nav-actions">
                <a href="#contact" class="btn-primary">Get Your Website</a>
            </div>

            <button class="mobile-menu-btn" on:click={toggleMobileMenu} aria-label="Toggle menu">
                {#if mobileMenuOpen}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                {:else}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                {/if}
            </button>
        </nav>
    </div>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 16px 0;
        background: rgba(10, 10, 10, 0.8);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 20px;
        font-weight: 700;
        color: var(--text-primary);
    }

    .logo-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-text {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: 0.05em;
    }

    .nav-links {
        display: flex;
        gap: 32px;
    }

    .nav-links a {
        font-size: 15px;
        font-weight: 500;
        color: var(--text-secondary);
        transition: color 0.2s ease;
    }

    .nav-links a:hover {
        color: var(--text-primary);
    }

    .nav-actions {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .btn-primary {
        padding: 10px 20px;
        background: var(--accent-gradient);
        color: white;
        border-radius: 8px;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.2s ease;
    }

    .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(20, 184, 166, 0.4);
    }

    .mobile-menu-btn {
        display: none;
        padding: 8px;
        background: transparent;
        color: var(--text-primary);
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: var(--bg-secondary);
            padding: 24px;
            gap: 20px;
            border-bottom: 1px solid var(--border-color);
        }

        .nav-links.open {
            display: flex;
        }

        .nav-actions {
            display: none;
        }

        .mobile-menu-btn {
            display: flex;
        }
    }
</style>
