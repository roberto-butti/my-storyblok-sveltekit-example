# My Storyblok SvelteKit Example

This is an example project for starting to use SvelteKit and Storyblok (Headless CMS).

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

In the `storyblok.js` file, where in this project example I initialize the Stroyblok object, I can access the environment variables via:

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

## Tools/Services used

- [Storyblok SvelteKit Tech Hub](https://www.storyblok.com/tc/sveltekit)
- [SvelteKit](https://kit.svelte.dev/)
- [Bulma CSS](https://bulma.io/documentation/overview/start/)
