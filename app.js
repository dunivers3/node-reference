const express = require("express")

const server = express()

let { transformers } = require("./data")

//static folders
server.use(express.static("./methods-public"))
//parse data from the form in HTML
server.use(express.urlencoded({ extended: false }))
//parse json data coming in
server.use(express.json())

//GET request ==> default
server.get("/api/autobots", (req, res) => {
  res.status(200).json({ success: true, data: transformers })
})

//POST request
server.post("/api/autobots", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(401).json({ success: false, msg: "Cannont parse! Provied a name value!" })
  }
  res.status(201).json({ success: true, transformer: name })
})

//postman
server.post("/api/postman/autobots", (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(401).json({ success: false, msg: "Cannont parse! Provide a name value!" })
  }
  res.status(201).json({ success: true, data: [...transformers, name] })
})


//post through the form methods
server.post("/login", (req, res) => {
  console.log(req.body)
  const { name } = req.body

  if (name.trim()) {
    return res.status(200).send(`Welcome home ${name}`)
  }
  res.status(401).send(`Please provide credentials!`)
})

//PUT request
server.put("/api/autobots/:id", (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const transformer = transformers.find((transformer) => transformer.id === Number(id))

  if (!transformer) {
    return res.status(404).json({ success: false, msg: `no person with id of ${id}` })
  }

  const newTransformers = transformers.map((transformer) => {
    if (transformer.id === Number(id)) {
      transformer.name = name
    }
    return transformer
  })
  res.status(200).json({ success: true, data: newTransformers })
})

//DELETE request
server.delete("/api/autobots/:id", (req, res) => {
  const transformer = transformers.find((transformer) => transformer.id === Number(req.params.id))

  if (!transformer) {
    return res.status(404).json({ success: false, msg: `cannot remove ${req.params.id}, it does not exist!` })
  }

  const newTransformer = transformers.filter((transformer) => transformer.id !== Number(req.params.id))
  return res.status(200).json({ success: true, data: newTransformer })
})


server.listen(2121, () => {
  console.log("Server is listenning on port 2121, just like the savage!")
})
