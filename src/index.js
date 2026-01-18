import Fastify from 'fastify';
import app from './app.js';

const fastify = Fastify({ logger: true }); //logger true krne se har request ka log automatically milta hai.

const PORT = 3000;

fastify.register(app);

fastify.listen({port: PORT}, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);//current running program ko turant band karne
    }
    console.log(`Server up at port ${PORT}`);
});

