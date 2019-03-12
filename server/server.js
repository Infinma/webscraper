const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on port:' + port);
});