# Setup
 - To [Install AWS SAM CLI](https://github.com/awsdocs/aws-sam-developer-guide/blob/master/doc_source/serverless-sam-cli-install-linux.md)
  `sam init`
 - Node.js 12.X
 - `npm install --global typescript ts-lint`
 - `npm install --save mongodb @types/mongodb`
 - [tsconfig gist]()
 - [ts-lint gist]()

# Start
`npm start` (in `sam-app/hello-world` where `package.json` resides) execute both dockerised MongoDb and the HelloWorldFunction (our lambda)
in docker network called `sam-lambda-local-mongodb_localLambdaNetwork`

# Outputs
 - MongoDb container logs in `sam-app/hello-world/docker.log` (result of `db:logs` script in `sam-app/hello-world/package.json`)
 - Lambda response in `sam-app/output.json` (result of `local:invoke` script in `sam-app/hello-world/package.json`)