import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DataSaverService } from '../services/dataSaverService';
import { logger } from '../utils/logger';
import { middlewareChain } from '../middleware/middlewareChain';

export const saveDataHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        // Apply middleware chain (auth + validation)
        const processedEvent = await middlewareChain.execute(event);
        
        const service = new DataSaverService();
        const result = await service.saveData(JSON.parse(processedEvent.body || '{}'));
        
        logger.info('Data saved successfully', { result });
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data saved successfully', data: result }),
        };
    } catch (error) {
        logger.error('Error saving data', { error });
        const statusCode = (error instanceof Error && 'statusCode' in error) ? (error as any).statusCode : 500;
        const message = (error instanceof Error) ? error.message : 'Internal server error';

        return {
            statusCode,
            body: JSON.stringify({ message }),
        };
    }
};