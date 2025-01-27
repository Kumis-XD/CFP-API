const app = require("./app");
const port = 3000;

// Menjalankan server
app.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});
