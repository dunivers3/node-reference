const http = require("http")

const app = http.createServer( (req, res) => {
  console.log("client hit the server!")
  res.end("Homepage")
} )

app.listen(2121)
