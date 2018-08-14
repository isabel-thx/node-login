const express = require("express");
const bodyParser = require("body-parser");

const USERS = [
  { username: "isabel", password: "password" },
  { username: "stanley", password: "password" }
];

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ express: "Hello" });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = USERS.find(user => user.username === username);
  if (user) {
    if (user.password === password) {
      res.send({ express: "You have successfully logged in!" });
    } else {
      res.send({ express: "Incorrect username or password." });
    }
  } else {
    res.send({ express: "User does not exist." });
  }
});

app.listen(4000, () => console.log("Server listening on port 4000"));
