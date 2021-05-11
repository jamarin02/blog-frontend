const state = () => ({
    id: 0,
    username: '',
    email: '',
    authToken: '',
    isLoggedIn: false
})

const getters = {
    getId: (state) => state.id,
    getUsername: (state) => state.username,
    getEmail: (state) => state.email,
    getAuthToken: (state) => state.authToken,
    getIsLoggedIn: (state) => state.isLoggedIn
}

const actions = {
    login({commit}, payload) {
        commit('setBaseData', payload)
    },
    logout({commit}) {
        commit('clearBaseData')
    }
}

const mutations = {
    setBaseData(state, {id, username, email, authToken}) {
        state.id = id
        state.username = username
        state.email = email
        state.authToken = authToken
        state.isLoggedIn = true
    },
    clearBaseData(state) {
        state.id = null
        state.username = null
        state.email = null
        state.authToken = null
        state.isLoggedIn = false
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}