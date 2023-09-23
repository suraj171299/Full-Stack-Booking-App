const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./models/user");
const path = require("path");
const cors = require("cors");
const UserRoutes = require("./routes/user");
const app = express();

app.use(bodyParser.json({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/users", UserRoutes);

sequelize
    .sync()
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
