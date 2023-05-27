<div  class="columns mt-4">
    {#each blok.columns as item (item._uid)}

        <div class="column" animate:flip={options}>
            <StoryblokComponent blok="{item}" />
        </div>
    {/each}
</div>

<script>
import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";
import { flip } from 'svelte/animate';
import {bounceInOut} from 'svelte/easing';
const options= {}
/**
 * @type any
 */
export let blok;
</script>
