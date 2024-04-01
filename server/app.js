const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("./db/conn");

const employees = require("./models/employeeSchema");

const cors = require("cors");
const router = require("./routes/employeeRouter");

const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/employees", router);

app.listen(port, () => {
  console.log(`server started on port number${port}`);
});
