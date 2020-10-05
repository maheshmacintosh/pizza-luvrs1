const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const Strategy = require('passport-http').DigestStrategy
const path = require('path')
const apicache = require('apicache')

const mockData = require('./data/mock')
const getToppingName = require('./templates/helpers/getToppingName')

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log', 'access.log'), { flags: 'a' })

module.exports.register = async app => {
  // register logger
  app.use(morgan('combined', { stream: accessLogStream }))

  // register cookies
  app.use(cookieParser())

  // setup template rendering
  const hbs = handlebars.create({
    extname: '.hbs',
    helpers: { getToppingName }
  })

  app.set('views', './templates')
  app.engine('handlebars', hbs.engine)
  app.set('view engine', 'handlebars')

  // setup static files
  app.use('/assets', express.static('assets'))

  // setup cache
  const cache = apicache.middleware
  app.use(cache(`1 day`))

  // setup authentication/session handling
  const redirectPath = '/login'

  passport.use(new Strategy({ qop: 'auth' },
  function(username, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      return cb(null, user, user.password);
    })
  }))


  // server.auth.strategy('session', 'cookie', {
  //   cookie: {
  //     isSecure: false,
  //     name: 'pzz4lyfe',
  //     password: 'password-should-be-32-characters'
  //   },
  //   redirectTo: redirectPath,
  //   appendNext: true,
  //   validateFunc: async (request, session) => {
  //     const cached = await cache.get(session.sid)
  //     if (!cached) {
  //       return { valid: false }
  //     }
  //     return {
  //       credentials: cached.account,
  //       valid: true
  //     }
  //   }
  // })

  // server.auth.default('session')

  // setup data
  mockData.hydrate()
}
