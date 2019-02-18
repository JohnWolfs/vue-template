'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return [MiniCssExtractPlugin.loader].concat(loaders)
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

exports.initHtmlWebpackPlugin = (type, entrys, webpackConfig) => {
  if(type === 'dev') {
    for(var i = 0; i < entrys.length; i++) {
      var plugin = new HtmlWebpackPlugin({
          filename: entrys[i] +'.html',
          template: './src/pages/' + entrys[i] + '/index.html',
          chunks: [entrys[i]],
          inject: true,
          hash: true,
          assetsSubDirectory: 'static',
          assetsPublicPath: '/'
        })
        webpackConfig.plugins.push(plugin)
    }
  }
  else if(type === 'prod') {
    for(var i = 0; i < entrys.length; i++) {
      var plugin = new HtmlWebpackPlugin({
          filename: entrys[i] +'.html',
          template: './src/pages/' + entrys[i] + '/index.html',
          inject: true,
          hash: true,
          chunks: ['vendor', 'manifest', entrys[i]],
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
          },
          chunksSortMode: 'dependency',
          assetsSubDirectory: config.build.assetsSubDirectory,
          assetsPublicPath: config.build.assetsPublicPath
        })
        webpackConfig.plugins.push(plugin)
    }
  }
}

exports.generateWebpackEntrys = (entrys) => {
  var res = {}
  for(var i = 0; i < entrys.length; i++) {
    res[entrys[i]] = './src/pages/' + entrys[i] + '/main.js'
  }

  return res
}
