const { readFile, writeFile } = require("fs").promises //remove this method to use the promisify method
//promisify method
/*
const util = require("util")
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
*/


const begin = async () => {
  try{
    const first = await readFile("./content/first.txt", "utf8")
    const second = await readFile("./content/second.txt", "utf8")
    await writeFile("./content/async-bomb.txt", `This is is awesome: ${first} ${second}`, {flag: "a"})
    console.log(first, second)
  }
  catch(error){
    console.log(error)
  }
}

begin()
//callback hell async method
/*
const getData =(path) =>{
    return new Promise( (resolve, reject) => {
      readFile(path, "utf8", (err, data) => {
        if(err){
          reject(err)
        }else{
          resolve(data)
        }
      })
  } )
}

getData("./content/first.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  */
