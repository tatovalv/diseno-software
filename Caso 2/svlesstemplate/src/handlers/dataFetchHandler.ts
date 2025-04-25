import { BaseHandler } from './baseHandler';
import { DataFetcherService } from '../services/dataFetcherService';
import { logger } from '../utils/logger';
import { AuthMiddleware, ValidationMiddleware } from '../middleware/middlewares';

// Define the middleware chain for this handler
const middleware = [
    new AuthMiddleware(),
    ...(process.env.NODE_ENV === 'production' ? [] : [new ValidationMiddleware()]) // Only add ValidationMiddleware in non-production environments
]

export class DataFetchHandler extends BaseHandler {
    constructor() {
        super(middleware);
    }

    // The execute method contains the main logic for fetching data using the service 
    protected async execute(context: any) {
        try {
            
            const service = new DataFetcherService();
            const result = await service.fetchData(context.event.queryStringParameters || {});

            logger.info('Data fetched successfully', { result });
            
            return {
                statusCode: 200,
                body: JSON.stringify(result),
            };
        } catch (error) {
            logger.error('Error fetching data', { error });
            return {
                statusCode: (error instanceof Error && 'statusCode' in error ? (error as any).statusCode : 500),
                body: JSON.stringify({ message: error instanceof Error ? error.message : 'Internal server error' }),
            };
        }
        
    }

}

// Exporting the handler function for AWS Lambda
const dataFetchInstance = new DataFetchHandler();
    export const fetchDataHandler = async (event: any) => {
        try{
            return await dataFetchInstance.run(event);

        }catch(error){
            logger.error('Error in fetchDataHandler', { error });
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Internal server error' }),
            };
        }
    }