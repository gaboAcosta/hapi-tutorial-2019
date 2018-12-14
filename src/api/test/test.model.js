/**
 * Created by gabriel.acosta on 12/14/18.
 */
module.exports = (sequelize, DataTypes) => {
  const name = 'test'

  const schema = {
    name: DataTypes.STRING,
  }

  return sequelize.define(name, schema, {})

}