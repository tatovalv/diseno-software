import { DynamoDB } from 'aws-sdk';
import { logger } from '../utils/logger';

interface DataItem {
    id: string;
    [key: string]: any;
}

export class DynamoRepository {
    private readonly dynamoDb: DynamoDB.DocumentClient;
    private readonly tableName: string;

    constructor(tableName: string = process.env.DYNAMODB_TABLE!) {
        this.dynamoDb = new DynamoDB.DocumentClient();
        this.tableName = tableName;
    }

    async save(data: DataItem): Promise<DataItem> {
        const params = {
            TableName: this.tableName,
            Item: data
        };

        try {
            await this.dynamoDb.put(params).promise();
            logger.info('Data saved to DynamoDB', { id: data.id });
            return data;
        } catch (error) {
            logger.error('Error saving to DynamoDB', { error });
            throw error;
        }
    }

    async getById(id: string): Promise<DataItem | null> {
        const params = {
            TableName: this.tableName,
            Key: { id }
        };

        try {
            const result = await this.dynamoDb.get(params).promise();
            return result.Item as DataItem || null;
        } catch (error) {
            logger.error('Error fetching from DynamoDB', { error, id });
            throw error;
        }
    }

    async getAll(): Promise<DataItem[]> {
        const params = {
            TableName: this.tableName
        };

        try {
            const result = await this.dynamoDb.scan(params).promise();
            return result.Items as DataItem[] || [];
        } catch (error) {
            logger.error('Error scanning DynamoDB', { error });
            throw error;
        }
    }
}