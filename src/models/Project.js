const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  createDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  employees: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Employees" },
  ],
  clients: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Clients" },
  ],
  comment: { type: String, default: "No Comment!" },
});

module.exports = mongoose.model("Projects", ProjectSchema);
