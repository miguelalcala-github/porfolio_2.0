import createApiRequest from '~/api/apiRequest'

export default (ctx, inject) => {
    const apiWithAxios = createApiRequest(ctx.$axios);

    inject('api', apiWithAxios);
}