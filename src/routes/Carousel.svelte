<script>
  import { onMount } from 'svelte';

  export let blogPosts = [];

  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % (blogPosts.length + 1);
    }, 5000);

    return () => clearInterval(interval);
  });

  async function fetchBlogPosts() {
    try {
      const response = await fetch('/api/posts.json');
      blogPosts = await response.json();
    } catch (error) {
      console.error('Error loading blog posts:', error);
      blogPosts = [];
    }
  }

  onMount(fetchBlogPosts);
</script>

<div class="carousel">
  {#if currentIndex === 0}
    <slot></slot>
  {:else}
    <div class="carousel-slide">
      <h2>{blogPosts[currentIndex - 1].title}</h2>
      <p>{blogPosts[currentIndex - 1].description}</p>
      <a href={`/blog/${blogPosts[currentIndex - 1].slug}`} class="btn">Read More</a>
    </div>
  {/if}
</div>

<style>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .carousel-slide {
    position: absolute;
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
