const express = require('express');
const mysql = require('mysql');
import '/styles/app.css';

// Creating Database Connection
// const db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '123456789',
// 	database: 'wdwshiftx-test',
// });

// // Connecting to Database
// db.connect((err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('MySQL Connected...');
// });

const app = express();

app.get('/', (req, res) => {
	res.send('Hello from the other side!');
});

app.listen('3000', () => {
	console.log('Server Started on port 3000');
});
