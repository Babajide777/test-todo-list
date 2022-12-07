const mongoose = require("mongoose");

exports.connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected.");
    })
    .catch((error) => {
      console.log(`Error connecting to database /n ${error}`);
      throw new Error(error);
    });
};

exports.closeDBConnection = () => {
  return mongoose.disconnect();
};
