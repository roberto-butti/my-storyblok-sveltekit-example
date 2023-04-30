// @ts-nocheck
import { useStoryblokApi } from "@storyblok/svelte";
import { useStoryblok } from "../../../storyblok";

/** @type {import('../$types').PageLoad} */
export async function load({ params }) {
    useStoryblok();

    let storyblokApi = await useStoryblokApi();
    let slug = params.slug;
    //const resolveRelations = ['popular-articles.articles']
    const dataStory = await storyblokApi.get("cdn/stories/articles/" + slug, {
        version: "draft",
        //resolve_relations: resolveRelations
    });

    return {
        story: dataStory.data.story,
    };
}
