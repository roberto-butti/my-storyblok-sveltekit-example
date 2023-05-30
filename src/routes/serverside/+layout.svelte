<main class="prose prose-xl">
    <HeaderMenu blok="{data.siteConfig.content.header_menu}" />
    <slot />
</main>

<script>
import HeaderMenu from "../../components/HeaderMenu.svelte";
export let data;
</script>
