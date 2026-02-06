import submissionQueueProducer from "../producers/submissionQueueProducer.js";
import InternalServerError from "../errors/internalServerError.js";
class SubmissionService {
    constructor (submissionRepository) {
        //inject here
        this.submissionRepository = submissionRepository;
    }
    
    async addSubmission(submissionPayload) {
        try {
            const submission = await this.submissionRepository.createSubmission(submissionPayload);
        
            if(!submission) {
                throw new InternalServerError("unable to create submission");
            }
            console.log("service",submission);
            const response = await submissionQueueProducer(submission);
            console.log("queue", response);
            return {submission};
        } catch (error) {
            console.log(error);
            return {error: error};
        }
    }  
}
export default SubmissionService;