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
        */
        const url = "mongodb://potrebitel:parola@localhost:27017";
        console.log("about to establish a connection to MongoDb...");
        await new Promise((resolve) => setTimeout(resolve, 10000));

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
