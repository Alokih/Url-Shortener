import { useState } from "react";

const UrlForm = () => {
    const [url, setUrl] = useState("");

    return (
        <form>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter Url Here ..."
                required
            />
            <button type="submit">Convert</button>
        </form>
    );
};

export default UrlForm;
