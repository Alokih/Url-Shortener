import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import { nanoid } from "nanoid";
import Url from "../Models/url.js";

const router = express.Router();

router.post("/createShortUrl", async (req, res) => {
    const originalUrl = req.body;

    const baseUrl = process.env.BASE_URL;

    const urlId = nanoid();

    try {
        let url = await Url.findOne({ originalUrl });

        if (url) {
            res.json(url);
        } else {
            const shortUrl = `${baseUrl}/${urlId}`;

            url = new Url({
                urlId,
                originalUrl,
                shortUrl,
            });

            await url.save();
            res.json(url);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Server error");
    }
});

export default router;
