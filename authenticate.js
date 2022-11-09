const authorize = (req, res, next) => {
  const { user } = req.query
  if (user === "dominus") {
    req.user = { name: "dominus", id: 29 }
    next()
  } else {
    res.status(401).send("Unauthorized!")
  }
}

module.exports = authorize
