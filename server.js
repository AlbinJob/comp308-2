// our sever is connect server

let connect = require('connect');
let http = require('http');
 
let app = connect();
const port=3000;

app.listen(port);
console.log(`Server listening at port: ${port}`);

app.use('/hello', (req, res, next) => {
  res.setHeader('Content-Type','text/plain');
  res.end("hello 1!")
  next();
});

app.use('/', (req, res, next) => {
  res.setHeader('Content-Type','text/plain');
  res.end("Welcome!")
  next();
});

