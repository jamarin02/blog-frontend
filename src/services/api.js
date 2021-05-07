import axios from 'axios'

export const AXIOS = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})