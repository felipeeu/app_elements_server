


module.exports = (app) => {
    const elements = require('../controllers/element.controller.js');

    // Create a new Note
    app.post('/elements', elements.create);

    // Retrieve all Notes
    app.get('/elements', elements.findAll);

    // Retrieve a single Note with noteId
    app.get('/elements/:elementId', elements.findOne);

    // Update a Note with noteId
    app.put('/elements/:elementId', elements.update);

    // Delete a Note with noteId
    app.delete('/elements/:elementId', elements.delete);
}
