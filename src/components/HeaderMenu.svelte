<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <a
            class="navbar-item"
            href="https://github.com/roberto-butti/my-storyblok-sveltekit-example"
        >
            <img
                src="/logo.png"
                alt="SvelteKit and Storyblok"
                width="112"
                height="28"
            />
        </a>

        <div
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            {#each blok as item}
                <a class="navbar-item" href="{getHref(item.link)}">
                    {item.name}
                </a>
            {/each}

            <div class="navbar-item has-dropdown is-hoverable">
                <!--
        <a class="navbar-link">
          More
        </a>
            -->
                <div class="navbar-dropdown">
                    <!--
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
          -->
                </div>
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <!--
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
          -->
                </div>
            </div>
        </div>
    </div>
</nav>

<script>
import { getHref } from "../storyblok";
/**
 * @type any
 */
export let blok;
</script>
