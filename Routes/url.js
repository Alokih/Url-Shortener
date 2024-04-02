import express from "express";
require(dotenv.config());
import nanoId from "nanoid";
import Url from "../Models/url.js";

const router = express.Router();

router.post("/createShortUrl", async (req, res) => {
    const originalUrl = req.body;

    const baseUrl = process.env.BASE_URL;

    const urlId = nanoId();

    try {
        let url = await Url.findOne({ originalUrl });

        if (url) {
            res.json(url);
        } else {
            const shortUrl = `${baseUrl}/${urlId}`;

            url = new Url({
                originalUrl,
                shortUrl,
                urlId,
            });

            await url.save();
            res.json(url);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Server error");
    }
});

module.exports = router;