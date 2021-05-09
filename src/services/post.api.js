import { AXIOS } from './api'

export const getPosts = () => {
    return AXIOS.get(`/post/`)
}