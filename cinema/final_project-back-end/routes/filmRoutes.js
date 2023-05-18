const router = require("express").Router();
const { filmModel } = require("../models");

router.post("/create", async ({ body }, res, next) => {
  try {
    console.log(body);
    const created = await filmModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, msg: err.msg });
  }
});

router.get("/getAll", async function (req, res, next) {
  try {
    const films = await filmModel.find();
    res.json(films);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

router.get("/getFilm/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const film = await filmModel.findById(id);
    res.json(film);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

router.patch("/addRating/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let original = await filmModel.findById(id);
    // if (!original) throw new Error("no film with that id");
    // if (!req.body.rating) throw new Error("invalid rating");
    original.userRating.aggregate += req.body.rating;
    original.userRating.quantity++;
    await original.save();
    res.json(original);
  } catch (err) {
    return next({ message: err.msg, status: 404 });
  }
});

module.exports = router;
