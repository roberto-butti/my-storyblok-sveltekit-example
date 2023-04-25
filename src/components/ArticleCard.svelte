<div class="card" use:storyblokEditable="{article}" data-sveltekit-preload-data>
    {#if article.image.filename}
        <div class="card-image">
            <figure class="image is-4by3">
                <img
                    src="{article.image.filename}/m/600x0"
                    alt="{article.image.alt}"
                />
            </figure>
        </div>
    {/if}

    <div class="card-content">
        <p class="title">
            {article.title}
        </p>
        <p class="subtitle">
            {article.teaser}
        </p>
    </div>
    <footer class="card-footer">
        <p class="card-footer-item">
            <span>
                Read the <em>'<a href="/{slug}">{article.title}</a>'</em> article
            </span>
        </p>
    </footer>
</div>

<script>
import { storyblokEditable } from "@storyblok/svelte";
/**
 * @type {any}
 */
export let article;
/**
 * @type {any}
 */
export let slug;
</script>
