require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);

const mongoDbConnection = require("./src/config/mongoDbConnection");
const connexionRoute = require("./src/routes/connexionRoute");
const createAccountRoute = require("./src/routes/createAccountRoute");
const collaboratorsRoute = require("./src/routes/collaboratorsRoute");
const PORT = process.env.PORT || 4000;

const store = new MongoDBSession({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

module.exports = store;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      httpOnly: true,
      maxAge: 3000000,
    },
  })
);

mongoDbConnection();

app.get("/", (req, res) => {
  return res.json({ message: "Hello world" });
});

app.use(connexionRoute);
app.use(createAccountRoute);
app.use(collaboratorsRoute);

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});

// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;

//   const hashPassword = await bcrypt.hash(password, 10);

//   const newUser = new User({
//     username,
//     password: hashPassword,
//     role: "Director",
//   });

//   newUser.save();
//   res.json({ status: "ok" });
// });
