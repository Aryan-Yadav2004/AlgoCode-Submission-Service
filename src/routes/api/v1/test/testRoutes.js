import * as testController from '../../../../controllers/testController.js'

async function testRoute(fastify, options) {
    fastify.get('/ping', testController.pingRequest);
}

export default testRoute;