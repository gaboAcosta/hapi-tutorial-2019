/**
 * Created by gabriel.acosta on 12/14/18.
 */

const Sequelize = require('sequelize')
const path = require('path')
const Glob = require('glob')

module.exports = {
  name: 'sequelizeDecorator',
  version: '1.0.0',
  async register(server){
    const config = {
      dialect: 'sqlite',
      storage: path.resolve(path.join(__dirname, '..', 'hapi.sqlite'))
    }
    const sequelize = new Sequelize('hapi', null, null, config)
    const models = {}

    Glob.sync('../src/api/**/*.model.js', {
      realpath: true,
      cwd: __dirname,
    }).forEach((filePath) => {
      const model = sequelize.import(filePath)
      models[model.name] = model
    })

    server.decorate('server', 'db', { models, sequelize })
  }
}