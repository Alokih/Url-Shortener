import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import urlRoute from "./Routes/url.js";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT || 6001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: 'https://url-shortener-xi-azure.vercel.app'
  }));

app.get("/", (req, res) => {
    res.json('Hey There !')
});

app.use("/api", urlRoute);

mongoose
    .connect(process.env.MONGO_URI)
    .then(
        app.listen(PORT, () => {
            console.log(`DB connected & Server is running on PORT:${PORT}`);
        })
    )
    .catch((err) => {
        console.log("Connection Failed ! ", err);
    });
