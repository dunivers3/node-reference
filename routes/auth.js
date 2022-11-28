const express = require("express")

const router = express.Router()

//post through the form methods
router.post("/", (req, res) => {
  console.log(req.body)
  const { name } = req.body

  if (name.trim()) {
    return res.status(200).send(`Welcome home ${name}`)
  }
  res.status(401).send(`Please provide credentials!`)
})

module.exports = router
