import { MongoClient } from "mongodb";
let response;

interface IEvent {
    name: string;
}

exports.lambdaHandler = async (event: IEvent/*, context*/) => {
    try {
        const url = "mongodb://potrebitel:parola@localhost:27017";
        const client: MongoClient = await MongoClient.connect(url, { useUnifiedTopology: true });

        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successful connection",
                // location: ret.data.trim()
            }),
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};
