const express = require("express");
const cors = require("cors");
const app = express();
import "dotenv/config";

print();

const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static("../frontend/public"));

//const PORT = 8000;

app.get("/message", (req, res) => {
	fetch("https://www.jcquotes.com/api/quotes/random")
		.then((data) => (data = data.json()))
		.then((raw) => res.json({ message: `${raw["text"]} - James Clear` }));
});

app.listen(PORT);
