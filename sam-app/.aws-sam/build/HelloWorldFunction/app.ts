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
        /* Failed tries
        const url = "mongodb://potrebitel:parola@database:27017";

            Success tries
            (when sam local invoke --docker-network host)
            const url = "mongodb://potrebitel:parola@localhost:27017";
        */

        const url = "mongodb://potrebitel:parola@sam-lambda-local-mongodb_database_1";

        console.log("about to establish a connection to MongoDb...");
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        console.log("MongoDb connection established! ; )");

        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successful connection",
            }),
        };

    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};
