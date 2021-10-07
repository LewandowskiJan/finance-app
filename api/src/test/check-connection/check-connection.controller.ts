import { Response, Request } from 'express';
import { CheckConnection } from './check-connection';
import { requestParseToOptionObj } from '../../app/shared/request-parser';

export async function checkConnection(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const newCheck = new CheckConnection(options);
    newCheck.connectionStatus = 'Success';
    const result = await newCheck.save();
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
