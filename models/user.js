const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema(
    {
      first_name: {
        type: String,
        required: true,
        unique: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      gender: {
        type: String,
        required: true,
      },
      job_title: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  
  const USER = mongoose.model("user", urlSchema);

  module.exports = USER