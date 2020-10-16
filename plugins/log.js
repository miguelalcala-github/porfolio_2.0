export default (ctx, inject) => {
    const logIn = async (credentials) => {
        return await ctx.$api.getUser(credentials)
             .then( user => {
                     user.password = credentials.password 
                     ctx.$cookies.set('authenticatedUser', JSON.stringify(user), { maxAge: 60 * 60 * 24, sameSite: "Lax" })
                     ctx.store.commit('setAuth', user)
                     return user
             })
             .catch(error => {

                 throw error
             })
    }
    
    const logOut = () => {
        ctx.$cookies.remove('authenticatedUser');
        ctx.store.commit('removeAuth')
    }

    inject('login', logIn)
    inject('logout', logOut) 
}