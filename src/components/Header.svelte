<script>
	/**
     * @type {any}
     */
	 export let header;

</script>

<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      Storyblok SvelteKit
    </a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
        {#if header}
            {#each header as blok}
                    <a href=/{blok.link.story.slug}> {blok.name}</a>
            {/each}
        {/if}
    </div>

  </div>
</nav>
