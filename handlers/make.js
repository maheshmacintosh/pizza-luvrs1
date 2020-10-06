const toppingStore = require('../data/toppings')

async function makePizza (req, res) {
  const toppings = await toppingStore.getAll()
  const context = {
    toppings: toppings,
    auth: req.auth
  }
  return res.render('pizza.make.hbs', context)
}

module.exports = (req, res) => {
  switch (req.params.target) {
    case 'pizza':
      return makePizza(req, res)
  }
}
