module.exports = (app, handlers) =>
  app.route('/pizza/:pizzaId')
    .get(handlers.pizza)
    // TODO: add auth
// ({
//   method: 'GET',
//   path: '/pizza/{pizzaId}',
//   handler: handlers.pizza,
//   options: {
//     auth: {
//       mode: 'try'
//     }
//   }
// })
