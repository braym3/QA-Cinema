const router = require('express').Router();
const { filmModel } = require('../models');

router.post('/create', async ({ body }, res, next) => {
    try {
      const created = await filmModel.create(body);
      res.status(201).json(created);
    } catch (err) {
      return next({ status: 500, msg: 'oops' });
    }
  });

  router.get('/getAll', async function (req, res, next) {
    try {
      const films = await filmModel.find();
      res.json(films);
    } catch (err) {
      return next({ status: 404, msg: 'woopsie' });
    }
  });

  module.exports = router