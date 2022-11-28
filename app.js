const express = require("express")

const server = express()

const transformers = require("./routes/autobots")
const auth = require("./routes/auth")

//static folders
server.use(express.static("./methods-public"))
//parse data from the form in HTML
server.use(express.urlencoded({ extended: false }))
//parse json data coming in
server.use(express.json())

//routes
server.use("/api/autobots", transformers)
server.use("/login", auth)

server.listen(2121, () => {
  console.log("Server is listenning on port 2121, just like the savage!")
})
