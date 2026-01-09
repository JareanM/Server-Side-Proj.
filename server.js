import fetchAPI from "./script.mjs";
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Hello World");
	res.end();	
}); 

app.get("/api/data", async (req, res) => {
	try {
		const data = await fetchAPI();
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
