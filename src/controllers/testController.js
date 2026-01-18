import * as testService from '../services/testService.js';

async function pingRequest(req, res) {
    const response = await this.testService.pingCheck();
    return res.send({data: response});
}

export { pingRequest };