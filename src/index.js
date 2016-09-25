import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';

// Initialize the express app.
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Enable helmet to secure the application.
app.use(helmet());
app.use(helmet.noCache())
app.use(helmet.frameguard())

app.get('/', (req, res) => {
	res.writeHead(200, {'Content-Type': 'text-plain'});	
	res.end('Hello World!');
});

http.createServer(app).listen(3000, '127.0.0.1', () => {
	console.log('Server running at http://127.0.0.1:3000/');
});