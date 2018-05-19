// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
       utf8: false
    },
    "postcss-cssnext": {},
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-px-to-viewport": {
       viewportWidth: 750,
       viewportHeight: 1344,
       unitPrecision: 5,
       viewportUnit: 'vw',
       selectorBlackList: [],
       minpixelValue: 1,
       mediaQuery: false  
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}
