const router = require('express').Router();
const { filmModel } = require('../models');

router.post('/create', async ({ body }, res, next) => {
    try {
      console.log(body)
      const created = await filmModel.create(body);
      res.status(201).json(created);
    } catch (err) {
      return next({ status: 500, msg: err.msg });
    }
  });

  router.get('/getAll', async function (req, res, next) {
    try {
      const films = await filmModel.find();
      res.json(films);
    } catch (err) {
      return next({ status: 404, msg: err.msg });
    }
  });
  module.exports = router