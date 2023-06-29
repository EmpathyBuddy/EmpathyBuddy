const router = require("express").Router();
const mongoose = require("mongoose");

const Post = require("../models/Post.model")


//  POST /api/posts  -  Creates a new posts

router.post("/posts", (req, res, next)=>{
    const {title, description} = req.body;

    const newPost = {
        title: title,
        description: description
    }

    Post.create(newPost)
        .then(response => res.status(201).json(response))
        .catch(err => {
            console.log("error creating a new post", err);
            res.status(500).json({
                message: "error creating a new post",
                error: err
            });
        })    
})

// GET /api/posts -  Retrieves all of the posts
router.get('/posts', (req, res, next) => {
    Post.find()
      
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            console.log("error getting list of posts", err);
            res.status(500).json({
                message: "error getting list of posts",
                error: err
            });
        })
});


//  GET /api/posts/:postId  -  Get details of a specific post by id
router.get('/posts/:postId', (req, res, next) => {
    
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }


    Post.findById(postId)
        
        .then(post => res.json(post))
        .catch(err => {
            console.log("error getting details of a post", err);
            res.status(500).json({
                message: "error getting details of a post",
                error: err
            });
        })
});



// PUT /api/posts/:postId  -  Updates a specific post by id
router.put('/posts/:postId', (req, res, next) => {
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    const newDetails = {
        title: req.body.title,
        description:req.body.description
    }

    Post.findByIdAndUpdate(postId, newDetails, { new: true })
        .then((updatedPost) => res.json(updatedPost))
        .catch(err => {
            console.log("error updating post", err);
            res.status(500).json({
                message: "error updating post",
                error: err
            });
        })
});


// DELETE /api/posts/:postId  -  Delete a specific post by id
router.delete('/posts/:postId', (req, res, next) => {
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Post.findByIdAndRemove(postId)
        
        .then(() => res.json({ message: `Request with id ${postId} was removed successfully.` }))
        .catch(err => {
            console.log("error deleting request", err);
            res.status(500).json({
                message: "error deleting request",
                error: err
            });
        })
});



module.exports = router;
