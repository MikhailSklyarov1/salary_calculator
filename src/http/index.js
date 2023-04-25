import axios from "axios";


export const $host = axios.create({
    baseURL:"https://isdayoff.ru/"
})