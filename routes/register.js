module.exports = (app, handlers) =>
  app.route('/register')
    .get(handlers.register)

  // TODO: disable auth
// ({
//   method: 'GET',
//   path: '/register',
//   handler: handlers.register,
//   options: {
//     auth: false
//   }
// })
