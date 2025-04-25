import { BaseHandler } from './baseHandler';
import { DataSaverService } from '../services/dataSaverService';
import { logger } from '../utils/logger';
import { AuthMiddleware, ValidationMiddleware } from '../middleware/middlewares';

// Define the middleware chain for this handler
const middleware = [
    new AuthMiddleware(),
    new ValidationMiddleware()
]

export class DataSaveHandler extends BaseHandler {
    constructor() {
        super(middleware);
    }

    // The execute method contains the main logic for saving data using the service 
    protected async execute(context: any) {
        try {
            
            const service = new DataSaverService();
            const result = await service.saveData(JSON.parse(context.event.body || '{}')); 
            
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

    }
}


// Exporting the handler function for AWS Lambda
const dataSaveInstance = new DataSaveHandler();
export const saveDataHandler = async (event: any) => {
    try{
        return await dataSaveInstance.run(event);

    }catch(error){
        logger.error('Error in saveDataHandler', { error });
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' }),
        };
    }
}