<div>
    {#if data.error}
        ERROR {data.error.message}
    {/if}
    <HeaderMenu blok="{data.siteConfig.content.header_menu}" />
    {#if data.story && data.story.content}
        <StoryblokComponent blok="{data.story.content}" />
    {/if}
</div>

<script lang="ts">
import { onMount } from "svelte";
import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";
import HeaderMenu from "../components/HeaderMenu.svelte";

export let data;
onMount(() => {
    if (data.story) {
        useStoryblokBridge(
            data.story.id,
            (newStory) => (data.story = newStory),
            {
                resolveRelations: ["popular-articles.articles"],
                preventClicks: true,
            }
        );
    }
});
</script>
