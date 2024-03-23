import axios from "axios"

// export const url="http://192.168.1.246:8080/"
export const url="http://localhost:8080/"

const AxiosAPI=axios.create({
    baseURL:url
})
export default AxiosAPI;
