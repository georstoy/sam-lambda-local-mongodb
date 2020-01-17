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
        // const url = "mongodb://potrebitel:parola@localhost:27017";
        const url = "mongodb://host.docker.internal:27018";
        console.log("about to establish a connection to MongoDb...");

        const clientPromise = MongoClient.connect(url, { useUnifiedTopology: true });

        const client: MongoClient = await clientPromise;

        console.log(client);
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successful connection",
                client,
            }),
        };
        // return response;

    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};
