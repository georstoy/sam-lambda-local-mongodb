"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
let response;
exports.lambdaHandler = async () => {
    try {
        const url = "mongodb://potrebitel:parola@localhost:27017";
        console.log("about to establish a connection...");
        const client = await mongodb_1.MongoClient.connect(url, { useUnifiedTopology: true });
        console.log(client);
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successful connection",
                client,
            }),
        };
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return response;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBQ3RDLElBQUksUUFBUSxDQUFDO0FBRWIsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLElBQUksRUFBRTtJQUMvQixJQUFJO1FBQ0EsTUFBTSxHQUFHLEdBQUcsNkNBQTZDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sTUFBTSxHQUFnQixNQUFNLHFCQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixRQUFRLEdBQUc7WUFDUCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxNQUFNO2FBQ1QsQ0FBQztTQUNMLENBQUM7S0FDTDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLEdBQUcsQ0FBQztLQUNkO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xubGV0IHJlc3BvbnNlO1xuXG5leHBvcnRzLmxhbWJkYUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXJsID0gXCJtb25nb2RiOi8vcG90cmViaXRlbDpwYXJvbGFAbG9jYWxob3N0OjI3MDE3XCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWJvdXQgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbi4uLlwiKTtcbiAgICAgICAgY29uc3QgY2xpZW50OiBNb25nb0NsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJsLCB7IHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coY2xpZW50KTtcbiAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTdWNjZXNzZnVsIGNvbm5lY3Rpb25cIixcbiAgICAgICAgICAgICAgICBjbGllbnQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59O1xuIl19