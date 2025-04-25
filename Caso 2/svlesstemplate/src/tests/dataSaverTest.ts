import { DataSaveHandler, saveDataHandler} from '../handlers/dataSaveHandler';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('DataSaveHandler', () => {
  it('should save data successfully', async () => {
    const event: APIGatewayProxyEvent = {
      body: JSON.stringify({ name: 'Test Item' }),
      headers: { Authorization: 'Bearer token' },
    } as any;

    const result = await saveDataHandler(event);
    expect(result.statusCode).toBe(200);
  });

  it('should reject unauthorized requests', async () => {
    const event: APIGatewayProxyEvent = {
      body: JSON.stringify({ name: 'Test Item' }),
      headers: {},
    } as any;

    const result = await saveDataHandler(event);
    expect(result.statusCode).toBe(401);
  });
});