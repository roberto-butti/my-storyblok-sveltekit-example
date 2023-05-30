<div use:storyblokEditable="{blok}" class="container">
    {#each blok.body as item}
        <div use:storyblokEditable="{item}">
            <StoryblokComponent blok="{item}" />
        </div>
    {/each}
</div>

<script>
import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

/**
 * @type any
 */
export let blok;
</script>
