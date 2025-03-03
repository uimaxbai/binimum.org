import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';

// import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}

export default {
  extensions: ['.svelte', '.md'],
  
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [
        rehypeSlug, 
        [
          rehypeAutolinkHeadings,
          {
            content: {
              type: 'element',
              tagName: 'span',
              properties: {className: ['icon-link']},
              children: []
            }
          }
        ], 
        remarkToc
      ]
    })
  ],
  
  kit: {
    adapter: adapter()
  }
}