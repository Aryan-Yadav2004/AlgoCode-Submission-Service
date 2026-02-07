import submissionQueueProducer from "../producers/submissionQueueProducer.js";
import InternalServerError from "../errors/internalServerError.js";
import { fetchProblemDetails } from "../apis/problemAdminApi.js";
class SubmissionService {
    constructor (submissionRepository) {
        //inject here
        this.submissionRepository = submissionRepository;
    }
    
    async addSubmission(submissionPayload) {
        // Hit the problem admin service and fetch the problem details
        const problemId = submissionPayload.problemId;
        const problemAdminApiResponse = await fetchProblemDetails(problemId);
        
        if(!problemAdminApiResponse) {
            throw new InternalServerError({});
        }

        const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());

        submissionPayload.code = languageCodeStub.startSnippet + '\n\n' + submissionPayload.code + '\n\n' + languageCodeStub.endSnippet; 

        // we are going to create the entry in db
        try {
            const submission = await this.submissionRepository.createSubmission(submissionPayload);
         
            if(!submission) {
                throw new InternalServerError("unable to create submission");
            }
            console.log("service",submission);
            const response = await submissionQueueProducer({[submission._id] : {code: submission.code, language: submission.language, inputTestCase: problemAdminApiResponse.data.testCases[0].input, outputTestCase: problemAdminApiResponse.data.testCases[0].output}});
            console.log("queue", response);
            return {submission};
        } catch (error) {
            console.log(error);
            return {error: error};
        }
    }  
}
export default SubmissionService;