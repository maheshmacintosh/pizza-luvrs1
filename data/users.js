const bcrypt = require('bcryptjs')

const User = require('../models/user')

const users = {}
const saltRounds = 10

async function create (username, passwordString) {
  if (users[username]) {
    throw new Error('Username already exists')
  }

  const passwordHash = hashPassword(passwordString)
  const user = new User(username, passwordHash)
  users[username] = user
  return user
}

async function get (username) {
  return users[username]
}

async function authenticate (username, passwordString) {
  const user = await get(username)

  if (!user) throw new Error('User not found')

  const valid = validatePassword(passwordString, user.passwordHash)

  return valid ? user : null
}

function validatePassword (passwordString, passwordHash) {
  return bcrypt.compareSync(passwordString, passwordHash)
}

function hashPassword (passwordString) {
  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(passwordString, salt)
  return hash
}

module.exports = {
  authenticate,
  create,
  get
}
