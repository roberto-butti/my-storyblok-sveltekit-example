<img
  src="https://repository-images.githubusercontent.com/631179948/d5d216fe-3f18-45ea-9060-b57e31cea942"
  alt="This is a sample project for getting started with SvelteKit and Storyblok (headless CMS)."
  title="My Storyblok SvelteKit Example"
  style="display: inline-block; margin: 0 auto;">
# My Storyblok SvelteKit Example

This is a sample project for getting started with SvelteKit and Storyblok (headless CMS).

## Highlights
I try to keep track of the notes I collected while I'm building this example project.

### Enabling HTTPS
With Storyblok to allow the Visual Editor to embed the front-end you are building via iFrame, you have to enable HTTPS.
Because SvelteKit uses by default Vite you can use the [vitejs/plugin-basic-ssl](https://github.com/vitejs/vite-plugin-basic-ssl) plugin:

```sh
npm install @vitejs/plugin-basic-ssl
```
and in the `vite.config.js` you have to import the plugin:

```js
import basicSsl from '@vitejs/plugin-basic-ssl'
```

and then, activate the plugin:

```js
export default defineConfig({
	plugins: [sveltekit(), basicSsl()]
});
```

### Installing components
If you are starting from scratch with a new space, you can import some already-created components via the [Storyblok CLI](https://github.com/storyblok/storyblok-cli). You can find the component definition in the `components.json` file in the root directory of this repository.
To import the components, use the `storyblok` command with `push-components` option.
```
storyblok push-components --space YOUR_SPACE_ID components.json
```
Where `YOUR_SPACE_ID` is the identifier for your space target of the import process.

### Svelte Preprocess
If you are using extra tools like PostCSS, or Typescript and you want to help Svelte to parse correctly the syntax of another language than HTML, CSS, and plain JS, you should use [Svelte Preprocess](https://github.com/sveltejs/svelte-preprocess).
Because the Storyblok Svelte SDK uses Typescript you should configure the Svelte Preprocess.
You can activate the Svelte Preprocess in the `svelte.config.js`.

### Managing Access Token
In the Storyblok space, in `Settings->AccessToken` section, you can retrieve the Preview Access Token.
My suggestion is to store the Access token in the `.env` file (you can see an example in the `.env-sample` file) in the `PUBLIC_ACCESS_TOKEN` parameter:

```
PUBLIC_ACCESS_TOKEN=youraccesstoken
```

In the `storyblok.js` file, where in this project example I initialize the Storyblok object, I can access the environment variables via:

```
import { PUBLIC_ACCESS_TOKEN } from '$env/static/public'
```

### Managing region
In the same way (using the environment variables) you can set and control the region. When you create a space in Storyblok you can select a region (EU or US).
For example in the `.env` you can set the parameter:
```
PUBLIC_REGION=eu
```
In the `storyblok.js` file you can use the parameter when you will create the instance of the Storyblok object:
```js
import { PUBLIC_REGION } from '$env/static/public'
// ...
    apiOptions: {
        https: true,
        region: PUBLIC_REGION // "us" if your space is in US region
    },
```

### Using Svelte component variables in CSS

You can use the var() function in CSS to use your Svelte variables in `style` section.
For example in the style section you can have:
```css
background-image: var(--background-image);
```
In the HTML template you can set the CSS variable (see the style attribute):

```html
<section
    class={"hero is-link " + `${heroClasses}`}
    style="--background-image: url({backgroundImage});"
    use:storyblokEditable={blok}
>
```
And in the script section, you can set the `backgroundImage` variable:
```js
let backgroundImage = blok.background_image.filename;
```
For a complete example take a look at the `Hero.svelte` component.

### Preloading Page
If you are using a link via `a href` in your Svelte component you can control the behavior for preloading or avoiding preload of the linked page.
The `data-sveltekit-preload-data` attribute in the parent tag of the `a` tag, you can activate the preloading (the linked page is preloaded when you go hover with your mouse, so when you will click the link the loading will be faster) or avoid preloading with `data-sveltekit-preload-data="off"`.
If you want to learn more you can jump on the official documentation of [Svelte, Link options](https://kit.svelte.dev/docs/link-options#data-sveltekit-preload-data)
In the `ArticleCard.svelte` component, I used `data-sveltekit-preload-data` for preloading the article page.

```html
<div
    class="card"
    use:storyblokEditable={article}
    data-sveltekit-preload-data >
```

### Formatting `js` and `svelte` files
For consistency, I'm using prettier and prettier-plugin-svelte

For installing prettier and the svelte plugin:
```sh
npm i --save-dev prettier-plugin-svelte prettier
```
Then I created a `.prettierrc` file with the directives for formatting `js` and `svelte` files.
You can find the `.prettierrc` in the root of the current repository.
For executing the prettier command you can launch:

```sh
npx prettier --write './src/**/*.{svelte,js}'
```

### Resolving relation
For resolving the relation (retrieving content from related stories) in the home page with the `popular-articles` component, for the `articles` field, you have to set the resolve relations parameter. You have to set up the resolve relations in two places: when you retrieve the content via API and when you set up the Storyblok bridge.
If you are not resolving the relation, the `articles` field in the `popular-articles` component will be just an identifier (the story uuid), instead, if you resolve correctly the relation, the `articles` field will include the data from the related articles (the article JSON).
In the `+page.js` file, you have to set up the `resolve_relations` option in `get()` method:

```javascript
    let storyblokApi = await useStoryblokApi();
    const resolveRelations = ["popular-articles.articles"];
    const dataStory = await storyblokApi.get("cdn/stories/home", {
        version: "draft",
        resolve_relations: resolveRelations,
    });
```
In the `+page.svelte` file you have to set up the Storyblok bridge with the `resolveRelations` option:

```javascript
onMount(() => {
    if (data.story) {
        useStoryblokBridge(
            data.story.id,
            (newStory) => (data.story = newStory),
            {
                resolveRelations: ["popular-articles.articles"],
            }
        );
    }
});
```

### Rendering the RichText field
The RichText widget relies on the [TipTap](https://tiptap.dev/) editor. The TipTap editor is based on a Schema that defines how your content is structured and is stored in Storyblok.
The content is saved in JSON format, so if you want to render it into HTML you have to transform the JSON into HTML.
The Javascript Stroyblok SDK, provides the `renderRichText` function for example:
```javascript
test('code_block to generate a pre and code tag', () => {
  const doc = {
    type: 'doc',
      content: [ {
        type: 'code_block',
        content: [ {
          text: 'code',
          type: 'text',
        } ],
      }, ],
  }
  expect(resolver.render(doc)).toBe('<pre><code>code</code></pre>')
})
```
In this sample project, there is a content-type `article` with a field named `richtext_field`. The type of the `richtext_field` is `Richtext`.
If you take a look at `src/routes/articles/[slug]/+page.svelte` file you see that `rendderRichText` is used.
```
$: articleHTML = renderRichText(data.story.content.richtext_field);
```
Typically in the Svelte component file, in the template part for using `articleHTML` variables you have to use the `@html` directive (to avoid the Svelte parse applying some escaping and sanitization to the HTML):
```
{@html articleHTML}
```

### Rendering Components embedded into the RichText field
The RichText field is very flexible because you can apply inline style and paragraph style. You can also embed the Storyblok component into the RichText field. For example, if you have a Hero component in the Block Library, you can include the component in the RichText editor.
If you need to render correctly the components included in a RichText field, you can loop across the sections of the RichText field, if the section is a standard one, you can render it in the usual way with the `renderRichText` function.
If the section is a component (like `Hero`, `Feature`, `Banner` etc) you can render it as a `StoryblokComponent` using the Svelte component shipped by Storyblok SDK. Under the hood, `StoryblokComponent` uses the `<svelte:component />`.


For looping the sections in the RichText field:
```
{#each data.story.content.richtext_field.content as node, i}
    {#if node.type === "blok"}
        {#each node.attrs.body as bodyItem, idxBody}
            <StoryblokComponent
                blok="{bodyItem}"
            />
        {/each}
    {:else}
        {@html renderNode(node)}
    {/if}
{/each}
```
The render function is:
```
function renderNode(node) {
    return renderRichText({
        type: "doc",
        content: [node],
    });
}
```
If you are curious you can take a look at `src/routes/articles/[slug]/+page.svelte` file.

> The solution above it works fine, but honestly I'm still testing it with some edge cases. So feel free to provide any feedback on the solution above. Once I will complete the tests I will open a PR to Storyblok Svelte SDK for automatically rendering the components in the RichText field.


## Tools/Services used

- [Storyblok SvelteKit Tech Hub](https://www.storyblok.com/tc/sveltekit)
- [SvelteKit](https://kit.svelte.dev/)
- [Bulma CSS](https://bulma.io/documentation/overview/start/)
