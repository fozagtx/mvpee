<script>
    let mobileMenuOpen = false;

    const whatsappNumber = "233500861334";
    const message = encodeURIComponent("Hi! I'm interested in getting a website built for my business.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
</script>

<header>
    <div class="nav-wrapper">
        <nav>
            <a href="/" class="logo">
                <div class="logo-icon">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
                    </svg>
                    <span>Get Your Website</span>
                </a>
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
        padding: 20px 24px;
        pointer-events: none;
    }

    .nav-wrapper {
        max-width: 900px;
        margin: 0 auto;
        pointer-events: auto;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 28px;
        background: rgba(22, 22, 22, 0.85);
        backdrop-filter: blur(16px);
        border: 1px solid var(--border-color);
        border-radius: 100px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px;
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
        font-size: 14px;
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
    }

    .btn-whatsapp {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background: #25D366;
        color: white;
        border-radius: 100px;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.2s ease;
    }

    .btn-whatsapp:hover {
        background: #20bd5a;
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(37, 211, 102, 0.5);
    }

    .mobile-menu-btn {
        display: none;
        padding: 8px;
        background: transparent;
        color: var(--text-primary);
    }

    @media (max-width: 868px) {
        header {
            padding: 16px;
        }

        nav {
            padding: 12px 20px;
            border-radius: 20px;
            position: relative;
        }

        .nav-links {
            display: none;
            position: absolute;
            top: calc(100% + 12px);
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(22, 22, 22, 0.95);
            backdrop-filter: blur(16px);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 20px;
            gap: 8px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .nav-links.open {
            display: flex;
        }

        .nav-links a {
            padding: 12px 16px;
            text-align: center;
            border-radius: 12px;
            transition: background 0.2s ease;
        }

        .nav-links a:hover {
            background: rgba(255, 255, 255, 0.05);
        }

        .nav-actions {
            display: none;
        }

        .mobile-menu-btn {
            display: flex;
        }
    }
</style>
