const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/school", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err.message));
