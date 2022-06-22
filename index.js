const connectToMongo = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();

const userDetail = require("./routes/userDetail");
const roi = require("./routes/roi");
const sliderRank = require("./routes/sliderRank");

connectToMongo();

//parse json to body
app.use(express.json());

app.use(cors());

//Available Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use('/api/userdetail', userDetail);
app.use('/api/roi', roi);
app.use('/api/sliderRank', sliderRank);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening to port:5000....");
});
