const router = require("express").Router();
const { emailFormModel } = require("../models");

router.post("/create", async ({ body }, res, next) => {
  try {
    const created = await emailFormModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, msg: err.msg });
  }
});

module.exports = router;
