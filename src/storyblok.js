import Feature from "./components/Feature.svelte";
import Grid from "./components/Grid.svelte";
import Page from "./components/Page.svelte";
import Teaser from "./components/Teaser.svelte";
import Hero from "./components/Hero.svelte";
import { apiPlugin, storyblokInit } from "@storyblok/svelte";
import { PUBLIC_ACCESS_TOKEN } from '$env/static/public'
import { PUBLIC_REGION } from '$env/static/public'
import TeaserImage from "./components/TeaserImage.svelte";
import PopularArticles from "./components/PopularArticles.svelte";
import Article from "./components/Article.svelte";

export function useStoryblok() {
    storyblokInit({
        accessToken: PUBLIC_ACCESS_TOKEN,
        use: [apiPlugin],
        components: {
            feature: Feature,
            grid: Grid,
            page: Page,
            teaser: Teaser,
            hero: Hero,
            teaser_image: TeaserImage,
            'popular-articles': PopularArticles,
            article: Article
        },
        apiOptions: {
            https: true,
            region: PUBLIC_REGION // "us" if your space is in US region
        },

    });
}
