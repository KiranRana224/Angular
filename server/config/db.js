// const mysql = require("mysql");
// const con = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "password",
// 	database: "project",
// });

// con.connect((err) => {
// 	if (err) throw err;
// 	console.log("Connected to the database!");
// });
// module.exports = con;

/***SEQUALIZE */

// /config/db.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
