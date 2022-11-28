const express = require("express")
const router = express.Router()

const {
  getAutobot,
  createAutobot,
  createAutobotPostman,
  updateAutobot,
  deleteAutobot
} = require("../controllers/autobots")

/*
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
*/

//alternative method

router.route("/").get(getAutobot).post(createAutobot)
router.route("/postman").post(createAutobotPostman)
router.route("/:id").put(updateAutobot).delete(deleteAutobot)

module.exports = router
