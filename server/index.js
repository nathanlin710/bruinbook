const express = require("express");
const app = express();
const PORT = 3001;

app.get('/api', (req, res) => {
    res.json('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})