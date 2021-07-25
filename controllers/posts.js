
const { Post } = require('../models/postMessage');

const getPosts = async (req, res) => {
  try {
    const postMessages = await Post.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const createPost = async (req, res) => {
  const postData = req.body;
  const newPost = new Post(postData);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

module.exports = { getPosts, createPost };