// @ts-nocheck
import Feature from "$lib/../components/Feature.svelte";
import Grid from "$lib/../components/Grid.svelte";
import Page from "$lib/../components/Page.svelte";
import Teaser from "$lib/../components/Teaser.svelte";
import Hero from "$lib/../components/Hero.svelte";
import { apiPlugin, storyblokInit } from "@storyblok/svelte";
import { PUBLIC_ACCESS_TOKEN } from "$env/static/public";
import { PUBLIC_REGION } from "$env/static/public";
import TeaserImage from "$lib/../components/TeaserImage.svelte";
import PopularArticles from "$lib/../components/PopularArticles.svelte";
import Article from "$lib/../components/Article.svelte";
import HeaderMenu from "$lib/../components/HeaderMenu.svelte";

export function useStoryblok(accessToken = "") {
    accessToken = accessToken === "" ? PUBLIC_ACCESS_TOKEN : accessToken;
    storyblokInit({
        accessToken: accessToken,
        use: [apiPlugin],
        components: {
            feature: Feature,
            grid: Grid,
            page: Page,
            teaser: Teaser,
            hero: Hero,
            teaser_image: TeaserImage,
            "popular-articles": PopularArticles,
            article: Article,
            header_menu: HeaderMenu,
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
