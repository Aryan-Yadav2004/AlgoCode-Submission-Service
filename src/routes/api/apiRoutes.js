import v1Routes from "./v1/v1Routes.js";

async function  apiRoutes(fastify, options) {
    fastify.register(v1Routes, {prefix: '/v1'});
}

export default apiRoutes;