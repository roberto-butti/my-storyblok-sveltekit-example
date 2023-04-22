# My Storyblok SvelteKit Example

This is an example project for starting to use SvelteKit and Storyblok (Headless CMS).

## Highlights
I try to keep track of the notes I collected while I'm building this example project.

#### Enabling HTTPS
With Storyblok to allow the Visual Editor to embed the frontend you are building via iFrame, you have to enable HTTPS.
Because SvelteKit uses by default Vite you can use the basicSsl plugin:

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

### Svelte Preprocess
If you are using extra tools like PostCSS, or Typescript and you want to help Svelte to parse correctly the syntax of another language than HTML, CSS, and plain JS, you should use [Svelte Preprocess](https://github.com/sveltejs/svelte-preprocess).
Because the Storyblok Svelte SDK uses Typescript you should configure the Svelte Preprocess.
You can activate the Svelte Preprocess in the `svelte.config.js`.



## Tools/Services used

- [Storyblok SvelteKit Tech Hub](https://www.storyblok.com/tc/sveltekit)
- [SvelteKit](https://kit.svelte.dev/)
- [Bulma CSS](https://bulma.io/documentation/overview/start/)
