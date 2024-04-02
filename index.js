import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import urlRoute from "./Routes/url.js";

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 6001;

app.use(cors());
app.use(Express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Hey There !");
});

app.use("/api", urlRoute);

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
