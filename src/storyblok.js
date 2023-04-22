import Feature from "./components/Feature.svelte";
import Grid from "./components/Grid.svelte";
import Page from "./components/Page.svelte";
import Teaser from "./components/Teaser.svelte";
import { apiPlugin, storyblokInit } from "@storyblok/svelte";
import { PUBLIC_ACCESS_TOKEN } from '$env/static/public'


export function useStoryblok() {
    storyblokInit({
        accessToken: PUBLIC_ACCESS_TOKEN,
        use: [apiPlugin],
        components: {
            feature: Feature,
            grid: Grid,
            page: Page,
            teaser: Teaser,
        },
        apiOptions: {
            https: true,
        },

    });
}
