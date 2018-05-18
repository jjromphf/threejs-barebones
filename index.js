const express = require('express');
const app = express();
const http = require('http').Server(app);
app.use(express.static('public'));

http.listen(3000, () => {
  console.log('three.js app running on port 3000');
});
