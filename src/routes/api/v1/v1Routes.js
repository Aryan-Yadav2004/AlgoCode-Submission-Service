import testRoute from "./test/testRoutes.js";

async function  v1Routes(fastify, options) {
    fastify.register(testRoute, {prefix: '/test'});
}

export default v1Routes;