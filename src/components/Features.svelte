<script>
  const resources = [
    {
      title: 'Startup Resources',
      description: 'Access curated lists of tools, guides, and frameworks to launch your SaaS faster.',
      downloads: '12k',
      size: '2.3MB'
    },
    {
      title: 'Funding Database',
      description: 'Discover funding opportunities, investor databases, and tips for raising capital.',
      downloads: '8.5k',
      size: '1.8MB'
    },
    {
      title: 'Growth Playbook',
      description: 'Learn proven marketing tactics, growth hacks, and scaling strategies from successful founders.',
      downloads: '15k',
      size: '3.1MB'
    }
  ];
</script>

<section class="features" id="features">
  <div class="container">
    <div class="resources-grid">
      {#each resources as resource}
        <div class="resource-card">
          <div class="folder-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16C8 13.7909 9.79086 12 12 12H24L28 16H52C54.2091 16 56 17.7909 56 20V48C56 50.2091 54.2091 52 52 52H12C9.79086 52 8 50.2091 8 48V16Z" fill="#3B82F6"/>
            </svg>
          </div>
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
          <div class="card-meta">
            <span>{resource.size}</span>
            <span>•</span>
            <span>{resource.downloads} downloads</span>
          </div>
          <button class="download-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V10M8 10L5 7M8 10L11 7M2 12V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Download
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

  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .resource-card {
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

  .resource-card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    border-color: #d1d5db;
  }

  .folder-icon {
    margin-bottom: 20px;
  }

  .folder-icon svg {
    width: 80px;
    height: 80px;
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

  .card-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--text-light);
    margin-bottom: 20px;
  }

  .download-btn {
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

  .download-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
  }

  .download-btn svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    .features {
      padding: 30px 0 60px;
    }

    .resources-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
