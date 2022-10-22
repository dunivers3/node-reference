const http = require("http")

const app = http.createServer((req, res) => {
    console.log("client hit the server!")
    res.writeHead(200, { "content-type": "text/html" })
    res.write("<h3>Homepage</h3>")
    res.end("Hello world!")
})

app.listen(2121)