// Set up MySQL connection.
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: `${process.env.JM_HOST}`,
    port: process.env.JM_PORT,
    user: `${process.env.JM_USER}`,
    password: `${process.env.JM_PASSWORD}`,
    database: `${process.env.JM_DB}`
  });
};

const connection = mysql.createConnection({
  host: `${process.env.JM_HOST}`,
  port: process.env.JM_PORT,
  user: `${process.env.JM_USER}`,
  password: `${process.env.JM_PASSWORD}`,
  database: `${process.env.JM_DB}`
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connection was successful");
});

// Export connection for our ORM to use.
module.exports = connection;
