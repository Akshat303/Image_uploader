const mongoose = require("mongoose");

/* // Online MongoDb Atles connetion DB
const DB =
  "mongodb+srv://akshat303sri:akshat303Sri@cluster0.orerf3q.mongodb.net/image_crud?retryWrites=true&w=majority"; */

// local MongoDb Compass
const DB = "mongodb://127.0.0.1:27017/image-upload";
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Local Database connected"))
  .catch((err) => console.log("error" + err.message));
