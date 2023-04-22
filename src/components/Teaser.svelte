<script>
    import { storyblokEditable } from "@storyblok/svelte";

    /**
     * @type any
     */
    export let blok;
</script>

<section class="hero is-primary" use:storyblokEditable={blok}>
    <div class="hero-body">
        <p class="title">
            {blok.headline}
        </p>
        <!--p class="subtitle">
      {blok.subheadline}
    </-->
    </div>
</section>
