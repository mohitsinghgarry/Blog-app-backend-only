const express = require('express');
const router = express.Router();

//IMPROT  CONTROLLER

const{createComment} = require('../controllers/commentController');
const{createPost,allPost} = require('../controllers/postController');
const{likePost,unlikePost} = require('../controllers/likeController');
//mapping 
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",allPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike",unlikePost);
//export
module.exports = router