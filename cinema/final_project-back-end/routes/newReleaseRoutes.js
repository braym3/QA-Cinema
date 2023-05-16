const router = require("express").Router();
const { newReleaseModel } = require("../models");

router.post("/create", async ({ body }, res, next) => {
  try {
    console.log(body);
    const created = await newReleaseModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, msg: err.msg });
  }
});

router.get("/getAll", async function (req, res, next) {
  try {
    const newReleases = await newReleaseModel.find();
    res.json(newReleases);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

router.get("/getNewRelease/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const newRelease = await newReleaseModel.findById(id);
    res.json(newRelease);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

module.exports = router;
