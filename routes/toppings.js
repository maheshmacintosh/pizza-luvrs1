module.exports = (app, handlers) =>
  app.route('/toppings')
    .get(handlers.toppings)
    // TODO: add auth
// ({
//   method: 'GET',
//   path: '/toppings',
//   handler: handlers.toppings,
//   options: {
//     auth: {
//       mode: 'try'
//     }
//   }
// })
