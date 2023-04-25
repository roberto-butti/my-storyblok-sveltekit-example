<section class="section">
    <h2 class="subtitle">{blok.headline}</h2>
    <div class="columns">
        {#each blok.articles as article}
            <div class="column">
                <ArticleCard
                    article="{article.content}"
                    slug="{article.full_slug}"
                />
            </div>
        {/each}
    </div>
</section>

<script>
import ArticleCard from "./ArticleCard.svelte";
/**
 * @type {any}
 */
export let blok;
</script>
