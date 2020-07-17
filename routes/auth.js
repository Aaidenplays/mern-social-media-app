const express = require('express');
const { signup } = require('../controllers/auth');
// const validator = require('../validator')

const router = express.Router();

// router.get("/", getPosts);
router.post("/signup", signup);


module.exports = router;