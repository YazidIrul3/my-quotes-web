const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema(
  {
    quotes: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const quotesModel = new mongoose.model("Quote", quotesSchema);

module.exports = quotesModel;
