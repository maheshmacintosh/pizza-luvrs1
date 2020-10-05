module.exports = (app, handlers) =>
  app.route('/user')
    .post(handlers.user)
    //TODO: add auth
// ({
//   method: 'POST',
//   path: '/user',
//   handler: handlers.user,
//   options: {
//     auth: false
//   }
// })
