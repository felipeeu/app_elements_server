


module.exports = (app) => {
    const elements = require('../controllers/element.controller.js');

    // Create a new Element
    app.post('/elements', elements.create);

    // Retrieve all Notes
    app.get('/elements', elements.findAll);

    // Retrieve a single Element with noteId
    app.get('/elements/:elementId', elements.findOne);

    // Update a Element with noteId
    app.put('/elements/:elementId', elements.update);

    // Delete a Element with noteId
    app.delete('/elements/:elementId', elements.delete);
}
