const express = require("express");
const router = express.Router();
const {
	getAllItems,
	createItem,
	updateItem,
	deleteItem,
} = require("../controllers/itemController");

// Mendapatkan semua item
router.get("/", getAllItems);

// Menambahkan item baru
router.post("/", createItem);

// Mengupdate item
router.put("/:id", updateItem);

// Menghapus item
router.delete("/:id", deleteItem);

module.exports = router;
