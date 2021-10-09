import { Response, Request } from 'express';
import { TransferLineDao } from '../dao/transfer-line.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function getAllTransferLines(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);
  try {
    const result = await TransferLineDao.findByPropertiesTransferLines(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getAllTransferLinesByProperties(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TransferLineDao.findByPropertiesTransferLines(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
