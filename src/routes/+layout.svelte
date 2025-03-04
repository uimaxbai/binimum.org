<script lang="ts">
  import '../app.css';

  import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
  let isNavOpen = false;

  function toggleNav() {
    isNavOpen = !isNavOpen;
  }
</script>

<header>
  <div class="container">
    <nav>
      <div class="logo" style="width: 100%; height: 100%;">
        <a href="/" aria-label="Binimum" style="height: 100%; background-image: url('/icons/binimum.svg'); background-repeat: no-repeat; background-size: contain; width: 100%; display: block; color: transparent;">a</a>
      </div>
      <ul class="nav-links"  style="list-style-type: none!important; margin: 0;" class:is-open={isNavOpen}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/principles">Principles</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
      <button class="hamburger" on:click={toggleNav} aria-label="Toggle navigation">
        <span class="icon-menu"></span>
      </button>
    </nav>
  </div>
</header>

<main data-theme="light">
  {@render children?.()}
</main>

<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <a href="/" aria-label="Binimum" style="height: 30%; margin-bottom: 1em; background-image: url('/icons/binimum.svg'); background-repeat: no-repeat; background-size: contain; width: 100%; display: block; color: transparent;">a</a>
        <p>Embracing the philosophy of bare minimum for a more meaningful life.</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul style="list-style-type: none!important; margin: 0;">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/principles">Principles</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; {new Date().getFullYear()} Binimum. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  :global(h1, h2, h3, h4, h5, h6) {
    max-inline-size: none!important;
  }
  header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
  
  .logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-color);
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  
  .nav-links a {
    font-weight: 500;
  }
  
  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .hamburger-icon {
    width: 25px;
    height: 2px;
    background-color: var(--accent-color);
    display: block;
    position: relative;
  }
  
  .hamburger-icon::before,
  .hamburger-icon::after {
    content: '';
    width: 25px;
    height: 2px;
    background-color: var(--accent-color);
    display: block;
    position: absolute;
    left: 0;
  }
  
  .hamburger-icon::before {
    top: -8px;
  }
  
  .hamburger-icon::after {
    top: 8px;
  }
  
  .nav-links.is-open {
    display: block;
  }
  
  main {
    min-height: calc(100vh - 180px);
  }
  
  footer {
    background-color: var(--accent-color);
    color: white;
    padding: 3rem 0 1.5rem;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .footer-section h3 {
    color: white;
    margin-bottom: 1rem;
  }
  
  .footer-section ul {
    list-style: none;
  }
  
  .footer-section li {
    margin-bottom: 0.5rem;
  }
  
  .footer-section a {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .footer-section a:hover {
    color: white;
  }
  
  .copyright {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      gap: 1rem;
    }
    
    .hamburger {
      display: block;
    }
  }
</style>
