const express = require('express');
require('dotenv').config();

const app = express();
const port = 3010;

app.get('/', (_req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, jokerr!", data: ["smokerr a", "jokerr a"] });
  } else {
    res.send({ message: "Welcome, naruto!", data: ["datte", "bayo"] });
  }
});

app.listen(3010, () => console.log(`Server is running on port http://localhost:${port}`));