import submissionQueueProducer from "../producers/submissionQueueProducer.js";

class SubmissionService {
    constructor (submissionRepository) {
        //inject here
        this.submissionRepository = submissionRepository;
    }

    async addSubmission(submissionPayload) {
        const submission = await this.submissionRepository.createSubmission(submissionPayload);
        //TODO: Add error system.
        if(!submission) {
            throw {message: "Not able to create submission"};
        }
        console.log("service",submission);
        const response = await submissionQueueProducer(submission);
        console.log("queue", response);
        return {submission};
    }  
}
export default SubmissionService;