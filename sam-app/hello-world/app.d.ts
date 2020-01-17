export interface ISuccessResponse {
    statusCode: number;
    body: string;
}
export interface IErrorResponse {
    error: string;
    message: string;
}
export declare const lambdaHandler: () => Promise<ISuccessResponse | IErrorResponse>;
