/**
 * Created by gabriel.acosta on 12/14/18.
 */
const Hapi = require('hapi')
const routes = require('./setup/routes')
const Inert = require('inert')
const Vision = require('vision')
const hapiSwagger = require('./setup/swagger')
const sequelizeSetup = require('./setup/sequelize')

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  debug: { log: ['*'], request: ['*'] }
})

server.register([
  Inert,
  Vision,
  hapiSwagger,
  sequelizeSetup,
  ...routes,
])
.then(() => server.start() )
.then(() => console.log(`server running at: ${server.info.uri}`))