const router = require("express").Router();
const mongoose = require("mongoose");

const Request = require("../models/Request.model")


//  POST /api/projects  -  Creates a new project

router.post("/requests", (req, res, next)=>{
    const {date, time, phone, language} = req.body;

    const newRequest = {
        date: date,
        time: time, 
        phone: phone,
        language: language
    }

    Request.create(newRequest)
        .then(response => res.status(201).json(response))
        .catch(err => {
            console.log("error creating a new request", err);
            res.status(500).json({
                message: "error creating a new request",
                error: err
            });
        })    
})

// GET /api/projects -  Retrieves all of the projects







module.exports = router;
