const express = require("express")
const path = require("path")

const app = express()

//setup static folders and middleware
app.use(express.static("./public/js"))
app.use(express.static("./public/css"))
app.use(express.static("./public/assets"))

app.get("/", (req, res) => {
  console.log("client found homepage resource!")
  res.sendFile(path.resolve(__dirname, "./2-express/starter-nav/index.html"))
})

app.all("*", (req, res) => {
  res.status(404).send(`404 error </br> Resource not found! Try again later!`)
})

app.listen(2121, () => {
  console.log("Server is listening on port 2121, like the savage!")
})
