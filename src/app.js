const express = require("express");
const app = express();
const routes = require("./routes");

// Middleware parsing JSON
app.use(express.json());

// Routing utama
app.use("/api", routes);

// Endpoint dasar
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

module.exports = app;
