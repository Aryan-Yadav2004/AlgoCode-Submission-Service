import Submission from "../models/submissionModel.js";

class SubmissionRepository {
    constructor() {
        this.submissionModel = Submission;
    }

    async createSubmission(submission) {
        console.log("repository", submission);
        const response = await this.submissionModel.create(submission);
        return response;
    }
}

export default SubmissionRepository;