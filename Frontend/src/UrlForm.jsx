import { useState } from "react";
import PropTypes from "prop-types";

const UrlForm = ({ onSubmit }) => {
    const [url, setUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(url);
        setUrl("");
    };

    return (
        <form onSubmit={handleSubmit}>
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

UrlForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default UrlForm;
