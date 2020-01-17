import { MongoClient } from "mongodb";

export interface ISuccessResponse {
    statusCode: number;
    body: string;
}
export interface IErrorResponse {
    error: string;
    message: string;
}
let response: ISuccessResponse;

export const lambdaHandler = async (): Promise<ISuccessResponse | IErrorResponse> => {
    try {
        const url = "mongodb://potrebitel:parola@localhost:27017";
        console.log("about to establish a connection to MongoDb...");
        const client: MongoClient = await MongoClient.connect(url, { useUnifiedTopology: true });
        console.log(client);
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successful connection",
                client,
            }),
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};
