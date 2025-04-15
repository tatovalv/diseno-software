import { DynamoRepository } from '../repository/dynamoRepository';
import { logger } from '../utils/logger';

export class DataFetcherService {
    private repository: DynamoRepository;

    constructor(repository: DynamoRepository = new DynamoRepository()) {
        this.repository = repository;
    }

    async fetchData(params: any): Promise<any> {
        logger.info('Fetching data', { params });
        
        if (params.id) {
            return this.repository.getById(params.id);
        }
        
        return this.repository.getAll();
    }
}