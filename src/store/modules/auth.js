import { loginUser, registerUser } from '../../services/auth.service'

const initialState = {
    user: null,
    token: '',
}

export default {
    namespaced: true,
    state: { ...initialState },
    getters: {
        isLoggedIn(state) {
            return Boolean(state.token)
        }
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = userData
        },
        SET_TOKEN(state, token) {
            state.token = token
        },
    },
    actions: {
        async login({ commit }, payload) {
            const { data } = await loginUser(payload)
            const { user, token } = data

            commit('SET_USER_DATA', user)
            commit('SET_TOKEN', token)
        },
        async register({ commit }, payload) {
            const { data } = await registerUser(payload)
            const { user, token } = data

            commit('SET_USER_DATA', user)
            commit('SET_TOKEN', token)
        },
    }
}