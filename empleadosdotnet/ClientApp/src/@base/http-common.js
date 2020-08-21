import axios from "axios";

export default axios.create({
    baseUrl : "https://localhost:5001/api",
    headers: {
        "Content-Type": "application/json"
    }
});