export default $axios => ({
    // Disabled
    // createUser(payload) {
    //     return $axios.$post(`/users`, payload)
    // },

    async getUser(credentials) {
        const authorization = encodeCredentials(credentials);
        return await $axios.$get(`/users`,  {headers: authorization})
        .then(response => {
            return response.user;
        })
        .catch(err => {
            console.log(err)
            if (err.response.status === 401) { // access denied to show validation errors
                const error = new Error(err.response.statusText)
                error.status = err.response.status
                throw  error;
            } else {
                throw new Error(handlePageError(err.response.status));
              }
        })
    },
    
    async createPost(payload, credentials) {
        const authorization = encodeCredentials(credentials);
        return await $axios.$post(`/post`, payload, {headers: authorization})
            .then(response => {
                return response.location;
            })
            .catch(err => {
                if (err.response.status === 400) {
                    const error = new Error(err.response.statusText)
                    error.status = err.response.status
                    error.errors = [...err.response.data.errors]
                    throw error; 
                } else {
                    throw new Error(handlePageError(err.response.status));
                }
            })
    },

    async showPost(id) {
        return $axios.$get(`/post/${id}`)
    },
  
    async show() {
        return await $axios.$get(`/post`)
            .then(response => {
                return response
            })
            .catch(err => {
                throw new Error(handlePageError(err.response.status));
            })
    },
  
    async updatePost(payload, id, credentials) {
        const authorization = encodeCredentials(credentials);
        return await $axios.$put(`/post/${id}`, payload, {headers: authorization})
            .then(response => response)
            .catch(err => {
                if (err.response.status === 400) {
                    const error = new Error(err.response.statusText)
                    error.status = err.response.status
                    error.errors = [...err.response.data.errors]
                    throw error; 
                } else {
                    throw new Error(handlePageError(err.response.status));
                }
            })
    },
  
    async deletePost(id, credentials) {
        const authorization = encodeCredentials(credentials);
        return await $axios.$delete(`/post/${id}`, {headers: authorization})
            .then(response => response)
            .catch(err => {
                throw new Error(handlePageError(err.response.status));
            })
    },


  })
  
  function encodeCredentials(credentials){
    const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`)
   return { 'Authorization': `Basic ${encodedCredentials}`}
}

  /**
   * Error handler return path depending on response's status code
   * @param {Integer} statusCode 
   */
  function handlePageError(statusCode) {
    const code = statusCode
    if (code === 500) {
      return "/error"
    } else if (code === 403 ){
        return "/forbidden"
      } else if (code === 404) {
          return "/notfound"
    }
  }