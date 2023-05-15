const router = require("express").Router();
const { classificationModel } = require("../models");

router.post("/create", async ({ body }, res, next) => {
  try {
    console.log(body);
    const created = await classificationModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, msg: err.msg });
  }
});

router.get("/getAll", async function (req, res, next) {
  try {
    const places = await classificationModel.find();
    res.json(places);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

router.get("/getClassification/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const classification = await classificationModel.findById(id);
    res.json(classification);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

module.exports = router;
