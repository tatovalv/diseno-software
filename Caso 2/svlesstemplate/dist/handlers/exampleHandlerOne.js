"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleHandlerOne = void 0;
const exampleHandlerOne = async (event) => {
    // Import the middleware and repository
    const { exampleMiddleware } = require('../middleware/exampleMiddleware');
    const { ExampleRepository } = require('../repository/exampleRepository');
    // Process the request using the middleware
    const processedEvent = exampleMiddleware(event);
    // Create an instance of the repository
    const repository = new ExampleRepository();
    // Perform an operation, e.g., saving data
    const result = await repository.saveData(processedEvent);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Data saved successfully',
            data: result,
        }),
    };
};
exports.exampleHandlerOne = exampleHandlerOne;
