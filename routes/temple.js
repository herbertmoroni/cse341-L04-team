const routes = require('express').Router();
const temples = require('../controllers/temple.js');

//routes.get('/', temples.findAll);
routes.get('/:temple_id', temples.findOne);

routes.post('/', temples.create);

//missing routes
routes.put('/:temple_id', temples.update);
routes.delete('/:temple_id', temples.delete);
routes.get('/', temples.findAllPublished);

module.exports = routes;
