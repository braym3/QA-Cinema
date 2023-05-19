const { Schema, model } = require("mongoose");

const filmSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  runtime: { type: Number, required: true },
  classification: { type: String, required: true },
  classificationURL: { type: String, required: true },
  filmPoster: { type: String, required: true },
  releaseDate: { type: Number, required: true },
  director: { type: String, required: true },
  cast: { type: String, required: true },
  userRating: {
    aggregate: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
});

const discussionSchema = new Schema({
  subject: { type: String, required: true },
  film: { type: String, required: true },
  filmId: { type: String, required: true },
  discussion: [
    {
      email: { type: String, required: true },
      comment: { type: String, required: true },
      rating: { type: Number, required: false },
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
  link: { type: String, required: true },
});

const screenSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  mainImage: { type: String, required: true },
  mainImageAlt: { type: String, required: true },
  mainImageDescription: { type: String, required: true },
  subImages: [
    {
      image: { type: String, required: true },
      alt: { type: String, required: true },
    },
  ],
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const bookingSchema = new Schema({
  bookerName: { type: String, required: true },
  email: { type: String, required: true },
  numOfTickets: { type: Number, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  filmPoster: { type: String, required: true },
  status: { type: String, required: true },
});

const filmModel = model("films", filmSchema);
const discussionModel = model("discussions", discussionSchema);
const emailFormModel = model("emailform", emailFormSchema);
const placeModel = model("places", placeSchema);
const newReleaseModel = model("newReleases", newReleaseSchema);
const classificationModel = model("classifications", classificationSchema);
const screenModel = model("screens", screenSchema);
const bookingModel = model("bookings", bookingSchema);

module.exports = {
  filmModel,
  discussionModel,
  emailFormModel,
  placeModel,
  newReleaseModel,
  classificationModel,
  screenModel,
  bookingModel,
};
