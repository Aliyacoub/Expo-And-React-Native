import axios from "axios";
import {API_URL} from "./urls";

const instance =axios.create({
    baseURL:API_URL,
});


export default instance;