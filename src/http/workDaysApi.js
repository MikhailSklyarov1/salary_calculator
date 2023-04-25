import {$host} from "./index"


export const workDays = async (year, month) => {
    const response = await $host.get(`api/getdata?year=${year}&month=${month}&delimeter=%0A`);
    return response.data.split('\n');
}

