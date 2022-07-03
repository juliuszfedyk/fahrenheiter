# Fahrenheiter

A simple app for recalculating from Kelvin, Celsius or Fahrenheit. ([GitHub](https://github.com/juliuszfedyk/fahrenheiter))

Developed with node `18.4.0`, should work with LTS

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

(This info would not go into an official doc, maybe into PR description ;-))

- I had to move from Webstorm to VSCode, as Svelte + Pretter + Webstorm did not work.
- I really enjoyed this mini project, I haven't use Svelte in years and I forgot about some of it's limitations and it was great fun to work around them.
- It took me a bit over 10 hours, which I think is the beauty of writting small projects using Svelte.
- I worked alone so I decided to simply commit straight to the `main` branch.
- I added the Kelvin scale
- As an additional feature I implemented some examples of metling / boiling points.
- No tests - as the app is rather simple, and I wouldn't have enought time to learn svelte unit test scripting, but that would be next on my list if I would spend on it a whole week.
- I tried avoiding scientific notation by using a formatted text field, but finally decided against it. Still the fields are text type as I am thinking a nice descriptive format with K/G/M/P/T notation might be nicer for average user and would be on my todo list.
