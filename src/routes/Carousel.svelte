<script>
  import { onMount } from 'svelte';

  let currentIndex = $state(0);

  let blogPosts = $state([]);

  onMount(async () => {
    const interval = setInterval(() => {
      if (currentIndex === 5 || currentIndex === blogPosts.length) {
        currentIndex = -1;
      }
      currentIndex = currentIndex + 1;
    }, 3000);

    try {
      const response = await fetch('/api/posts.json');
      blogPosts = await response.json();
    } catch (error) {
      console.error('Error loading blog posts:', error);
      blogPosts = [];
    }

    return () => clearInterval(interval);
  });
</script>

<div class="carousel">
  {#if blogPosts.length === 0 || currentIndex === 0}
    <div class="hero-content" style="padding: 5rem 0;">
      <h1 style="color: white;">Embrace the Bare Minimum</h1>
      <p class="hero-subtitle">Find peace, purpose, and fulfillment through simplicity</p>
      <div class="hero-buttons">
        <a href="/principles" class="btn" style="border: 1px solid white;">Discover Our Principles</a>
        <a href="/blog" class="btn btn-secondary" style="background: white; color: var(--primary-color)">Read Our Blog</a>
      </div>
    </div>
  {:else}
    <div class="carousel-slide" style="background-image: url('/blog/covers/{blogPosts[currentIndex-1].cover}'); background-size: cover; background-position: center;">
      <div class="carousel-text">
        
      </div>
      <h2 style="color: white;">{blogPosts[currentIndex-1].title}</h2>
      <p>{blogPosts[currentIndex-1].description}</p>
      <a href={`/blog/${blogPosts[currentIndex-1].slug}`} class="btn">Read More</a>
    </div>
  {/if}
</div>

<style>
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  .btn-secondary {
    background-color: transparent;
    border: 2px solid white;
  }
  
  .btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .carousel-slide {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--primary-color);
    color: white;
    padding: 2rem;
    transition: opacity 0.5s ease-in-out;
  }

  .carousel-slide h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .carousel-slide p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .carousel-slide a {
    background-color: white;
    color: var(--primary-color);
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.2s ease;
    border: none;
    cursor: pointer;
  }

  .carousel-slide a:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>
