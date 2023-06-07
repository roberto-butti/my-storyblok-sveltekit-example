import { useStoryblokApi } from "@storyblok/svelte";
import { useStoryblok } from "../../storyblok";
// export const csr = false;

export async function load() {
    await useStoryblok();
    let storyblokApi = await useStoryblokApi();
    const siteConfig = await storyblokApi.get("cdn/stories/site-config", {
        version: "draft",
    });
    return {
        siteConfig: siteConfig.data.story,
    };
}
