import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import user from "@/store/modules/user"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexPersist = new VuexPersist({
    key: 'boost-app',
    storage: window.localStorage
})

export default new Vuex.Store({
    modules: {
        user
    },
    strict: debug,
    plugins: [vuexPersist.plugin]
})