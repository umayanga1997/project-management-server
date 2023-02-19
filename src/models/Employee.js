const mongoose = require("mongoose");

const JOBS = ["CASHIER", "MANAGER", "BARMEN"];

var EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: [10, "Please provide your name with min character 10."],
  },
  lastName: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
    enum: JOBS,
    required: true,
  },
});

module.exports = mongoose.model("Employees", EmployeeSchema);
