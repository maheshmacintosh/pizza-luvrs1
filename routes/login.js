const passport = require('passport')

module.exports = (app, handlers) =>
  app.get(
    '/login'
    , passport.authenticate('local')
    , handlers.login)
