import { APIGatewayProxyEvent } from 'aws-lambda';
import { logger } from '../utils/logger';

interface Middleware {
    execute(event: APIGatewayProxyEvent, context?: any): Promise<APIGatewayProxyEvent>;
    setNext(middleware: Middleware): Middleware;
}

// Provides a base implementation for chaining middleware
abstract class AbstractMiddleware implements Middleware {
    private nextMiddleware: Middleware | null = null;

    public setNext(middleware: Middleware): Middleware {
        this.nextMiddleware = middleware;
        return middleware;
    }

    public async execute(event: APIGatewayProxyEvent, context: any = {}): Promise<APIGatewayProxyEvent> {
        if (this.nextMiddleware) {
            return this.nextMiddleware.execute(event, context);
        }
        return event;
    }
}

class AuthMiddleware extends AbstractMiddleware {
    public async execute(event: APIGatewayProxyEvent, context: any = {}): Promise<APIGatewayProxyEvent> {
        logger.info('Running authentication middleware'); 

        if (!event.headers?.Authorization) {
            throw { statusCode: 401, message: 'Unauthorized' };
        }

        return super.execute(event, context);
    }
}

class ValidationMiddleware extends AbstractMiddleware {
    public async execute(event: APIGatewayProxyEvent, context: any = {}): Promise<APIGatewayProxyEvent> {
        if (context.skipValidation) {
            logger.info('Skipping validation middleware'); 
            return super.execute(event, context);
        }

        logger.info('Running validation middleware');

        if (!event.body) {
            throw { statusCode: 400, message: 'Request body is required' }; 
        }

        try {
            JSON.parse(event.body);
        } catch (error) {
            throw { statusCode: 400, message: 'Invalid JSON format' }; 
        }

        return super.execute(event, context);
    }
}

const authMiddleware = new AuthMiddleware(); 
const validationMiddleware = new ValidationMiddleware(); 

authMiddleware.setNext(validationMiddleware);

export const middlewareChain = {
    execute: async (event: APIGatewayProxyEvent, context: any = {}) => {
        return authMiddleware.execute(event, context);
    }
};