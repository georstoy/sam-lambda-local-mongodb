import { MongoClient } from "mongodb";
let response;

exports.lambdaHandler = async () => {
    try {
        const url = "mongodb://potrebitel:parola@localhost:27017";
        console.log("about to establish a connection...");
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
