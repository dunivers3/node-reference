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
server.use([authorize, logger])

server.get("/", (req,res)=>{
  res.status(200).send("Homepage!")
/*
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  res.status(200).send("Homepage!")
*/
})

server.get("/products", (req,res)=>{
  res.status(200).send("products!")
})

server.get("/dominus/items", (req,res)=>{
  res.status(200).send("items!")
})

server.get("/api/all", (req,res)=>{
  res.status(200).send("api!")
})

server.get("/dominus/about",(req,res)=>{
  res.status(200).send("About page!")
})

server.listen(2121, ()=>{
  console.log("Server is listening on port 2121, just like the savage!")
})
