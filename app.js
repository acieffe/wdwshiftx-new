const express = require('express');
const mysql = require('mysql');

// Creating Database Connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'wdwshiftx-test',
});

// Connecting to Database
db.connect((err) => {
	if (err) throw err;
	console.log('MySQL Connected...');
});

const app = express();

// Create Shift Table
app.get('/createshifttesttable', (req, res) => {
	let sql =
		'CREATE TABLE testShifts(id INT AUTO_INCREMENT PRIMARY KEY, shiftName VARCHAR(255), startTime DATETIME, endTime DATETIME, role VARCHAR(255), location VARCHAR(255), giveTrade VARCHAR(10), owner VARCHAR(255), addInfo VARCHAR(3000));';
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send('shifts table created');
	});
});

// Add Shift
app.get('/testShifts/add', (req, res) => {
	let shift = {
		shiftName: `EC Future World`,
		startTime: `2021-04-26 11:30:00`,
		endTime: `2021-04-26 19:30:00`,
		role: `PhotoPass (DPI)`,
		location: `Epcot`,
		giveTrade: `Trade`,
		owner: `Matt Baugh`,
		addInfo: `This is a Trade, Tell me what ya got!`,
	};
	let sql = `INSERT INTO testShifts SET ?`;
	let query = db.query(sql, shift, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send('shift added');
	});
});

// Retrieve All Shifts
app.get('/getTestShifts', (req, res) => {
	let sql = `SELECT * FROM testShifts`;
	let query = db.query(sql, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});

// Retrieve specific Shift by id
app.get('/getTestShift/:id', (req, res) => {
	let sql = `SELECT * FROM testShifts WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, results) => {
		if (err) throw err;
		console.log(results);
		res.send('Shift fetched');
	});
});

// Update Shift by id
// %%%% Need to Fix "" '' and `` problems %%%%
app.get('/updateTestShift/:id', (req, res) => {
	let shiftName = `HS Hollywood`;
	let startTime = `2021-04-27 11:30:00`;
	let endTime = `2021-04-27 20:00:00`;
	let role = `PhotoPass (DPI)`;
	let location = `Disney's Hollywood Studios (DHS)`;
	let giveTrade = `Trade`;
	let owner = `Matt Baugh`;
	let addInfo = `This is a Trade, 'Something' Tell me what ya got!`;
	let sql = `UPDATE testShifts SET shiftName = "${shiftName}", startTime = "${startTime}", endTime = "${endTime}", role = "${role}", location = "${location}", giveTrade = "${giveTrade}", owner = "${owner}", addInfo = "${addInfo}" WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, results) => {
		if (err) throw err;
		console.log(results);
		res.send('Shift updated');
	});
});

// Delete Shift
app.get('/deleteTestShift/:id', (req, res) => {
	let sql = `DELETE FROM testShifts WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, results) => {
		if (err) throw err;
		console.log(results);
		res.send('Shift deleted');
	});
});

app.get('/', (req, res) => {
	res.send('Hello from the other side!');
});

app.listen('3000', () => {
	console.log('Server Started on port 3000');
});
