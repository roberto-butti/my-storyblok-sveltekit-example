<div>
    {#if data.serverstory}
        <StoryblokComponent blok="{data.serverstory.content}" />
    {/if}
</div>

<script>
import { onMount } from "svelte";
import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";

export let data;

onMount(() => {
    if (data.serverstory) {
        useStoryblokBridge(
            data.serverstory.id,
            (newStory) => (data.serverstory = newStory),
            {
                resolveRelations: ["popular-articles.articles"],
            }
        );
    }
});
</script>
