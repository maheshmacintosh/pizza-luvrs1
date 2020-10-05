module.exports = (app, handlers) =>
  app.route('/login')
    .get(handlers.login)
    // TODO: add auth
