// task73_api_server/models/languageSchema.js

import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  scope: {
    type: [String],
    required: true,
    default: [],
  },
  duration: {
    type: String,
    required: true,
    default: "1",
  },
  difficulties: {
    type: String,
    required: true,
  },
});

const techModel = mongoose.model("techs", techSchema);

export default techModel;
