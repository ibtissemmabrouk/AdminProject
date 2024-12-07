const express = require('express');

const app = express();

app.get('/', (req, res) => { res.send('<h1> ISIMM 24/25 : ING2 – Semester1</h1>');
});

module.exports = app;


