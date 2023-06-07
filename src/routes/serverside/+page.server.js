import { useStoryblokApi } from "@storyblok/svelte";
import { useStoryblok } from "../../storyblok";

export async function load() {
    await useStoryblok();
    let storyblokApi = await useStoryblokApi();
    const resolveRelations = ["popular-articles.articles"];
    const dataStory = await storyblokApi.get("cdn/stories/serverside", {
        version: "draft",
        resolve_relations: resolveRelations,
    });

    return {
        serverstory: dataStory.data.story,
    };
}
