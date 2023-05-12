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

const emailFormSchema = new Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const filmModel = model("films", filmSchema);
const discussionModel = model("discussions", discussionSchema);
const emailFormModel = model("emailform", emailFormSchema);

module.exports = {
  filmModel,
  discussionModel,
  emailFormModel,
};
