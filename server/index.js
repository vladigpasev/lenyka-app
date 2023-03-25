var mysql = require('mysql');

var con = mysql.createConnection({
  host: "s.abax.bg",
  user: "lenyka_online",
  password: "s2E77wf-sCC--ff",
  database: "lenyka_online_u8"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("ID, group_name, group_code, group_MSlink, group_nivel, teacher_name, onlpris FROM groups ORDER BY ID ASC", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!", hii: "How are you today???" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });  