import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import { nanoid } from "nanoid";
import Url from "../Models/url.js";

const router = express.Router();

router.post("/createShortUrl", async (req, res) => {
    const { originalUrl } = req.body;

    const baseUrl = process.env.BASE_URL;

    const urlId = nanoid(5);

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

router.get("/:urlId", async (req, res) => {
    try {
        const url = await Url.findOne({ urlId: req.params.urlId });
        if (url) {
            await url.updateOne({
                urlId: req.params.urlId,
            });

            return res.redirect(url.originalUrl);
        } else {
            res.status(404).json("Url Not Found !");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Server Error !");
    }
});

export default router;
