"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
let response;
exports.lambdaHandler = async () => {
    try {
        /* Failed tries
        const url = "mongodb://potrebitel:parola@localhost:27017";
        const url = "mongodb://potrebitel:parola@0.0.0.0:27017";
        const url = "mongodb://potrebitel:parola@database:27017";

            Success tries
                # when sam local invoke --docker-network host
            const url = "mongodb://potrebitel:parola@localhost:27017";

                # when sam local invoke --docker-network sam-lambda-local-mongodb_localLambdaNetwork
            const url = "mongodb://potrebitel:parola@sam-lambda-local-mongodb_database_1";

        */
        const url = "mongodb://potrebitel:parola@192.168.0.34:27017";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBVXRDLElBQUksUUFBMEIsQ0FBQztBQUVsQixRQUFBLGFBQWEsR0FBRyxLQUFLLElBQWdELEVBQUU7SUFDaEYsSUFBSTtRQUNBOzs7Ozs7Ozs7Ozs7VUFZRTtRQUVGLE1BQU0sR0FBRyxHQUFHLGdEQUFnRCxDQUFDO1FBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUM3RCxNQUFNLE1BQU0sR0FBRyxNQUFNLHFCQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBRW5ELFFBQVEsR0FBRztZQUNQLFVBQVUsRUFBRSxHQUFHO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSx1QkFBdUI7YUFDbkMsQ0FBQztTQUNMLENBQUM7S0FFTDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLEdBQUcsQ0FBQztLQUNkO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdWNjZXNzUmVzcG9uc2Uge1xuICAgIHN0YXR1c0NvZGU6IG51bWJlcjtcbiAgICBib2R5OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElFcnJvclJlc3BvbnNlIHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbn1cbmxldCByZXNwb25zZTogSVN1Y2Nlc3NSZXNwb25zZTtcblxuZXhwb3J0IGNvbnN0IGxhbWJkYUhhbmRsZXIgPSBhc3luYyAoKTogUHJvbWlzZTxJU3VjY2Vzc1Jlc3BvbnNlIHwgSUVycm9yUmVzcG9uc2U+ID0+IHtcbiAgICB0cnkge1xuICAgICAgICAvKiBGYWlsZWQgdHJpZXNcbiAgICAgICAgY29uc3QgdXJsID0gXCJtb25nb2RiOi8vcG90cmViaXRlbDpwYXJvbGFAbG9jYWxob3N0OjI3MDE3XCI7XG4gICAgICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYjovL3BvdHJlYml0ZWw6cGFyb2xhQDAuMC4wLjA6MjcwMTdcIjtcbiAgICAgICAgY29uc3QgdXJsID0gXCJtb25nb2RiOi8vcG90cmViaXRlbDpwYXJvbGFAZGF0YWJhc2U6MjcwMTdcIjtcblxuICAgICAgICAgICAgU3VjY2VzcyB0cmllc1xuICAgICAgICAgICAgICAgICMgd2hlbiBzYW0gbG9jYWwgaW52b2tlIC0tZG9ja2VyLW5ldHdvcmsgaG9zdFxuICAgICAgICAgICAgY29uc3QgdXJsID0gXCJtb25nb2RiOi8vcG90cmViaXRlbDpwYXJvbGFAbG9jYWxob3N0OjI3MDE3XCI7XG5cbiAgICAgICAgICAgICAgICAjIHdoZW4gc2FtIGxvY2FsIGludm9rZSAtLWRvY2tlci1uZXR3b3JrIHNhbS1sYW1iZGEtbG9jYWwtbW9uZ29kYl9sb2NhbExhbWJkYU5ldHdvcmtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYjovL3BvdHJlYml0ZWw6cGFyb2xhQHNhbS1sYW1iZGEtbG9jYWwtbW9uZ29kYl9kYXRhYmFzZV8xXCI7XG5cbiAgICAgICAgKi9cblxuICAgICAgICBjb25zdCB1cmwgPSBcIm1vbmdvZGI6Ly9wb3RyZWJpdGVsOnBhcm9sYUAxOTIuMTY4LjAuMzQ6MjcwMTdcIjtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImFib3V0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gTW9uZ29EYi4uLlwiKTtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmwsIHsgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvRGIgY29ubmVjdGlvbiBlc3RhYmxpc2hlZCEgOyApXCIpO1xuXG4gICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3VjY2Vzc2Z1bCBjb25uZWN0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbn07XG4iXX0=