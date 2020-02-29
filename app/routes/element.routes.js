module.exports = app => {
  const elements = require("../controllers/element.controller.js");

  // Create a new Element
  app.post("/elements", elements.create);

  // Retrieve all Elements
  app.get("/elements", elements.findAll);

  // Retrieve a single Element with id
  app.get("/elements/:elementId", elements.findOne);

  // Delete a Element with id
  app.delete("/elements/:elementId", elements.delete);
};
