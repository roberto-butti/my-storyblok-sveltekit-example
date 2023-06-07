<main class="prose prose-xl">
    <!--HeaderMenu blok="{data.siteConfig.content.header_menu}" /-->
    <slot />
</main>
<svelte:head>
    <title>{data.siteConfig.content.title} ( {data.siteConfig.id})</title>
    <meta name="robots" content="noindex nofollow" />
</svelte:head>

<script>
export let data;
</script>
