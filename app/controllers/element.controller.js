const Element = require("../models/element.model.js");

// Create and Save a new Element
exports.create = (req, res) => {
  // Validate request

  if (!req.body.number) {
    return res.status(400).send({
      message: "Element number can not be empty"
    });
  }

  // Create a Element
  const element = new Element({
    student: req.body.student,
    element: req.body.element,
    symbol: req.body.symbol,
    number: req.body.number,
    word: req.body.word,
    artdesc: req.body.artdesc,
    elementdesc: req.body.elementdesc
  });

  // Save element in the database
  element
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Element."
      });
    });
};

// Retrieve and return all elements from the database.
exports.findAll = (req, res) => {
  Element.find()
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      console.log("erro do catch: ", err);
      // res.status(500).send({
      //     message: err.message || "Some error occurred while retrieving elements."
      // });
    });
};

// Find a single element with a Id
exports.findOne = (req, res) => {
  Element.findById(req.params.elementId)
    .then(item => {
      if (!item) {
        return res.status(404).send({
          message: "element not found with id " + req.params.elementId
        });
      }
      res.send(item);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Element not found with id " + req.params.elementId
        });
      }
      return res.status(500).send({
        message: "Error retrieving element with id " + req.params.elementId
      });
    });
};

// Delete a element with the specified id in the request
exports.delete = (req, res) => {
  Element.findByIdAndRemove(req.params.elementId)
    .then(item => {
      if (!item) {
        return res.status(404).send({
          message: "Element not found with id " + req.params.elementId
        });
      }
      res.send({ message: "Element deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Element not found with id " + req.params.elementId
        });
      }
      return res.status(500).send({
        message: "Could not delete element with id " + req.params.elementId
      });
    });
};
