const express = require("express");
const cors = require("cors");
const connectDatabase = require("./connect");
const { User } = require("./userSchema");

const app = express();
const port = 1995;

app.use(express.json());
app.use(express.static("."));
app.use(cors());

app.get("/", (_, res) => {
	res.send("hello world");
});

app.get("/get-user", async (_, res) => {
	const data = await User.find();
	res.json({ data });
});
connectDatabase();

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
