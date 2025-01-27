const items = require("../data/items");

// Mendapatkan semua item
const getAllItems = (req, res) => {
	res.json(items);
};

// Menambahkan item baru
const createItem = (req, res) => {
	const newItem = {
		id: items.length + 1,
		name: req.body.name,
	};
	items.push(newItem);
	res.status(201).json(newItem);
};

// Mengupdate item
const updateItem = (req, res) => {
	const id = parseInt(req.params.id);
	const item = items.find((i) => i.id === id);
	if (!item) {
		return res.status(404).json({ message: "Item tidak ditemukan" });
	}
	item.name = req.body.name;
	res.json(item);
};

// Menghapus item
const deleteItem = (req, res) => {
	const id = parseInt(req.params.id);
	const index = items.findIndex((i) => i.id === id);
	if (index === -1) {
		return res.status(404).json({ message: "Item tidak ditemukan" });
	}
	const deletedItem = items.splice(index, 1);
	res.json(deletedItem);
};

module.exports = {
	getAllItems,
	createItem,
	updateItem,
	deleteItem,
};
