<div>
    {#if data.serverstory}
        <StoryblokComponent blok="{data.serverstory.content}" />
    {/if}
</div>

<script>
import { onMount } from "svelte";
import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";
import { useStoryblok } from "../../storyblok.js";

export let data;

onMount(async () => {
    await useStoryblok();
    if (data.serverstory) {
        useStoryblokBridge(
            data.serverstory.id,
            (newStory) => (data.serverstory = newStory),
            {
                preventClicks: true,
            }
        );
    }
});
</script>
