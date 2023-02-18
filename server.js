const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/')

app.listen(process.env.PORT || 8080, () => {
  console.log(`Express is running on PORT ${process.env.PORT || 8080}`)
})