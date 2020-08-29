const express = require('express');
const { signup, signin, signout } = require('../controllers/auth');
const { userById} = require('../controllers/user');
const {userSignupValidator} = require('../validator')

const router = express.Router();

// router.get("/", getPosts);
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

//any routes containing :userId, our app will first exexcute useById
router.param("userId", userById)

module.exports = router;