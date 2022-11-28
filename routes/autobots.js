const express = require("express")
const router = express.Router()

const {
  getAutobot,
  createAutobot,
  createAutobotPostman,
  updateAutobot,
  deleteAutobot
} = require("../controllers/autobots")

//GET request ==> default
router.get("/", getAutobot)
//POST request
router.post("/", createAutobot)
//postman
router.post("/postman", createAutobotPostman)
//PUT request
router.put("/:id", updateAutobot)
//DELETE request
router.delete("/:id", deleteAutobot)

module.exports = router
