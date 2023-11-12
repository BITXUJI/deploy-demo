import { ErrorHandler } from "@angular/core";

export class AppErrorHandler extends ErrorHandler {
    override handleError(error: any): void {
        alert('An unexpected error occurred.');
        console.log(error);
    }
}