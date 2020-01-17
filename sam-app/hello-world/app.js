"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
let response;
exports.lambdaHandler = async () => {
    try {
        /* Failed tries
        const url = "mongodb://potrebitel:parola@database:27017";
        */
        const url = "mongodb://potrebitel:parola@localhost:27017";
        console.log("about to establish a connection to MongoDb...");
        await new Promise(resolve => setTimeout(resolve, 10000));
        const clientPromise = mongodb_1.MongoClient.connect(url, { useUnifiedTopology: true });
        const client = await clientPromise;
        console.log(client);
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successful connection",
                client,
            }),
        };
        // return response;
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return response;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBVXRDLElBQUksUUFBMEIsQ0FBQztBQUVsQixRQUFBLGFBQWEsR0FBRyxLQUFLLElBQWdELEVBQUU7SUFDaEYsSUFBSTtRQUNBOztVQUVFO1FBQ0YsTUFBTSxHQUFHLEdBQUcsNkNBQTZDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQzdELE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFekQsTUFBTSxhQUFhLEdBQUcscUJBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUU3RSxNQUFNLE1BQU0sR0FBZ0IsTUFBTSxhQUFhLENBQUM7UUFFaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixRQUFRLEdBQUc7WUFDUCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxNQUFNO2FBQ1QsQ0FBQztTQUNMLENBQUM7UUFDRixtQkFBbUI7S0FFdEI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxHQUFHLENBQUM7S0FDZDtJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU3VjY2Vzc1Jlc3BvbnNlIHtcbiAgICBzdGF0dXNDb2RlOiBudW1iZXI7XG4gICAgYm9keTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBJRXJyb3JSZXNwb25zZSB7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5sZXQgcmVzcG9uc2U6IElTdWNjZXNzUmVzcG9uc2U7XG5cbmV4cG9ydCBjb25zdCBsYW1iZGFIYW5kbGVyID0gYXN5bmMgKCk6IFByb21pc2U8SVN1Y2Nlc3NSZXNwb25zZSB8IElFcnJvclJlc3BvbnNlPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgLyogRmFpbGVkIHRyaWVzXG4gICAgICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYjovL3BvdHJlYml0ZWw6cGFyb2xhQGRhdGFiYXNlOjI3MDE3XCI7XG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYjovL3BvdHJlYml0ZWw6cGFyb2xhQGxvY2FsaG9zdDoyNzAxN1wiO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFib3V0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gTW9uZ29EYi4uLlwiKTtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDAwKSk7XG5cbiAgICAgICAgY29uc3QgY2xpZW50UHJvbWlzZSA9IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJsLCB7IHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KTtcblxuICAgICAgICBjb25zdCBjbGllbnQ6IE1vbmdvQ2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjbGllbnQpO1xuICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN1Y2Nlc3NmdWwgY29ubmVjdGlvblwiLFxuICAgICAgICAgICAgICAgIGNsaWVudCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2U7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59O1xuIl19