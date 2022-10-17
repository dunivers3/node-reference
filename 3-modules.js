//modules - encaspulated code (only share minimum)
//CommonJs, every file is a module (by default)
const names = require("./4-names")
const greetings = require("./5-general")
const data = require("./6-alternative-flavor")
require("./7-bomb")

/*
greetings("prime")
greetings(names.george)
greetings(names.john)
*/
