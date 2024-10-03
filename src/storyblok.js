// @ts-nocheck

import { apiPlugin, storyblokInit } from "@storyblok/svelte";
import { PUBLIC_ACCESS_TOKEN } from "$env/static/public";
import { PUBLIC_REGION } from "$env/static/public";

export async function useStoryblok(accessToken = "") {
    accessToken = accessToken === "" ? PUBLIC_ACCESS_TOKEN : accessToken;
    storyblokInit({
        accessToken: accessToken,
        use: [apiPlugin],
        components: {
            feature: (await import(`/src/components/Feature.svelte`))
                .default,
            grid: (await import("/src/components/Grid.svelte")).default,
            page: (await import("/src/components/Page.svelte")).default,
            teaser: (await import("/src/components/Teaser.svelte")).default,
            hero: (await import("/src/components/Hero.svelte")).default,
            teaser_image: (
                await import("/src/components/TeaserImage.svelte")
            ).default,
            "popular-articles": (
                await import("/src/components/PopularArticles.svelte")
            ).default,
            article: (await import("/src/components/Article.svelte"))
                .default,
            button: (await import(`/src/components/Button.svelte`))
                .default,
        },
        apiOptions: {
            https: true,
            cache: {
                type: "memory",
            },
            region: PUBLIC_REGION, // "us" if your space is in US region
        },
    });
}
/**
 * @param {{ linktype: string; url: any; cached_url: string }} linkBlok
 */
export function getHref(linkBlok) {
    if (linkBlok.linktype === "url") {
        return linkBlok.url;
    }
    if (linkBlok.linktype === "story") {
        return linkBlok.story?.full_slug && linkBlok.cached_url;
    }
}

export function getCachedCV() {}
