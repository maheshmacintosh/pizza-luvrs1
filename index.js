const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const plugins = require('./plugins')
const routes = require('./routes')

async function startServer () {
  await plugins.register(app)
  routes.register(app)

  try {
    await app.listen()
    console.log(`Server running at: ${server.info.uri}`)
  } catch (err) {
    console.error(`Server could not start. Error: ${err}`)
  }
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit()
})

startServer()
