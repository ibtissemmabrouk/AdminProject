const express = require('express');

const app = express();
 
app.get('/', (req, res) => {
	  res.send('<h1> ISIMM 24/25 : ING2 – Semester 1 kkl</h1>');
});
 
module.exports = app;
