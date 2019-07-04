import * as axios from "axios/index";

const instance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:8080/`,
});

export default instance;