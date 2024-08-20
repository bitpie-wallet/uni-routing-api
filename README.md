# Uniswap Routing API

This repository contains routing API for the Uniswap V3 protocol.

It deploys an API to AWS that uses @uniswap/smart-order-router to search for the most efficient way to swap token A for token B.

## Development

To develop on the Routing API you must have an AWS account where you can deploy your API for testing.

### Deploying the API

The best way to develop and test the API is to deploy your own instance to AWS.

#### 1. Install aws-cdk-local and aws-cdk

Install the required packages globally using npm:

```
npm install -g aws-cdk-local aws-cdk
```

#### 2. Create .env file

Create a `.env` file in the root directory and add the following:

```
JSON_RPC_PROVIDER_MAINNET=<your_mainnet_provider_url>
```

#### 3. Install and build the package

Run the following commands:

```
npm install && npm run build
```

#### 4. Configure AWS environment

Set the following environment variables:

```
export AWS_ACCESS_KEY_ID=test
export AWS_SECRET_ACCESS_KEY=test
export AWS_DEFAULT_REGION=us-east-2
export CDK_DEFAULT_ACCOUNT=000000000000
export CDK_DEFAULT_REGION=us-east-2
```

You can verify if the configuration is effective by checking `~/.aws/config`. The content should look like this:

```
[profile localstack]
region = us-east-2
output = json
[default]
region = us-east-2
output = json
endpoint_url = http://localhost:4566
```

#### 5. Bootstrap and deploy to LocalStack

Run the following commands:

```
AWS_PROFILE=localstack cdklocal bootstrap
AWS_PROFILE=localstack cdklocal deploy RoutingAPIStack
```

This will deploy to the default account your AWS CLI is configured for. Once complete, it will output something like:

```
RoutingAPIStack.Url = https://...
```

You can then try it out:

```
curl --request GET '<INSERT_YOUR_URL_HERE>/quote?tokenInAddress=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&tokenInChainId=1&tokenOutAddress=0x1f9840a85d5af5bf1d1762f925bdaddc4201f984&tokenOutChainId=1&amount=100&type=exactIn'
```
