const { Schema, model } = require("mongoose");

const filmSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  runtime: { type: Number, required: true },
  rating: { type: String, required: true },
  filmPoster: { type: String, required: true },
  releaseDate: { type: Number, required: true },
  director: { type: String, required: true },
  cast: { type: String, required: true },
});

const discussionSchema = new Schema({
  subject: { type: String, required: true },
  discussion: [
    {
      email: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
});

// This model is similar to a DAO
const filmModel = model("films", filmSchema);
const discussionModel = model("discussions", discussionSchema);

module.exports = {
  filmModel,
  discussionModel,
};
