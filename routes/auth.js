const express = require('express');
const { signup } = require('../controllers/auth');
const {userSignupValidator} = require('../validator')

const router = express.Router();

// router.get("/", getPosts);
router.post("/signup", userSignupValidator, signup);


module.exports = router;