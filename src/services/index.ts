import axios from "axios";
import config from "../config.json";

const Action = axios.create({
    baseURL: config.API_URL,
});

export { Action };
