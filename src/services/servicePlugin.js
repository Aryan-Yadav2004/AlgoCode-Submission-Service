import TestService from './testService.js';
import fastifyPlugin from 'fastify-plugin';
async function servicePlugin(fastify, options) {
    fastify.decorate('testService', new TestService());
}

export default fastifyPlugin(servicePlugin);