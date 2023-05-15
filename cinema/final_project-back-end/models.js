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

const placeSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  offers: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
});

const newReleaseSchema = new Schema({
  src: { type: String, required: true },
  altText: { type: String, required: true },
  title: { type: String, required: true },
  caption: { type: String, required: true },
});

const classificationSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rules: { type: String, required: true },
  image: { type: String, required: true },
  fullName: { type: String, required: true },
});

const filmModel = model("films", filmSchema);
const discussionModel = model("discussions", discussionSchema);
const emailFormModel = model("emailform", emailFormSchema);
const placeModel = model("places", placeSchema);
const newReleaseModel = model("newReleases", newReleaseSchema);
const classificationModel = model("classifications", classificationSchema);

module.exports = {
  filmModel,
  discussionModel,
  emailFormModel,
  placeModel,
  newReleaseModel,
  classificationModel
};
