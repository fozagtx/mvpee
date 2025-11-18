<header>
    <div class="container">
        <nav>
            <div class="logo">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="4"
                        fill="#3B82F6"
                    />
                    <path
                        d="M7 12L10 15L17 8"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <circle cx="16" cy="16" r="2" fill="white"/>
                </svg>
                <span class="logo-text">AI Solutions</span>
            </div>
            <div class="nav-links">
                <a href="#services" class="nav-link">Services</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#contact" class="nav-link">Contact</a>
                <button class="btn-primary">Get Started</button>
            </div>
        </nav>
    </div>
</header>

<style>
    header {
        padding: 16px 0;
        background: var(--bg);
        border-bottom: 1px solid var(--border);
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px;
        font-weight: 600;
        color: var(--text);
    }

    .logo svg {
        width: 24px;
        height: 24px;
    }

    .nav-links {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    .nav-link {
        color: var(--text-light);
        font-weight: 500;
        font-size: 15px;
        transition: color 0.2s;
    }

    .nav-link:hover {
        color: var(--text);
    }

    .btn-primary {
        padding: 10px 20px;
        background: var(--primary);
        color: white;
        border-radius: 6px;
        font-weight: 500;
        font-size: 14px;
        transition: all 0.2s;
    }

    .btn-primary:hover {
        background: var(--primary-dark);
        transform: translateY(-1px);
    }

    @media (max-width: 768px) {
        .nav-links {
            gap: 16px;
        }

        .nav-link {
            display: none;
        }
    }
</style>
