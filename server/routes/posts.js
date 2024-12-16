import express from 'express';
import Post from '../models/Post.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all posts
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name profileImage')
      .sort({ createdAt: -1 });
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create post
router.post('/', auth, async (req, res) => {
  try {
    const post = new Post({
      ...req.body,
      author: req.user._id,
    });
    await post.save();
    await post.populate('author', 'name profileImage');
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Like/Unlike post
router.post('/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    
    const likeIndex = post.likes.indexOf(req.user._id);
    if (likeIndex === -1) {
      post.likes.push(req.user._id);
    } else {
      post.likes.splice(likeIndex, 1);
    }
    
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Add comment
router.post('/:id/comment', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    
    post.comments.push({
      author: req.user._id,
      content: req.body.content,
    });
    
    await post.save();
    await post.populate('comments.author', 'name profileImage');
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;