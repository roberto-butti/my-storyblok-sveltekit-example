<div use:storyblokEditable="{blok}" class="card">
    {#if blok.image}
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="{blok.image.filename}" alt="{blok.image.alt}" />
            </figure>
        </div>
    {/if}
    <div class="card-content">
        <div class="content">
            {blok.name}
        </div>
    </div>
</div>

<script>
import { storyblokEditable } from "@storyblok/svelte";

/**
 * @type {any}
 */
export let blok;
</script>
