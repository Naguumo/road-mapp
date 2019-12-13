const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../www/build')));

app.get('/graphql', (req, res) => {
  res.json({output: "Something Else"});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+ '../www/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Backend listening on ${port}`);

module.exports = app;
