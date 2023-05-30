<div use:storyblokEditable="{blok}" class="container">
    {#each blok.body as item}
        <StoryblokComponent blok="{item}" />
    {/each}
</div>

<script>
import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

/**
 * @type any
 */
export let blok;
</script>
