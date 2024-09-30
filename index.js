const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connection");
const cors = require('cors')
// const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");
const URL = require("./models/url");

const urlRoute = require("./routes/url");
// const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

const app = express();
const PORT = 8001;

app.use(cors())

connectToMongoDB(process.env.MONGODB ?? "mongodb+srv://diptesh_database:diptesh@cluster0.frarbfd.mongodb.net/short-url").then(() =>
  console.log("Mongodb connected")
);

// app.set("view engine", "ejs");
// app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", urlRoute);
app.use("/user", userRoute);
app.use("/signup",signupRoute);
app.use("/login",loginRoute)
// app.use("/", staticRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
