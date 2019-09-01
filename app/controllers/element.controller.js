const Element = require('../models/element.model.js');

// Create and Save a new Element
exports.create = (req, res) => {
    // Validate request
    if(!req.body.number) {
        return res.status(400).send({
            message: "Element content can not be empty"
        });
    }

    // Create a Element
    const element= new Element({
        name: req.body.name, 
        number: req.body.number,
        student: req.body.student
    });

    // Save element in the database
    element.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Element."
        });
    });
};

// Retrieve and return all elements from the database.
exports.findAll = (res) => {
    Element.find()
    .then(elements => {
        res.send(elements);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving elements."
        });
    });
};

// Find a single element with a Id
exports.findOne = (req, res) => {
    Element.findById(req.params.id)
    .then(element => {
        if(!element) {
            return res.status(404).send({
                message: "element not found with id " + req.params.id
            });            
        }
        res.send(element);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Element not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving element with id " + req.params.id
        });
    });
};

// Update a element identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.id) {
        return res.status(400).send({
            message: "Element id can exist"
        });
    }

    // Find element and update it with the request body
    Element.findByIdAndUpdate(req.params.id, {
        name: req.body.name ,
        number: req.body.number,
        student: req.body.student
    })
    .then(element => {
        if(!element) {
            return res.status(404).send({
                message: "element not found with id " + req.params.id
            });
        }
        res.send(element);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Element not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating element with id " + req.params.id
        });
    });
};

// Delete a element with the specified id in the request
exports.delete = (req, res) => {

};