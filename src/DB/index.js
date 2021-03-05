const mongoose = require("mongoose");

const db =
  "mongodb+srv://maeManajer:ezequiel@cluster0.4mmvz.mongodb.net/Mae-manajer";

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("DB Connect");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
