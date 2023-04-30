<svelte:head>
    <title>{data.story.name}</title>
</svelte:head>
{#key data}
    <div>
        {#if data.story}
            <section class="hero is-info is-medium is-bold">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">{data.story.content.title}</h1>
                    </div>
                </div>
            </section>
            <div class="container">
                <!-- START ARTICLE FEED -->
                <section class="articles">
                    <div class="column is-8 is-offset-2">
                        <!-- START ARTICLE -->
                        <div class="card article">
                            <div class="card-content">
                                <div class="media">
                                    <div
                                        class="media-content has-text-centered"
                                    >
                                        <p class="title article-title">
                                            {data.story.content.subtitle}
                                        </p>
                                        <div class="tags has-addons level-item">
                                            <span class="tag is-rounded"
                                                >{data.story.created_at}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="content article-body">
                                    {#each data.story.content.content.content as node, i}
                                        {#if node.type === "blok"}
                                            {#each node.attrs.body as bodyItem, idxBody}
                                                <StoryblokComponent
                                                    blok="{bodyItem}"
                                                />
                                            {/each}
                                        {:else}
                                            {@html renderNode(node)}
                                        {/if}
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- END ARTICLE -->
        {/if}
    </div>
{/key}

<script>
import { onMount } from "svelte";
import { renderRichText } from "@storyblok/svelte";
import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";

export let data;

/**
 * @param {{ type: string; }} node
 */
function renderNode(node) {
    return renderRichText({
        type: "doc",
        content: [node],
    });
}
$: articleHTML = renderRichText(data.story.content.content);

onMount(() => {
    if (data.story) {
        const resolveRelations = ["popular-articles.articles"];
        useStoryblokBridge(
            data.story.id,
            (newStory) => (data.story = newStory),
            {
                resolveRelations: resolveRelations,
            }
        );
    }
});
</script>
