const pizzaStore = require('../data/pizzas')

module.exports = async (req, res) => {
  const pizzas = await pizzaStore.getRecent()
  const context = {
    auth: req.auth,
    pizzas: pizzas
  }

  return res.render('index', context)
}
