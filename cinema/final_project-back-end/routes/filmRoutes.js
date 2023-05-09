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

  module.exports = router