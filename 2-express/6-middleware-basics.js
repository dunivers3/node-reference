const express = require("express")
//middleware access 
const logger = require("./logger-middleware")
const authorize = require("./authenticate")

const server = express()

//req ==> middleware ==> res

/*
let logger = (req,res,next)=>{
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}
*/

//own middleware
server.use([authorize, logger])
//the use must be above the required place of use
//if a path first parameter is used, it applies to the route with that path only
//with 2 functions in the use, order matters

//express middleware
/*
server.use(express.static("../public"))
*/

//third party middleware
server.use(morgan('tiny'))

server.get("/", (req, res) => {
  res.status(200).send("Homepage!")
  /*
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    res.status(200).send("Homepage!")
  */
})

server.get("/products", (req, res) => {
  res.status(200).send("products!")
})

server.get("/dominus/items", (req, res) => {
  res.status(200).send("items!")
})

server.get("/api/all", (req, res) => {
  res.status(200).send("api!")
})

server.get("/dominus/about", (req, res) => {
  res.status(200).send("About page!")
})

server.listen(2121, () => {
  console.log("Server is listening on port 2121, just like the savage!")
})
