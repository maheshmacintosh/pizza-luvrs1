const users = require('../data/users')
const querystring = require('querystring')

module.exports = async (req, res) => {
  if (req.auth.isAuthenticated) {
    return res.redirect('/')
  }

  if (req.method === 'post') {
    const user = await users.authenticate(req.payload.username.toLowerCase(), req.payload.password)
    if (!user) throw new Error('Unauthorized')
    const sid = String(Math.random())
    // await req.server.app.cache.set(sid, user, 0)
    req.cookieAuth.set({ sid: sid, user: user })
    return res.redirect(getNext(req.headers.referer) || '/')
  } else if (req.method === 'get') {
    return res.render('login')
  }
}

function getNext (referer) {
  let next = ''
  if (referer) {
    let refererSplit = referer.split('?')
    if (refererSplit[1]) {
      next = querystring.parse(refererSplit[1]).next
    }
  }
  return next
}
