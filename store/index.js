
export const state = () => ({
        authenticatedUser: null,
    })
    
export const mutations = {
    setAuth(state, user) {
        state.authenticatedUser = user
    },
    removeAuth(state) {
        state.authenticatedUser = null
    }
  }
  