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
        async handler(req){
          const { db } = server
          const model = db.models.test
          const { name } = req.payload
          const testObject = await model.create({ name })

          return testObject.get({ plain: true })
        },
        response: {
          modify: true,
          options: {
            stripUnknown: true,
          },
          schema: Joi.object().keys({
            id: Joi.number(),
            name: Joi.string()
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