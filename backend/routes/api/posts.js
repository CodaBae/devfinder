const express = require("express");
const router = express.Router();

// @route  GET api/post/test
// @desc   Test posts route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "posts works" }));

module.exports = router;
