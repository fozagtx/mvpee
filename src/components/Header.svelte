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
                        d="M8 12H16M12 8V16"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
                <span class="logo-text">SupaDB</span>
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

    .nav-link {
        color: var(--text-light);
        font-weight: 500;
        font-size: 15px;
        transition: color 0.2s;
    }

    .nav-link:hover {
        color: var(--text);
    }
</style>
