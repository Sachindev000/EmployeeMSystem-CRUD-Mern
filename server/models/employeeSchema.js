const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  jobrole: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const employess = new mongoose.model("employees", employeeSchema);

module.exports = employess;
