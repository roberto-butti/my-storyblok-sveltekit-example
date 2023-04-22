// @ts-nocheck
import { useStoryblokApi } from "@storyblok/svelte";
import { useStoryblok } from "../storyblok"

/** @type {import('./$types').PageLoad} */
export async function load() {
    useStoryblok();

    let storyblokApi = await useStoryblokApi();
    const dataStory = await storyblokApi.get("cdn/stories/home", {
        version: "draft",
    });

    return {
        story: dataStory.data.story,
    };
}
