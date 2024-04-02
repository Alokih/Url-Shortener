import express from "express";
import cors from "cors";
import mongoose from "mongoose";

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 6001;

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(
        app.listen(PORT, () => {
            console.log(`Server is running on PORT:${PORT}`);
        })
    )
    .catch((err) => {
        console.log("Connection Failed ! ", err);
    });
