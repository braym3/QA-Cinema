const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const filmRoutes = require("./routes/filmRoutes.js");
const discussionRoutes = require("./routes/discussionRoutes.js");
const emailFormRoutes = require("./routes/emailFormRoutes.js");
const placeRoutes = require("./routes/placeRoutes.js");
const newReleaseRoutes = require("./routes/newReleaseRoutes.js");
const classificationRoutes = require("./routes/classificationRoutes.js");
const screenRoutes = require("./routes/screenRoutes.js");

app.use("/films", filmRoutes);
app.use("/discussions", discussionRoutes);
app.use("/emailform", emailFormRoutes);
app.use("/places", placeRoutes);
app.use("/newReleases", newReleaseRoutes);
app.use("/classifications", classificationRoutes);
app.use("/screens", screenRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status).send(err.message);
});

const server = app.listen(4494, () => {
  console.log(`server started on ${server.address().port}`);
});

module.exports = server;
