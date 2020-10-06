const pizzaStore = require('../data/pizzas')
const toppingsStore = require('../data/toppings')

async function getPizza (req, res) {
  const toppings = await toppingsStore.getAll()
  const pizza = await pizzaStore.get(req.params.pizzaId)
  const context = {
    auth: req.auth,
    pizza,
    toppings
  }

  return res.render('pizza', context)
}

async function postPizza (req, res) {
  const data = req.payload
  const name = data.name
  const toppings = data.toppings
  const username = data.username
  const img = data.img

  try {
    return pizzaStore.create(name, toppings, img, username)
  } catch (err) {
    console.error(`Error on putting s3 object: ${err}`)
    res.status(500).send('Could not create pizza.')
  }
}

module.exports = (req, res) => {
  if (req.method === 'GET') {
    return getPizza(req, res)
  } else if (req.method === 'POST') {
    return postPizza(req)
  }
}
