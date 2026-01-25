import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

// import bodyParser, { urlencoded } from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({urlencoded: true}))

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html")
});

app.post("/submit", (req, res)=> {
	console.log(req.body)
	res.send(<h1></h1>)
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});