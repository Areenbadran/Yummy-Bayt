const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const router = require("./routes");
const app = express();
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/public")));

// app.use("/", router.router);

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.listen(3005, () => {
  console.log("server listning in port 3000");
});
