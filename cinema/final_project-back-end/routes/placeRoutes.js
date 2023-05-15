const router = require("express").Router();
const { placeModel } = require("../models");

router.post("/create", async ({ body }, res, next) => {
  try {
    console.log(body);
    const created = await placeModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, msg: err.msg });
  }
});

router.get("/getAll", async function (req, res, next) {
  try {
    const places = await placeModel.find();
    res.json(places);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

router.get("/getPlace/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const place = await placeModel.findById(id);
    res.json(place);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

module.exports = router;
