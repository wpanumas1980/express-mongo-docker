const express = require ( 'express');
const { getPosts, createPost } = require( "../controllers/posts");

const router = express.Router();

router.get("/", getPosts);
router.post("/create", createPost);

module.exports = router;