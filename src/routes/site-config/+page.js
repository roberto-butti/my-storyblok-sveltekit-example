// @ts-nocheck
import { useStoryblokApi } from "@storyblok/svelte";
import { useStoryblok } from "../../storyblok";

/** @type {import('../$types').PageLoad} */
export async function load() {
    await useStoryblok();

    let storyblokApi = await useStoryblokApi();
    const dataStory = await storyblokApi.get("cdn/stories/site-config", {
        version: "draft",
        resolve_links: "1",
    });

    return {
        story: dataStory.data.story,
    };
}
