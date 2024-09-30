// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://diptesh_database:diptesh@cluster0.frarbfd.mongodb.net/kaushal';
// // const mongoURI = 'mongodb://localhost:27017/short-url'

// const connectDB = async () => {
//   try {
//       await mongoose.connect(mongoURI, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//       });
//       console.log('MongoDB connected...');
//   } catch (err) {
//       console.error('MongoDB connection error:', err);
//       process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
async function connectToMongoDB(url) {
  return mongoose.connect(url);
}

module.exports = {
  connectToMongoDB,
};