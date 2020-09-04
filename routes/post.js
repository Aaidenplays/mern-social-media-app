const express = require('express');
const {getPosts, createPost, postsByUser, postById, isPoster, deletePost, updatePost} = require('../controllers/post');
const {requireSignin} = require('../controllers/auth');
const { userById} = require('../controllers/user');
const {createPostValidator} = require('../validator')

const router = express.Router();

router.get("/",  getPosts);
router.post("/post/new/:userId", requireSignin, createPost, createPostValidator);
router.get("/posts/by/:userId", requireSignin, postsByUser);
router.delete('/post/:postId', requireSignin, isPoster, deletePost)
router.put('/post/:postId', requireSignin, isPoster, updatePost)

//any routes containing :userId, our app will first exexcute useById
router.param("userId", userById)

//any routes containing :postId, our app will first exexcute postById
router.param("postId", postById)

module.exports = router;