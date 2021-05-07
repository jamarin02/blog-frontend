import { AXIOS } from './api'

export const postLogin = (username, password) => {
    return AXIOS.post('/login', { username, password})
}

export const getUser = (id) => {
    return AXIOS.get(`/user/${id}`)
}