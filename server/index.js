require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);

const mongoDbConnection = require("./src/config/mongoDbConnection");
const connexionRoute = require("./src/routes/connexionRoute");
const createAccountRoute = require("./src/routes/createAccountRoute");
const collaboratorsRoute = require("./src/routes/collaboratorsRoute");
const emailsRoute = require("./src/routes/emailsRoute");
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

app.use(connexionRoute);
app.use(createAccountRoute);
app.use(collaboratorsRoute);
app.use(emailsRoute);

app.get("/", (req, res) => {
  return res.json({ message: "Hello world" });
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
