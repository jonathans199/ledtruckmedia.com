
var path = require('path')
var webpack = require('webpack')
var PrerenderSpaPlugin = require('prerender-spa-plugin') // Here
var HtmlWebpackPlugin = require('html-webpack-plugin') // And here

const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  plugins: [
    ...
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: ['/', '/about', '/some/deep/nested/route'],
    })
  ]
}