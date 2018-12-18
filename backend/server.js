const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//connect to database
const db = require("./config/keys").mongoURL;
//connect to mongoose

mongoose
  .connect(db)
  .then(() => console.log(`mongodb connected`))
  .catch(err => console.log(` this is the ${err}`));

app.get("/", (req, res) => res.send("hello codabae"));
// use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`you are running on port ${port}`));
