
const express = require('express');
const app = express();

const cors = require("cors");

const port = process.env.PORT || 5050;

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "hello server running" })
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});