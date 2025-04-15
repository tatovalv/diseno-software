import { fetchDataHandler } from '../handlers/dataFetchHandler';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('fetchDataHandler', () => {
  it('should fetch data successfully', async () => {
    const event: APIGatewayProxyEvent = {
      queryStringParameters: {},
      headers: { Authorization: 'Bearer token' },
    } as any;

    const result = await fetchDataHandler(event);
    expect(result.statusCode).toBe(200);
  });
});