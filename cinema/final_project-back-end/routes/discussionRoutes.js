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

module.exports = router;
