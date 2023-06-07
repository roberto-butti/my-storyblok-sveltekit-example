import { useStoryblok } from "../../storyblok";

export async function load({ data }) {
    await useStoryblok();

    return {
        serverstory: data.serverstory,
    };
}
