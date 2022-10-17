const os = require("os")

//infor about current user
const usr = os.userInfo()
console.log(usr)

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds.`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOs)
