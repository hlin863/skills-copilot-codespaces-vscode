// Create web server

// Import express
const express = require('express');

// Import comment model
const Comment = require('../models/Comment');

// Create router
const router = express.Router();

// @route GET api/comments
// @desc Get all comments
// @access Public
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    if (!comments) throw Error('No comments');

    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @route POST api/comments
// @desc Create new comment
// @access Public
router.post('/', async (req, res) => {
  const newComment = new Comment(req.body);

  try {
    const comment = await newComment.save();
    if (!comment) throw Error('Something went wrong saving the comment');

    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @route DELETE api/comments/:id
// @desc Delete comment
// @access Public
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) throw Error('No comment found');

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @route PUT api/comments/:id
// @desc Update comment
// @access Public
router.put('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body);
    if (!comment) throw Error('No comment found');

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;