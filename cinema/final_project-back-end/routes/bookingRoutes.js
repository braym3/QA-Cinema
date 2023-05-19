const router = require("express").Router();
const { bookingModel } = require("../models");

router.post("/createBooking", async ({ body }, res, next) => {
  try {
    console.log(body);
    const created = await bookingModel.create(body);
    res.status(201).json(created);
  } catch (err) {
    return next({ status: 500, msg: err.msg });
  }
});

router.get("/getBooking", async function (req, res, next) {
  try {
    const booking = await bookingModel.find();
    res.json(booking);
    res.status(200);
  } catch (err) {
    return next({ status: 404, msg: err.msg });
  }
});

router.patch("/updateBooking/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const original = await bookingModel.findById(id);
    console.log(req.body.status);
    console.log(original.status);
    original.status = req.body.status;
    await original.save();
    res.json(original);
  } catch (err) {
    return next({ message: err.msg, status: 404 });
  }
});

module.exports = router;
