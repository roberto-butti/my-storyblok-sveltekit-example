<section
    class="{'hero is-link ' + `${heroClasses}`}"
    style="--background-image: url({backgroundImage});"
    use:storyblokEditable="{blok}"
>
    <div class="hero-body">
        <p class="title">
            {blok.headline}
        </p>
        <p class="subtitle">
            {blok.subheadline}
        </p>
    </div>
</section>

<script>
import { storyblokEditable } from "@storyblok/svelte";
/**
 * @type any
 */
export let blok;
let heroClasses = blok.layout === "constrained" ? "is-medium" : "is-large";
let backgroundImage = blok.background_image.filename;
</script>

<style>
.hero {
    background-image: var(--background-image);
    background: var(--background-image) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: white;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16),
        0 3px 6px rgba(0, 0, 0, 0.23);
    font-family: "Poppins", sans-serif;
}
</style>
