const router = require("express").Router();
const { discussionModel } = require("../models");

router.get("/getAll", async function (req, res, next) {
  try {
    const discussions = await discussionModel.find();
    res.json(discussions);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

router.post("/createDiscussion", async ({ body }, res, next) => {
  try {
    const created = await discussionModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, msg: "yeehaw" });
  }
});

module.exports = router;
