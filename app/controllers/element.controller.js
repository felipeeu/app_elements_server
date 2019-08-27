const Element = require('../models/element.model.js');

// Create and Save a new Element
exports.create = (req, res) => {
    // Validate request
    if(!req.body.number) {
        return res.status(400).send({
            message: "Element content can not be empty"
        });
    }

    // Create a Note
    const element= new Element({
        name: req.body.name, 
        number: req.body.number,
        student: req.body.student
    });

    // Save Note in the database
    element.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Element."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Element.find()
    .then(elements => {
        res.send(elements);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Element.findById(req.params.noteId)
    .then(element => {
        if(!element) {
            return res.status(404).send({
                message: "element not found with id " + req.params.elementId
            });            
        }
        res.send(element);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Element not found with id " + req.params.elementId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving element with id " + req.params.elementId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};