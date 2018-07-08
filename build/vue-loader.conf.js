'use strict'
const utils = require('./utils')
const config = require('../config')
const _obj = {
  'production': config.build.productionSourceMap,
  'development': config.dev.productionSourceMap,
  'plugin': config.plugin.productionSourceMap    
}
const isProduction = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'plugin'
const sourceMapEnabled = _obj[process.env.NODE_ENV]

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
