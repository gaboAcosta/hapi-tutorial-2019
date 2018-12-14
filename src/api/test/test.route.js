/**
 * Created by gabriel.acosta on 12/14/18.
 */

module.exports = {
  name: 'testRoute',
  version: '1.0.0',
  register(server){
    server.route({
      method: 'GET',
      path: '/',
      handler(){
        return 'Hello World!'
      }
    })
  }
}