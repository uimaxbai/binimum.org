<script lang="ts">
	// import { formatDate } from '$lib/utils'
	// import { Link } from 'lucide-svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>{data.meta.author}<span style="color: lightgray; margin: 0 0.3em;">|</span><i>{new Date(data.meta.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</i></p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>

<style lang="scss">
	:global(*[id] > a[aria-hidden="true"] > .icon-link) {
		display: none;
	}
	:global(*[id]:hover > a[aria-hidden="true"] > .icon-link) {
		display: initial;
	}
	:global(.icon-link) {
		margin-right: 0.3em;
	}
	:global(ul) {
		list-style: initial!important;
		margin-left: 2em;
		margin-bottom: 1em;
	}
	:global(strong) {
		font-weight: 700;
	}
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		padding: 1em;

		h1 {
			text-transform: capitalize;
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		.tags {
			display: flex;
			gap: var(--size-2);
			// margin-top: var(--size-5);
			margin-bottom: var(--size-3);

			> * {
				padding: var(--size-1) var(--size-2);
				border-radius: var(--radius-round);
			}
		}
		:global(table) {
			margin-bottom: 1em;
		}
		:global(blockquote) {
			border-left: 4px solid lightgray;
			color: #aaa;
			border-radius: 5px 0 0 5px;
			margin-bottom: 1em;
		}
		:global(blockquote :last-child) {
			margin: 0;
		}
	}
</style>
