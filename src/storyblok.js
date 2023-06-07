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
            feature: (await import("$lib/../components/Feature.svelte"))
                .default,
            grid: (await import("$lib/../components/Grid.svelte")).default,
            page: (await import("$lib/../components/Page.svelte")).default,
            teaser: (await import("$lib/../components/Teaser.svelte")).default,
            hero: (await import("$lib/../components/Hero.svelte")).default,
            teaser_image: (
                await import("$lib/../components/TeaserImage.svelte")
            ).default,
            "popular-articles": (
                await import("$lib/../components/PopularArticles.svelte")
            ).default,
            article: (await import("$lib/../components/Article.svelte"))
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
