import fastifyPlugin from 'fastify-plugin';//helps to create plugins
import cors from '@fastify/cors';
import servicePlugin from './services/servicePlugin.js';
import * as apiRoutes from './routes/api/apiRoutes.js'
/**
 * 
 * @param {Fastify object} fastify 
 * @param {*} options 
 */

async function app(fastify, options) { 
    fastify.register(cors);
    // register test routes
    fastify.register(apiRoutes, {prefix: '/api'});

    fastify.register(servicePlugin);
}

export default fastifyPlugin(app);