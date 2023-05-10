const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const filmRoutes = require('./routes/filmRoutes.js');

app.use('/films', filmRoutes);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status).send(err.message);
});

// End of express code
const server = app.listen(4494, () => {
  console.log(`server started on ${server.address().port}`);
});

module.exports = server;
