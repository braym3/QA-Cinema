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

router.patch("/addComment/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const original = await discussionModel.findById(id);
    if (!original) throw new Error("no discussion with that id");
    if (!req.body.email || !req.body.comment)
      throw new Error("invalid comment");
    original.discussion.push(req.body);
    await original.save();
    res.json(original);
  } catch (err) {
    return next({ message: err.msg, status: 404 });
  }
});

module.exports = router;
