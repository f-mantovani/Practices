const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
  { username: "Kyle", title: "post 1" },
  { username: "Jim", title: "post 2" },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  //Autheticate the User
  const username = req.body.username;
});

app.listen(3000, () => {
  console.log(`Server Running on 3000`);
});
