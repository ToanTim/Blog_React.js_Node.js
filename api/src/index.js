const app = require('./app');
const cors = require('cors');
const express=require('express');

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
