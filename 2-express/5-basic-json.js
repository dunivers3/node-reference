const express = require("express")
const {products, transformers} = require("./data")

const server = express()

//route 1 ==> GET /
server.get("/", (req,res)=>{
  res.json(transformers)
})

//route 2 ==> GET /api
server.get("/api", (req,res)=>{
  res.json(products)
})

//route 3 ==> GET /api/products
server.get("/api/products", (req,res)=>{
  const newProd = products.map(el => {
    const {id, name, image} = el
    return {id, name, image}
  })
  res.json(newProd)
})

//route 4 ==> GET /api/products/random_products
server.get("/api/products/:prodId", (req,res)=>{
  console.log(req.params)
  const {prodId} = req.params
  const singleProd = products.find(el => el.id === Number(prodId) )
  if(!singleProd){
    res.status(404).send("404! Product not found. Try again later!")
  }
  return res.json(singleProd)
})

//route 5 ==> GET /api/products/random_products --> combining various random routes
server.get("/api/products/:productID/reviews/:reviewID", (req,res)=>{
  res.send("FIVE STARS")
})

server.get("/api/v1/query", (req,res)=>{
  const {search, limit} = req.query
  let sortedProds = [...products]
  if(search){
    sortedProds = sortedProds.filter( (el) => {
      return el.name.startsWith(search)
    } )
  }
  if(limit){
    sortedProds = sortedProds.slice(0, Number(limit))
  }
  if(sortedProds.length < 1){
    res.status(200).send("No products matched your search!")
  }
res.status(200).json(sortedProds)
})

server.listen(2121, ()=> {
  console.log("Server is running on port 2121, like the savage!")
})

