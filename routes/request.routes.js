const router = require("express").Router();
const mongoose = require("mongoose");

const Request = require("../models/Request.model")


//  POST /api/requests  -  Creates a new request

router.post("/requests", (req, res, next)=>{
    const {date, phone, language, feeling} = req.body;

    const newRequest = {
        date: date,
        phone: phone,
        language: language,
        feeling: feeling
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


// GET /api/requests -  Retrieves all of the request
router.get('/requests', (req, res, next) => {
    Request.find()
      
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            console.log("error getting list of requests", err);
            res.status(500).json({
                message: "error getting list of requests",
                error: err
            });
        })
});


//  GET /api/requests/:requestId  -  Get details of a specific request by id
router.get('/requests/:requestId', (req, res, next) => {
    
    const { requestId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }


    Request.findById(requestId)
        
        .then(request => res.json(request))
        .catch(err => {
            console.log("error getting details of a request", err);
            res.status(500).json({
                message: "error getting details of a request",
                error: err
            });
        })
});



// PUT /api/requests/:requestId  -  Updates a specific request by id
router.put('/requests/:requestId', (req, res, next) => {
    const { requestId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    const newDetails = {
        date: req.body.date,
        phone: req.body.phone,
        feeling: req.body.feeling,

    }

    Request.findByIdAndUpdate(requestId, newDetails, { new: true })
        .then((updatedRequest) => res.json(updatedRequest))
        .catch(err => {
            console.log("error updating request", err);
            res.status(500).json({
                message: "error updating request",
                error: err
            });
        })
});


// DELETE /api/requests/:requestId  -  Delete a specific request by id
router.delete('/requests/:requestId', (req, res, next) => {
    const { requestId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Request.findByIdAndRemove(requestId)
        
        .then(() => res.json({ message: `Request with id ${requestId} was removed successfully.` }))
        .catch(err => {
            console.log("error deleting request", err);
            res.status(500).json({
                message: "error deleting request",
                error: err
            });
        })
});


module.exports = router;
