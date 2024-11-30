Repository contains two folders

# make-component

This makes a webcomponent from the `WebComponent.vue`

To build component to the `dist` folder:

```
cd make-component
npm i
npm run build
```

# test-component

This is a sveltekit application which uses the webcomponent (which has been copied from the above dist folder in `src/lib`).

To run in development mode:

```
cd test-component
npm i
npm run dev
```

# Issue

The web component receives the image a a sting with value `[object File]`.

Prior to Svelte 5.0, the web component recieved the image as a file, and, when getFile is changed to true, emitted the file thought the change event.

The change is likely to result from a change in Svelte as:
- the component built is January when used with Svelte 5 pre-release worked properly
- the issue affects all browsers, so is unlikely to result from browser updates