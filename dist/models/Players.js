"use strict";

const mongoose = require("mongoose");
const PlayerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: false
  },
  score: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    default: "email@email.com"
  },
  groupID: {
    type: String,
    required: false
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = mongoose.model("Players", PlayerSchema);