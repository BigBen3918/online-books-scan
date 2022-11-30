import axios from "axios";
import { API_URL } from "../config.json";

const Action = axios.create({
    baseURL: API_URL,
});

export default Action;
