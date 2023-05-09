const { connectToDb } = require('./db');

async function init() {
  await connectToDb();
  require('./server');
}

init();
