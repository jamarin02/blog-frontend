const state = () => ({
    id: 0,
    username: '',
    email: '',
    authToken: ''
})

const getters = {
    getId: (state) => state.id,
    getUsername: (state) => state.username,
    getEmail: (state) => state.email,
    getAuthToken: (state) => state.authToken
}

const actions = {
    login({commit}, payload) {
        commit('setBaseData', payload)
    }
}

const mutations = {
    setBaseData(state, {id, username, email, authToken}) {
        state.id = id
        state.username = username
        state.email = email
        state.authToken = authToken
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}