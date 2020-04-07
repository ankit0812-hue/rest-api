const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3000;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.all('/dishes',(req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();

});

app.get('/dishes',(req,res,next) =>{
    res.end('Will get all dish request to you');
});

app.post('/dishes',(req,res,next) =>{
    res.end('Will add the dish:'+ req.body.name +'with description'+ req.body.description);

});

app.put('/dishes',(req,res,next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');

});

app.delete('/dishes',(req,res,next) =>{
    res.end('Will delete all dishes');

});

app.get('/dishes/:dishId',(req,res,next) =>{
    res.end(`Will get detalis of dish to you:${req.params.dishId} to you!`);
});

app.post('/dishes/:dishId',(req,res,next) =>{
    res.statusCode = 200;
    res.end('POST operation not aloowed on /dishes/'+ req.params.dishId);

});

app.put('/dishes/:dishId',(req,res,next) =>{
    res.end('Will add the dish:'+ req.params.dishId);

});

app.delete('/dishes/:dishId',(req,res,next) =>{
    res.end('Deleting dish:'+ req.params.dishId);

});


app.use(express.static(__dirname+ '/public'));
app.use((req,res,next) => {
      console.log(req.headers);
      res.statusCode = 200;
      res.setHeader('Content-Type','text/html');
      res.end('<html><body><h1>Hello World</h1></body></html>');
});
const server = http.createServer(app);
server.listen(port,hostname);