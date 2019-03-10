const routes = require('express').Router();

routes.get('/hello', (req, res) => {
    res.send({ express: 'hello' });
});

routes.post('/hello', (req, res) => {
    res.send('POST request:', req.body.post);
});

module.exports = routes;