const express = require('express');
const app = express();
const mysql = require('mysql');

const db_config = {
  host: "s.abax.bg",
  user: "lenyka_online",
  password: "s2E77wf-sCC--ff",
  database: "lenyka_online_u8"
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function(err) {
    if(err) {
      console.log('Error connecting to database:', err);
      setTimeout(handleDisconnect, 2000); // Try to reconnect after 2 seconds
    } else {
      console.log('Connected to database');
    }
  });

  connection.on('error', function(err) {
    console.log('Database error:', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Handle connection lost error
      handleDisconnect(); // Try to reconnect
    } else {
      throw err;
    }
  });
}

handleDisconnect(); // Start initial connection

app.get("/api", (req, res) => {
  connection.query("SELECT ID, group_name, group_code, group_MSlink, group_nivel, teacher_name, onlpris FROM groups", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});