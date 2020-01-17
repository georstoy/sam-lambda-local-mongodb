"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
let response;
exports.lambdaHandler = async () => {
    try {
        // const url = "mongodb://potrebitel:parola@localhost:27017";
        const url = "mongodb://host.docker.internal:27018";
        console.log("about to establish a connection to MongoDb...");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBVXRDLElBQUksUUFBMEIsQ0FBQztBQUVsQixRQUFBLGFBQWEsR0FBRyxLQUFLLElBQWdELEVBQUU7SUFDaEYsSUFBSTtRQUNBLDZEQUE2RDtRQUM3RCxNQUFNLEdBQUcsR0FBRyxzQ0FBc0MsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFFN0QsTUFBTSxhQUFhLEdBQUcscUJBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUU3RSxNQUFNLE1BQU0sR0FBZ0IsTUFBTSxhQUFhLENBQUM7UUFFaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixRQUFRLEdBQUc7WUFDUCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxNQUFNO2FBQ1QsQ0FBQztTQUNMLENBQUM7UUFDRixtQkFBbUI7S0FFdEI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxHQUFHLENBQUM7S0FDZDtJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU3VjY2Vzc1Jlc3BvbnNlIHtcbiAgICBzdGF0dXNDb2RlOiBudW1iZXI7XG4gICAgYm9keTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBJRXJyb3JSZXNwb25zZSB7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5sZXQgcmVzcG9uc2U6IElTdWNjZXNzUmVzcG9uc2U7XG5cbmV4cG9ydCBjb25zdCBsYW1iZGFIYW5kbGVyID0gYXN5bmMgKCk6IFByb21pc2U8SVN1Y2Nlc3NSZXNwb25zZSB8IElFcnJvclJlc3BvbnNlPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gY29uc3QgdXJsID0gXCJtb25nb2RiOi8vcG90cmViaXRlbDpwYXJvbGFAbG9jYWxob3N0OjI3MDE3XCI7XG4gICAgICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYjovL2hvc3QuZG9ja2VyLmludGVybmFsOjI3MDE4XCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWJvdXQgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB0byBNb25nb0RiLi4uXCIpO1xuXG4gICAgICAgIGNvbnN0IGNsaWVudFByb21pc2UgPSBNb25nb0NsaWVudC5jb25uZWN0KHVybCwgeyB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUgfSk7XG5cbiAgICAgICAgY29uc3QgY2xpZW50OiBNb25nb0NsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coY2xpZW50KTtcbiAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdWNjZXNzZnVsIGNvbm5lY3Rpb25cIixcbiAgICAgICAgICAgICAgICBjbGllbnQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbiJdfQ==