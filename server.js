const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userInterface = require("./routes/user");
const fileupload = require("express-fileupload");

// Allow connection from other sites & json (postman)
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(fileupload());

// Connection  to local mongo db
mongoose
  .connect("mongodb://localhost/users_db")
  .then(() => console.log("Connected to mongoDB......."))
  .catch((err) => console.error("Could not connect to mongoDB......", err));

const connection = mongoose.connection;
connection.on("error", (error) => {
  console.log(error);
});

/* Main Endpoints*/
app.use("/api", userInterface);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ....`));
