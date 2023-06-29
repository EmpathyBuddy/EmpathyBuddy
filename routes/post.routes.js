const router = require("express").Router();
const mongoose = require("mongoose");

const Post = require("../models/Post.model")


//  POST /api/projects  -  Creates a new project

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

// GET /api/projects -  Retrieves all of the projects





module.exports = router;
