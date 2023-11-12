export class AppError extends Error {
    constructor(public originalError?: any) {
        super();
    }
}