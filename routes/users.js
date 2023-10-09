const express = require("express");
const { signup, userInfo, signin, getUserTask } = require("../controller/user");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/info", userInfo);
router.get("/user-tasks", getUserTask);

module.exports = router;
