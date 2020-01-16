"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'world',
            })
        };
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return response;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUNBQWlDO0FBQ2pDLCtDQUErQztBQUMvQyxJQUFJLFFBQVEsQ0FBQztBQUViOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzdDLElBQUk7UUFDQSxnQ0FBZ0M7UUFDaEMsUUFBUSxHQUFHO1lBQ1AsWUFBWSxFQUFFLEdBQUc7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxPQUFPO2FBRW5CLENBQUM7U0FDTCxDQUFBO0tBQ0o7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxHQUFHLENBQUM7S0FDZDtJQUVELE9BQU8sUUFBUSxDQUFBO0FBQ25CLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG4vLyBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcbi8vIGNvbnN0IHVybCA9ICdodHRwOi8vY2hlY2tpcC5hbWF6b25hd3MuY29tLyc7XG5sZXQgcmVzcG9uc2U7XG5cbi8qKlxuICpcbiAqIEV2ZW50IGRvYzogaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2FwaWdhdGV3YXkvbGF0ZXN0L2RldmVsb3Blcmd1aWRlL3NldC11cC1sYW1iZGEtcHJveHktaW50ZWdyYXRpb25zLmh0bWwjYXBpLWdhdGV3YXktc2ltcGxlLXByb3h5LWZvci1sYW1iZGEtaW5wdXQtZm9ybWF0XG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBBUEkgR2F0ZXdheSBMYW1iZGEgUHJveHkgSW5wdXQgRm9ybWF0XG4gKlxuICogQ29udGV4dCBkb2M6IGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9sYW1iZGEvbGF0ZXN0L2RnL25vZGVqcy1wcm9nLW1vZGVsLWNvbnRleHQuaHRtbCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKlxuICogUmV0dXJuIGRvYzogaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2FwaWdhdGV3YXkvbGF0ZXN0L2RldmVsb3Blcmd1aWRlL3NldC11cC1sYW1iZGEtcHJveHktaW50ZWdyYXRpb25zLmh0bWxcbiAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCAtIEFQSSBHYXRld2F5IExhbWJkYSBQcm94eSBPdXRwdXQgRm9ybWF0XG4gKiBcbiAqL1xuZXhwb3J0cy5sYW1iZGFIYW5kbGVyID0gYXN5bmMgKGV2ZW50LCBjb250ZXh0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gY29uc3QgcmV0ID0gYXdhaXQgYXhpb3ModXJsKTtcbiAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAnc3RhdHVzQ29kZSc6IDIwMCxcbiAgICAgICAgICAgICdib2R5JzogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICd3b3JsZCcsXG4gICAgICAgICAgICAgICAgLy8gbG9jYXRpb246IHJldC5kYXRhLnRyaW0oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVxufTtcbiJdfQ==