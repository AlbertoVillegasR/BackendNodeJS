import { STATUS } from "./enums";
import { Helper } from "./helper";

export class ResponseModel {
    status: STATUS;
    message: string;
    data: any;
    validate: any;
    constructor() {
        this.status = STATUS.Success;
        this.message = Helper.getStatusMessage(STATUS.Success);
    }
}