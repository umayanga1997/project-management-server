const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    default: "Individual",
  },
  mobileNo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Clients", ClientSchema);
