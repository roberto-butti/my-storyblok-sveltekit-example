<div>
    {#if data.serverstory}
        <StoryblokComponent blok="{data.serverstory.content}" />
    {/if}
</div>

<script>
import { StoryblokComponent } from "@storyblok/svelte";

export let data;
</script>
