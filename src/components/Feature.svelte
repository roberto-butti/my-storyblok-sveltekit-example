<script>
    import { storyblokEditable } from "@storyblok/svelte";

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;
</script>

<div use:storyblokEditable={blok} class="card">
    <div class="card-content">
        <div class="content">
            {blok.name}
        </div>
    </div>
</div>
