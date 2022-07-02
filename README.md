# Fahrenheiter

A simple app for recalculating from Kelvin, Celsius or Fahrenheit. ([GitHub](https://github.com/juliuszfedyk/fahrenheiter))

### To run locally:

```
npm i
npm run dev
```

### To build:

```
npm i
npm run build
```

The app will be compiled into `/dist` folder;

### Deployed

You can find deployed app [here](https://strong-fox-b7d532.netlify.app/)

## The Stack:

I chose Svelte for two reasons:

1. It compiles all the code to runable functions and does not include the library. It seemed fitting for an app with very little code in it.
2. I vaguelly remembered enjoing Svelte, when I tried it as it first appeared.

For theming I found [this article](https://dev.to/josef/theming-in-svelte-with-css-variables-53kd) by [Josef Aidt](https://dev.to/josef) and his super simple package [svelte-theme](https://www.npmjs.com/package/svelte-themer)

Colors were taken from [this pattern](https://coolors.co/palette/e63946-f1faee-a8dadc-457b9d-1d3557)

## The good and the bad

- I had to move from Webstorm to VSCode, as Svelte + Pretter + Webstorm did not work.
- I tried avoiding scientific notation by using a formatted text field, but finally decided against it. Still the fields are text type. I would do a nice formatted field accepting M/G/T/P etc.notation had I have more time.
- I really enjoyed this mini project, I haven't use Svelte in years and I forgot about some of it's limitations and it was great fun to work around them.
- It took me under 10 hours, which I think is the beauty of writting small projects using Svelte.
- I worked alone so I decided to simply commit straight to the `main` branch.
- I have a lot of extra fun ideas I could add to it, and maybe I will if I'll have some free time.
- TODO: add a color change based on Kelvin temperature to some elements.
