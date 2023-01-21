import { STATUS } from "./enums";

export namespace Helper {

    export function getStatusMessage(status: STATUS): string {
        let _result = "";
        switch (status) {
            case STATUS.Error:
                _result = "Error";
                break;
            case STATUS.Success:
                _result = "Success";
                break;
            case STATUS.Warning:
                _result = "Warning";
                break;
            // case STATUS.UnprocessableModel:
            //     _result = "Unprocessable model";
            //     break;
        }
        return _result;
    }
}