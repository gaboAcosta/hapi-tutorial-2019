/**
 * Created by gabriel.acosta on 12/14/18.
 */
const glob = require('glob')
const plugins = []

glob.sync('../src/api/**/*route.js', {
  realpath: true,
  cwd: __dirname,
}).forEach((filePath) => {
  plugins.push(require(filePath))
})

module.exports = plugins