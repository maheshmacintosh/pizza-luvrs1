module.exports = (app, handlers) =>
  app.route('/user/:username')
    .get(handlers.user)
    // TODO: add auth
// ({
//   method: 'GET',
//   path: '/user/{username?}',
//   handler: handlers.user,
//   options: {
//     auth: {
//       mode: 'try'
//     }
//   }
// })
