<svelte:head>
    <title>{data.story.name}</title>
</svelte:head>

<div>
    <table
        class="table"
        use:storyblokEditable="{data.story.content.header_menu}"
    >
        <thead>
            <tr>
                <th><abbr title="Title">Title</abbr></th>
                <th>URL</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th><abbr title="Title">Title</abbr></th>
                <th>URL</th>
            </tr>
        </tfoot>
        <tbody>
            {#each data.story.content.header_menu as item}
                <tr>
                    <th>{item.name}</th>
                    <td>{getHref(item.link)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<script>
import { onMount } from "svelte";
import { storyblokEditable } from "@storyblok/svelte";
import { useStoryblokBridge } from "@storyblok/svelte";
import { getHref } from "../../storyblok";

export let data;

onMount(() => {
    if (data.story) {
        useStoryblokBridge(
            data.story.id,
            (newStory) => (data.story = newStory),
            {
                preventClicks: true,
            }
        );
    }
});
</script>
