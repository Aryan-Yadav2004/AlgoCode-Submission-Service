// TODO: Add validation layer
async function createSubmission(req, res) {
    console.log("controller",req.body)
    const response = await this.submissionService.addSubmission(req.body);
    return res.code(201).send({
        error: {},
        data: response,
        success: true,
        message: 'created submission successfully'
    });
};

export { createSubmission };