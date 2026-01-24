import { createSubmission } from "../../../controllers/submissionController.js";

async function submissionRoutes(fastify, options) {
    fastify.post('/', createSubmission);
}

export default submissionRoutes;