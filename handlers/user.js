const { get } = require('lodash')

const userStore = require('../data/users')
const pizzaStore = require('../data/pizzas')

async function postUser (req, res) {
  const user = await userStore.create(req.payload.username, req.payload.password)
  const sid = String(Math.random())
  // await req.server.app.cache.set(sid, user, 0)
  req.cookieAuth.set({ sid: sid, user: user })
  return res.redirect('/login')
}

async function getUser (req, res) {
  const username = get(req, 'params.username') || get(req, 'auth.credentials.user.username')
  const pizzas = await pizzaStore.getForUser(username)
  const context = {
    username: username,
    auth: req.auth,
    pizzas: pizzas
  }

  return res.render('user', context)
}

module.exports = (req, res) => {
  if (req.method === 'GET') {
    return getUser(req, res)
  }
  if (req.method === 'POST') {
    return postUser(req, res)
  }
}
