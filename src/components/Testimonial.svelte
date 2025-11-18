<script>
  export let name = "Sarah Chen";
  export let testimonial = "Game-changing insights every week. This newsletter has become my go-to resource for staying ahead in AI.";
  export let rating = 5;
</script>

<section class="testimonial-section">
  <div class="container">
    <div class="testimonial-content">
      <!-- Reviewer Name -->
      <p class="reviewer-name">{name}</p>

      <!-- Star Rating -->
      <div class="star-rating" aria-label="{rating} out of 5 stars">
        {#each Array(5) as _, i}
          <svg
            class="star"
            class:filled={i < rating}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z"
              fill={i < rating ? "currentColor" : "none"}
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        {/each}
      </div>

      <!-- Testimonial Text -->
      <p class="testimonial-text">"{testimonial}"</p>
    </div>
  </div>
</section>

<style>
  .testimonial-section {
    padding: 60px 0 100px;
    text-align: center;
    position: relative;
  }

  .testimonial-content {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .reviewer-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--white);
    letter-spacing: 0.3px;
  }

  /* Star Rating */
  .star-rating {
    display: flex;
    gap: 4px;
    margin: 4px 0;
  }

  .star {
    width: 20px;
    height: 20px;
    color: var(--star-gold);
    transition: transform 0.2s ease;
  }

  .star.filled {
    color: var(--star-gold);
  }

  /* Testimonial Text */
  .testimonial-text {
    font-size: 16px;
    line-height: 1.7;
    color: var(--gray);
    font-style: italic;
    max-width: 500px;
    margin-top: 8px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .testimonial-section {
      padding: 40px 0 80px;
    }

    .testimonial-text {
      font-size: 15px;
    }

    .reviewer-name {
      font-size: 15px;
    }

    .star {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    .testimonial-section {
      padding: 30px 0 60px;
    }

    .testimonial-text {
      font-size: 14px;
    }
  }
</style>
