/* jshint esversion:6, node:true */

const app = require('./app');

app.listen(
  80,
  () => console.log('Now listening on port 80'),
);
