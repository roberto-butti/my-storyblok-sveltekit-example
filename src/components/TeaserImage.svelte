<svelte:window bind:innerWidth="{screenSize}" />
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
            {welcomemessage}
        </p>
    </div>
</section>

<script>
import { storyblokEditable } from "@storyblok/svelte";

let welcomemessage = "Hello";

function partOfDay() {
    var today = new Date();
    var curHr = today.getHours();
    //curHr=20;
    if (curHr < 12) {
        welcomemessage = "Good Morning";
        return 0;
    } else if (curHr < 18) {
        welcomemessage = "Enjoy your afternoon";
        return 1;
    }
    welcomemessage = "Keep it easy, it is evening";
    return 2;
}
/**
 * @type any
 */
export let blok;
let heroClasses = blok.layout === "constrained" ? "is-medium" : "is-large";

let screenSize = 1024;

let backgroundImage =
    blok.images[partOfDay()].filename + "/m/" + screenSize + "x0";
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
