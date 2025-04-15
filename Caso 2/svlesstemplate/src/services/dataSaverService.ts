import { DynamoRepository } from '../repository/dynamoRepository';
import { logger } from '../utils/logger';

export class DataSaverService {
    private repository: DynamoRepository;

    constructor(repository: DynamoRepository = new DynamoRepository()) {
        this.repository = repository;
    }

    async saveData(data: any): Promise<any> {
        logger.info('Saving data', { data });
        
        if (!data.id) {
            data.id = Date.now().toString();
        }
        
        return this.repository.save(data);
    }
}