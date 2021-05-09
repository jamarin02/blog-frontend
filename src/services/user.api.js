import { AXIOS } from './api'

export const postLogin = (email, password) => {
    return AXIOS.post('/login', { email, password})
}

export const getUser = (id) => {
    return AXIOS.get(`/user/${id}`)
}