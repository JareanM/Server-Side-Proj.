const express = require("express");
const app = express();
const PORT = 3000;

const fetchAPI = require(./script);

app.get("/", (req, res) => {
	res.send("Server is running");          //confirm server runs
}); 

app.get("/api/data", async (req, res) => {
	try {
		const data = await fetchFromAPI();
		res.json(data);
	} catch (error) {
		res.status(500).json({
			error: "Failed to fetch data from external API",
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});