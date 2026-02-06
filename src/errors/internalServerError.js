import { StatusCodes } from "http-status-codes";
import BaseError from "./baseError";


class InternalServerError extends BaseError{
    constructor(details){
        super("Internal Server Error", StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong!", details);
    }
};

export default InternalServerError;