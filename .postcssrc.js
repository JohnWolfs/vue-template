// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": { utf8: false },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      unitPrecision: 3,
      viewportUnit: 'vmin',
      // selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units": {
      filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1
    },
    "postcss-retina": {},
    "cssnano": {
      autoprefixer: false,
      "postcss-zindex": false,
      "reduceIdents": false
    }
  }
}
