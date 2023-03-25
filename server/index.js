var mysql = require('mysql');

var con = mysql.createConnection({
  host: "s.abax.bg",
  user: "lenyka_online",
  password: "s2E77wf-sCC--ff",
  database: "lenyka_online_u8"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT ID, group_name, group_code, group_MSlink, group_nivel, teacher_name, onlpris FROM groups", function (err, result, fields) {
    if (err) throw err;
    app.get("/api", (req, res) => {
      res.json(result);
    });
  });
});


const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });  