const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const errorHandler = require('./middleware/error');


// Import Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes')

const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cookieParser());
app.use(cors());



//Routes MiddleWare
app.use('/api',authRoutes);
app.use('/api',userRoutes);

// Custom Error Middleware
app.use(errorHandler);

// Port listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`The App is Running on Port ${PORT}`);
});

// Database Connetion
const API = process.env.DATABASE;
mongoose
  .connect(API, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to mongoDb");
  })
  .catch((err) => {
    console.log(err);
  });
