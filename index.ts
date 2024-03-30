const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 6001;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});