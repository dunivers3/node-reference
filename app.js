const express = require("express")

const server = express()

let {transformers} = require("./data")

//static folders
server.use(express.static("./methods-public"))
//parse data from the form in HTML
server.use(express.urlencoded({extended: false}))
//parse json data coming in
server.use(express.json())

//GET request ==> default
server.get("/api/autobots", (req,res)=>{
  res.status(200).json({success: true, data: transformers})
})

//POST request 
server.post("/api/autobots", (req,res)=>{
  const {name} = req.body
  if(!name){
    return res.status(401).json({success: false, msg: "Cannont parse! Provied a name value!"})
  }
  res.status(201).json({success: true, transformer: name})
})


//post through the form methods
server.post("/login", (req,res)=>{
  console.log(req.body)
  const {name} = req.body
  
  if(name.trim()){
    return res.status(200).send(`Welcome home ${name}`)
  }
  res.status(401).send(`Please provide credentials!`)
})


server.listen(2121, ()=> {
  console.log("Server is listenning on port 2121, just like the savage!")
})
