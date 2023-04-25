{#key blok}
    <div use:storyblokEditable="{blok}" class="container">
        {#each blok.body as item}
            <StoryblokComponent blok="{item}" />
        {/each}
    </div>
{/key}

<script>
import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

/**
 * @type any
 */
export let blok;
</script>
