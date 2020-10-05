module.exports = (app, handlers) =>
  app.route('/logout')
    .get(handlers.logout)

// ({
//   method: 'GET',
//   path: '/logout',
//   handler: handlers.logout
// })
