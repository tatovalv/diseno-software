"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleHandlerTwo = void 0;
const exampleHandlerTwo = async (event) => {
    // Import the middleware and repository
    const { exampleMiddleware } = require('../middleware/exampleMiddleware');
    const { ExampleRepository } = require('../repository/exampleRepository');
    // Use the middleware to process the request
    const processedEvent = exampleMiddleware(event);
    // Create an instance of the repository
    const repository = new ExampleRepository();
    // Perform an operation using the repository
    const result = await repository.getData(processedEvent);
    // Return the result
    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
};
exports.exampleHandlerTwo = exampleHandlerTwo;
