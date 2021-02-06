import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        // common error handring
        console.log('ERROR: ' + JSON.stringify(error));
    }
}