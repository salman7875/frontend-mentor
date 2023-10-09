const express = require("express");
const cors = require("cors");

const connection = require("./config/db");
const userR = require("./routes/users");
const taskR = require("./routes/tasks");
const app = express();

connection
  .query("SELECT 1")
  .then((data) => console.log("DB CONNECTED"))
  .catch((err) => console.log(err.message));

app.use(express.json());
app.use(cors());
app.use("/", userR);
app.use("/", taskR);

const PORT = 4000;
app.listen(PORT, () => console.log("port is running on: ", PORT));
