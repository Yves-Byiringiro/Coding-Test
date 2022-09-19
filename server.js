const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userInterface = require("./routes/user");

// Allow connection from other sites & json (postman)
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connection  to mongodb
const uri =
  "mongodb+srv://patriniyo12:Sosisora12@cluster0.blbjh.mongodb.net/chats?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("connected to mongoDB..."))
  .catch((err) => console.error("could not connect to mongoDB...", err));

const connection = mongoose.connection;
connection.on("error", (error) => {
  console.log(error);
});

/* Main Endpoints*/
app.use("/api", userInterface);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ....`));
