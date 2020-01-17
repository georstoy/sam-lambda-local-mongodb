"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
let response;
exports.lambdaHandler = async (event /*, context*/) => {
    try {
        const url = "mongodb://potrebitel:parola@localhost:27017";
        const client = await mongodb_1.MongoClient.connect(url, { useUnifiedTopology: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNDO0FBQ3RDLElBQUksUUFBUSxDQUFDO0FBTWIsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLEVBQUUsS0FBYSxDQUFBLGFBQWEsRUFBRSxFQUFFO0lBQ3pELElBQUk7UUFDQSxNQUFNLEdBQUcsR0FBRyw2Q0FBNkMsQ0FBQztRQUMxRCxNQUFNLE1BQU0sR0FBZ0IsTUFBTSxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXpGLFFBQVEsR0FBRztZQUNQLFVBQVUsRUFBRSxHQUFHO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSx1QkFBdUI7YUFFbkMsQ0FBQztTQUNMLENBQUM7S0FDTDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLEdBQUcsQ0FBQztLQUNkO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xubGV0IHJlc3BvbnNlO1xuXG5pbnRlcmZhY2UgSUV2ZW50IHtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydHMubGFtYmRhSGFuZGxlciA9IGFzeW5jIChldmVudDogSUV2ZW50LyosIGNvbnRleHQqLykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYjovL3BvdHJlYml0ZWw6cGFyb2xhQGxvY2FsaG9zdDoyNzAxN1wiO1xuICAgICAgICBjb25zdCBjbGllbnQ6IE1vbmdvQ2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmwsIHsgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlIH0pO1xuXG4gICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU3VjY2Vzc2Z1bCBjb25uZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgLy8gbG9jYXRpb246IHJldC5kYXRhLnRyaW0oKVxuICAgICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbiJdfQ==