const router = require("express").Router();
const { screenModel } = require("../models");

router.post("/create", async ({ body }, res, next) => {
  try {
    console.log(body);
    const created = await screenModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, msg: err.msg });
  }
});

router.get("/getAll", async function (req, res, next) {
  try {
    const screens = await screenModel.find();
    res.json(screens);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

router.get("/getScreen/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const screen = await screenModel.findById(id);
    res.json(screen);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

module.exports = router;
