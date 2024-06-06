import { useState } from "react";
import "./App.css";
import UrlForm from "./UrlForm";

const App = () => {
    const [shortUrl, setShortUrl] = useState("");
    const [originalUrl, setOriginalUrl] = useState("");

    const handleSubmit = async (url) => {
        try {
            const response = await fetch(
                "https://url-shortener-backend-eight.vercel.app/api/createShortUrl",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ originalUrl: url }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to shorten URL");
            }

            const data = await response.json();
            setShortUrl(data.shortUrl);
            setOriginalUrl(data.originalUrl);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="App">
            <h1>URL Shortener</h1>
            <UrlForm onSubmit={handleSubmit} />
            {shortUrl && (
                <div>
                    <p className="shortened-url">Shortened URL:</p>
                    <a href={originalUrl} target="_blank">
                        {shortUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default App;
