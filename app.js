const express = require("express")

const server = express()

//req ==> middleware ==> res

let logger = (req,res,next)=>{
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

server.get("/", logger, (req,res)=>{
  res.status(200).send("Homepage!")
/*
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  res.status(200).send("Homepage!")
*/
})

server.get("/about",logger, (req,res)=>{
  res.status(200).send("About page!")
})

server.listen(2121, ()=>{
  console.log("Server is listening on port 2121, just like the savage!")
})
