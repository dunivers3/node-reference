const express = require("express")

const app = express()


//app.get
app.get("/", (req, res) => {
    console.log("client hit the homepage resource!")
    res.status(200).send("Homepage")
})

app.get("/about", (req, res) => {
    console.log("client hit the about page!")
    res.status(200).send("About Page")
})
//app.all
app.all("*", (req, res) => {
    console.log("resource not found")
    res.status(404).send("<h4>404 </br> Resource not found</h4>")
})
//app.use --> middleware

//app.listen
app.listen(2121, () => {
    console.log("Server is listening on port 2121, like the savage!")
})