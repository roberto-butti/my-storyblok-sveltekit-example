<a href="{href}" class="{classes}">
    <slot />
</a>

<script>
import { getHref } from "../storyblok";

/**
 * @type {any}
 */
export let linkBlok;
/**
 * String, list of classes space separated,
 * for example "button is-link"
 * @type {string}
 */
export let classes;

$: href = getHref(linkBlok);
</script>
