import { logger } from '../utils/logger';


// Middleware interface to define the structure of middleware classes
export interface Middleware {
    execute(context: any, next: () => Promise<void>): Promise<void>;
}


export class AuthMiddleware implements Middleware {
    async execute(context: any, next: any){
        const token = context.event.headers.Authorization || context.event.headers.authorization;
        if (!token) {
            throw { statusCode: 401, message: 'Unauthorized' };
        }
        logger.info('Authorization token found, proceeding to next middleware');
        await next();

    }
}

export class ValidationMiddleware implements Middleware {
    async execute(context: any, next: any) {
        if (!context.event.headers.validation) {
            if (process.env.NODE_ENV !== 'production') {
                logger.warn('Validation token missing in non-production env');
                await next();
                return;
            }
            throw { statusCode: 400, message: 'Validation token is required' };
        }
        logger.info('Validation token found');
        await next();
    }
}

