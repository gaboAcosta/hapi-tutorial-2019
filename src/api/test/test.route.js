/**
 * Created by gabriel.acosta on 12/14/18.
 */

const Joi = require('joi')

module.exports = {
  name: 'testRoute',
  version: '1.0.0',
  register(server){
    server.route({
      method: 'POST',
      path: '/',
      config: {
        tags: ['api'],
        handler(req){
          const { name } = req.payload
          return {
            message: `Hello ${name}`,
            filtered: 'Some value!'
          }
        },
        response: {
          modify: true,
          options: {
            stripUnknown: true,
          },
          schema: Joi.object().keys({
            message: Joi.string()
          })
        },
        validate: {
          payload: Joi.object().keys({
            name: Joi.string().required()
          })
        }
      }
    })
  }
}