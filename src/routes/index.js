const express = require("express");
const router = express.Router();
const itemRoutes = require("./itemRoutes");

// Routing untuk /api/items
router.use("/items", itemRoutes);

module.exports = router;
