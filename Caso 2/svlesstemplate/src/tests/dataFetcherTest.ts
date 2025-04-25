import { DataFetchHandler, fetchDataHandler } from '../handlers/dataFetchHandler';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('DataFetchHandler', () => {
  it('should fetch data successfully', async () => {
    const event: APIGatewayProxyEvent = {
      queryStringParameters: {},
      headers: { Authorization: 'Bearer token' },
    } as any;

    const result = await fetchDataHandler(event);
    expect(result.statusCode).toBe(200);
  });
});