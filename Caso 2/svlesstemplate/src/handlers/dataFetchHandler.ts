import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DataFetcherService } from '../services/dataFetcherService';
import { logger } from '../utils/logger';
import { middlewareChain } from '../middleware/middlewareChain';

export const fetchDataHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        // Apply middleware chain (auth only)
        const processedEvent = await middlewareChain.execute(event, { skipValidation: true });
        
        const service = new DataFetcherService();
        const result = await service.fetchData(processedEvent.queryStringParameters || {});
        
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
};