const express = require("express");
const p = 3000;
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors("*"));

// makes static is a middleware
// exposes my public folder so people can use it
app.use('/public', express.static("public"));

// custom middleware to intercept
app.use( (req, res, next) =>  {
	console.log("hi")
	next()
})

app.get("/", function (req, res) {
	res.send("expressPicture");
});

app.get("/random", function (req, res) {
	res.send("random path");
});

app.listen(p, function () {
	console.log(`Server started on localhost:${p}`);
});
