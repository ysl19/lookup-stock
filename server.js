//basic express packages/library
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");

app.use(cors());
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  console.log('connecting to homepage');
});

app.get('/stock', (request, response) => {
  const { ticker, date } = request.query;
  
  const polyUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${date}/${date}?apiKey=7EGJa7g4jknAsOzAVg7lvnMXYJwSIRol`
  axios.get(polyUrl)
    .then(polyData => {
      const stockData = polyData.data.results[0];
      const {o, h, l, c, v} = stockData;
      response.json({
        ticker,
        date,
        open: o.toFixed(2),
        high: h.toFixed(2),
        low: l.toFixed(2),
        close: c.toFixed(2),
        volume: v.toFixed(2)
      })
      
    })
    .catch(error => {
      console.log(error);
      response.status(500).send('Error getting data from Polygon.io API');
    });
});
//I need to connect server with front end.
// app.get('/:ticker', (req, res) => {
//   const { ticker } = req.params;
//   const polyUrl = `https://api.polygon.io/v1/open-close/${ticker}/2023-01-09?adjusted=true&apiKey=7EGJa7g4jknAsOzAVg7lvnMXYJwSIRol`

//   axios.get(polyUrl)
//   .then(response => {
//     const data = response.data;
//     res.json(data);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).send('Error getting data from Polygon.io API');
//   });
// });



//basic mongoDB connection
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://stock:stock@cluster0.fjp0jdf.mongodb.net/?retryWrites=true&w=majority";

app.listen(process.env.PORT || 8080, () => {
  console.log(`Express is running on PORT ${process.env.PORT || 8080}`);
});

// MongoClient.connect(connectionString, { useUnifiedTopology: true })
//   .then((client) => {
//     console.log("Connected to MongoDB");

//     const db = client.db("stock-info");

//     console.log(db.namespace);
//     const stocksCollection = db.collection("stocks");

//     app.post("/api/stocks", (req, res) => {
//       const ticketNameee = req.body.ticketName;
//       stocksCollection
//         .insertOne(req.body)
//         .then((result) => {

//           console.log(`Inserted ${ticketNameee} into the database`);
//           res.redirect("/");
//         })
//         .catch((err) => console.error(err));
//     });

//     app.listen(process.env.port || 8080, () => {
//       console.log(
//         `Create a server that browser can connect to at PORT ${
//           process.env.port || 8080
//         }`
//       );
//     });
//   })
//   .catch((err) => {
//     console.log(`you have an error ${err}`);
//   });

