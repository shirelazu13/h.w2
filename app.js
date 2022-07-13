const express = require("express");
require("dotenv").config();
const users = require("./routes/users")

const app = express();

const PORT= process.env.PORT || 8000;

app.use("/api/users", users)

app.listen(PORT,() => console.log("server started on port"+ PORT));