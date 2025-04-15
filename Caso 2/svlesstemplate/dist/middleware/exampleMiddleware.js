"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleMiddleware = void 0;
const exampleMiddleware = async (event, context, next) => {
    // Perform any necessary validation or logging here
    console.log("Middleware processing request:", event);
    // Call the next middleware or handler
    await next();
};
exports.exampleMiddleware = exampleMiddleware;
