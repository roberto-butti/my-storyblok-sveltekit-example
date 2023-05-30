// @ts-nocheck
import { useStoryblokApi } from "@storyblok/svelte";
import { useStoryblok } from "../storyblok";

/** @type {import('./$types').PageLoad} */
export async function load() {
    useStoryblok();

    let storyblokApi = await useStoryblokApi();
    const resolveRelations = ["popular-articles.articles"];

    const siteConfig = await storyblokApi.get("cdn/stories/site-config", {
        version: "draft",
        resolve_links: "url",
    });

    return storyblokApi
        .get("cdn/stories/home", {
            version: "draft",
            cv: "",
            resolve_relations: resolveRelations,
        })
        .then((dataStory) => {
            return {
                story: dataStory.data.story,
                siteConfig: siteConfig.data.story,
                error: false,
            };
        })
        .catch((error) => {
            return {
                story: {},
                siteConfig: siteConfig.data.story,
                error: error,
            };
        });
}
