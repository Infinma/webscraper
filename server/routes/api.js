const routes = require('express').Router();
const OK_STATUS = 200;

routes.get('/hello', (req, res) => {
    res.send({express: 'hello'});
});

routes.post('/world', (req, res) => {
    // eslint-disable-next-line no-console
    res.status(OK_STATUS).send('POST request: '+ req.body.post);
});

module.exports = routes;