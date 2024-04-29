const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('We have added a  review stage with manual approval to our continous delivery pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
