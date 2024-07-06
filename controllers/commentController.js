const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

//bussiness logic

exports.createComment = async(req ,res)=>{
    try{
        const {post , user , body} = req.body;

        //create a comment object
        const comment = new Comment({
            post , user , body
        });
        //save the new comment into database
        const savedComment = await comment.save(); 

        //find the post by id and update the new comment to its commetns array
        const updatedPost = await Post.findByIdAndUpdate(post , {$push:{comments:savedComment._id}},{new:true})
        .populate('comments')
        .exec()
        res.json({
            post:updatedPost,
        }); 


    }
    catch(error){
            return res.status(404).json({
                error:"error while creating post"
            })
    }
}