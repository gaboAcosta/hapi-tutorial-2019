/**
 * Created by gabriel.acosta on 12/14/18.
 */
const Pack = require('../package.json')
const HapiSwagger = require('hapi-swagger')

const options = {
  info: {
    title: 'My API Documentation',
    version: Pack.version
  }
}

module.exports = {
  plugin: HapiSwagger,
  options: options
}