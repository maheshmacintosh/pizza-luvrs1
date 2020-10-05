module.exports = (app, handlers) =>
  app.route('/')
    .get(handlers.main)
  // TODO: add auth

// ({
//   method: 'GET',
//   path: '/',
//   handler: handlers.main,
//   options: {
//     auth: {
//       mode: 'try'
//     }
//   }
// })
