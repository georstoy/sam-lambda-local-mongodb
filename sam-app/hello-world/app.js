"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
let response;
exports.lambdaHandler = async () => {
    try {
        /* Failed tries
        const url = "mongodb://potrebitel:parola@database:27017";

            Success tries
            (when sam local invoke --docker-network host)
            const url = "mongodb://potrebitel:parola@localhost:27017";
        */
        const url = "mongodb://potrebitel:parola@sam-lambda-local-mongodb_database_1";
        console.log("about to establish a connection to MongoDb...");
        const client = await mongodb_1.MongoClient.connect(url, { useUnifiedTopology: true });
        console.log("MongoDb connection established! ; )");
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successful connection",
            }),
        };
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return response;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBVXRDLElBQUksUUFBMEIsQ0FBQztBQUVsQixRQUFBLGFBQWEsR0FBRyxLQUFLLElBQWdELEVBQUU7SUFDaEYsSUFBSTtRQUNBOzs7Ozs7VUFNRTtRQUVGLE1BQU0sR0FBRyxHQUFHLGlFQUFpRSxDQUFDO1FBRTlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUM3RCxNQUFNLE1BQU0sR0FBRyxNQUFNLHFCQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBRW5ELFFBQVEsR0FBRztZQUNQLFVBQVUsRUFBRSxHQUFHO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSx1QkFBdUI7YUFDbkMsQ0FBQztTQUNMLENBQUM7S0FFTDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLEdBQUcsQ0FBQztLQUNkO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdWNjZXNzUmVzcG9uc2Uge1xuICAgIHN0YXR1c0NvZGU6IG51bWJlcjtcbiAgICBib2R5OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElFcnJvclJlc3BvbnNlIHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbn1cbmxldCByZXNwb25zZTogSVN1Y2Nlc3NSZXNwb25zZTtcblxuZXhwb3J0IGNvbnN0IGxhbWJkYUhhbmRsZXIgPSBhc3luYyAoKTogUHJvbWlzZTxJU3VjY2Vzc1Jlc3BvbnNlIHwgSUVycm9yUmVzcG9uc2U+ID0+IHtcbiAgICB0cnkge1xuICAgICAgICAvKiBGYWlsZWQgdHJpZXNcbiAgICAgICAgY29uc3QgdXJsID0gXCJtb25nb2RiOi8vcG90cmViaXRlbDpwYXJvbGFAZGF0YWJhc2U6MjcwMTdcIjtcblxuICAgICAgICAgICAgU3VjY2VzcyB0cmllc1xuICAgICAgICAgICAgKHdoZW4gc2FtIGxvY2FsIGludm9rZSAtLWRvY2tlci1uZXR3b3JrIGhvc3QpXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBcIm1vbmdvZGI6Ly9wb3RyZWJpdGVsOnBhcm9sYUBsb2NhbGhvc3Q6MjcwMTdcIjtcbiAgICAgICAgKi9cblxuICAgICAgICBjb25zdCB1cmwgPSBcIm1vbmdvZGI6Ly9wb3RyZWJpdGVsOnBhcm9sYUBzYW0tbGFtYmRhLWxvY2FsLW1vbmdvZGJfZGF0YWJhc2VfMVwiO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJhYm91dCB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHRvIE1vbmdvRGIuLi5cIik7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJsLCB7IHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb25nb0RiIGNvbm5lY3Rpb24gZXN0YWJsaXNoZWQhIDsgKVwiKTtcblxuICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlN1Y2Nlc3NmdWwgY29ubmVjdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH07XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59O1xuIl19