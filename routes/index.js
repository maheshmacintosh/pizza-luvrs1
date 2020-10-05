const handlers = require('../handlers')

const routes = [
  require('./login'),
  require('./login.post'),
  require('./logout'),
  require('./main'),
  require('./make'),
  require('./pizza'),
  require('./pizza.post'),
  require('./register'),
  require('./toppings'),
  require('./user'),
  require('./user.post')
]

module.exports.register = app => {
  for (const route of routes) {
    route(app, handlers)
  }
}
