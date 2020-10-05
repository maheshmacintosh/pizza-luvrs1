module.exports = (app, handlers) =>
  app.route('/pizza')
    .post(handlers.pizza)
    // TODO: add auth
// ({
//   method: 'POST',
//   path: '/pizza',
//   handler: handlers.pizza
// })
