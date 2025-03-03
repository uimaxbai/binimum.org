<script>
  import { onMount } from 'svelte';
  
  let posts = $state([]);
  
  onMount(async () => {
    try {
      const response = await fetch('/api/posts.json');
      posts = await response.json();
    } catch (error) {
      console.error('Error loading blog posts:', error);
      posts = [];
    }
  });
</script>

<svelte:head>
  <title>Binimum Blog | The Philosophy of Bare Minimum</title>
</svelte:head>

<section class="page-header">
  <div class="container">
    <h1>Binimum Blog</h1>
    <p>Insights and practical guidance for living the Binimum way</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="blog-content">
      <div class="blog-posts">
        {#each posts as post}
          <article class="blog-post">
            <img class="cover" src="/blog/covers/{post.cover}" alt="{post.alt}">
            <div class="gradient"></div>
            <div class="blog-inside">
              <h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
              <div class="post-meta">
                <span class="post-date">{new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                <span class="post-author">by {post.author}</span>
              </div>
              <p class="post-excerpt">{post.description}</p>
              <a href={`/blog/${post.slug}`} class="read-more">Read more →</a>
            </div>
          </article>
        {/each}
        
      </div>
      
      
      <aside class="blog-sidebar">
        <!--
        <div class="sidebar-section">
          <h3>Categories</h3>
          <ul class="category-list">
            <li><a href="#">Getting Started</a></li>
            <li><a href="#">Home & Living</a></li>
            <li><a href="#">Digital Life</a></li>
            <li><a href="#">Mindfulness</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
        -->
        
        <!--
         <div class="sidebar-section">
          <h3>Popular Posts</h3>
          <ul class="popular-posts">
            <li><a href="#">5 Steps to Declutter Your Mind</a></li>
            <li><a href="#">The One-In, Two-Out Rule</a></li>
            <li><a href="#">Minimalist Wardrobe Essentials</a></li>
          </ul>
        </div>
        -->
      </aside>
    </div>
  </div>
</section>

<style>
  .cover {
    border-radius: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .blog-inside {
    z-index: 2;
    position: relative;
    padding: 2rem;
    background: white;
    margin-top: 20em;
  }
  .gradient {
    width: 100%;
    height: 5em;
    position: absolute;
    left: 0;
    top: 15em;
    background: rgb(0,0,0);
    background: -webkit-linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%);
    background: -moz-linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#ffffff",GradientType=2); 
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%);
  }
  .post-excerpt {
    margin: 0;
  }
  .page-header {
    background-color: var(--primary-color);
    color: white;
    padding: 3rem 0;
    text-align: center;
  }
  
  .page-header h1 {
    color: white;
    margin-bottom: 0.5rem;
  }
  
  .page-header p {
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .blog-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
  
  .blog-post {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    overflow: hidden;
    position: relative;
  }
  
  .blog-post h2 {
    margin-top: 0;
  }
  
  .blog-post h2 a {
    color: var(--accent-color);
  }
  
  .post-meta {
    font-size: 0.9rem;
    color: var(--light-text);
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
  }
  
  .read-more {
    display: inline-block;
    font-weight: 500;
    margin-top: 1rem;
  }
  
  .blog-sidebar {
    align-self: start;
    position: sticky;
    top: 2rem;
  }
  
  .sidebar-section {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .sidebar-section h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .category-list, .popular-posts {
    list-style: none;
  }
  
  .category-list li, .popular-posts li {
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .blog-content {
      grid-template-columns: 1fr;
    }
    
    .blog-sidebar {
      position: static;
    }
  }
</style>