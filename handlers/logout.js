module.exports = (req, res) => {
  req.cookieAuth.clear()
  return res.redirect('/')
}
