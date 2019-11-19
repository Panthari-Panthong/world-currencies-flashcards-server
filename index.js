const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const db = require("./db")

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

db.sync({ force: true })
  .then(() => {
    console.log('Database schema updated')


  })
  .catch(console.error)
