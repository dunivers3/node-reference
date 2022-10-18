const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Duniverse Inc")
  }
  else if (req.url === "/about") {
    //blocking code
    for(let i = 0; i < 1000; i++){
      for(let j = 0; j < 1000; j++){
        console.log(`${i} ${j}`)
      }
    }
    res.end("Here is our story")
  }
  else {res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find what you're looking for. Please try again later</p>
  <a href="/">Back home</a>
  `)}
})

server.listen(2121, () => {
  console.log("Server is running on port 2121, like the Savage!")
})
