/**
 * Created by gabriel.acosta on 12/14/18.
 */

const { expect } = require('code')
const { it } = exports.lab = require('lab').script()
const TestService = require('./test.service')

it('should correctly add two numbers', () => {
  const service = new TestService()
  expect(service.sum(1,1)).to.equal(2)
})