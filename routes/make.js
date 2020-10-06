module.exports = (app, handlers) =>
  app.route('/make/:target')
    .get(handlers.make)
    // TODO: add auth
// ({
//   method: 'GET',
//   path: '/make/{target}',
//   handler: handlers.make
// })
