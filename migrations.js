/**
 * Created by gabriel.acosta on 12/14/18.
 */
const path = require('path')

module.exports = {
  development: {
    database: 'hapi',
    dialect: 'sqlite',
    storage: path.resolve(path.join(__dirname, 'hapi.sqlite'))
  }
}