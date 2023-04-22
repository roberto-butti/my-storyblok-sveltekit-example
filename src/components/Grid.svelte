<script>
    import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

    /**
     * @type any
     */
    export let blok;
</script>

<div use:storyblokEditable={blok} class="columns mt-4">
    {#each blok.columns as item}
        <div class="column">
            <StoryblokComponent blok={item} />
        </div>
    {/each}
</div>
