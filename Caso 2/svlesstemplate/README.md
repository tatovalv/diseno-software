# Serverless TypeScript Project

This project is a serverless application built with TypeScript, utilizing AWS services. It demonstrates how to create AWS Lambda functions with middleware and a repository layer.

## Project Structure

```
svlesstemplate
├── src
│   ├── handlers
│   │   ├── exampleHandlerOne.ts
│   │   └── exampleHandlerTwo.ts
│   ├── middleware
│   │   └── exampleMiddleware.ts
│   ├── repository
│   │   └── exampleRepository.ts
│   └── utils
│       └── logger.ts
├── .env
├── serverless.yml
├── package.json
├── tsconfig.json
└── README.md
```

## Prerequisites

- Node.js (v14.x or later)
- AWS CLI configured with your credentials
- Serverless Framework installed globally (`npm install -g serverless`)

## Setup Instructions

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd svlesstemplate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add your AWS credentials and any other necessary configuration settings.

4. **Compile TypeScript**:
   Ensure TypeScript is compiled before running or deploying:
   ```bash
   npm run build
   ```

## Local Execution

To test the Lambda functions locally, you can use the Serverless Framework's offline plugin. First, install the plugin:

```bash
npm install serverless-offline --save-dev
```

Then, add the following to your `serverless.yml` under `plugins`:

```yaml
plugins:
  - serverless-offline
```

Now you can run the application locally:

```bash
serverless offline
```

## Deployment to AWS

To deploy the application to AWS, run the following command:

```bash
serverless deploy
```

This command will package your application and deploy it to AWS, creating the necessary resources.

## Issues Founded

### In the deployment
- At the time of deployment, the `.env` file was used as suggested in the template, but this caused an error with the values of `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` and `AWS_REGION` because these are reserved AWS variables that cannot be changed manually. This was resolved by deleting these varibles from the `.env` file and adding the other two variables to the `serverless.yml` file.

- Another error founded was ocurred in the `serverless.yml` file, this file had `nodejs14.x` in the runtime value, this version was discontinued by AWS in 2023, making an issue in the deployment. This was resolved by changing the version to `nodejs18.x`, a version supported by AWS.

- Another error was found at the time of testing, the requests did not work properly, this was caused by a packaging error, the handlers had to be "read" from the `dist` folder, which is not specified in the `serverless.yml` since the reading was specified in the `src` folder. This error was easy to fix because it was only necessary to change this route in the `serverless.yml`.

### In the modification of the template
- There was issues in the error management in the handlers, the declaration of `statusCode` needed other way to make it work properly.

  Code with issues
  ```ts
  catch (error) {
    logger.error('Error saving data', { error });
    return {
        statusCode,
        body: JSON.stringify({ message }),
    };
  }
  ```
  Fix:

    ```ts
  catch (error) {
    logger.error('Error saving data', { error });
    const statusCode = (error instanceof Error && 'statusCode' in error) ? (error as any).statusCode : 500;
    const message = (error instanceof Error) ? error.message : 'Internal server error';

    return {
        statusCode,
        body: JSON.stringify({ message }),
    };
  }
  ```