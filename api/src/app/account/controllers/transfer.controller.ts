import { Response, Request } from 'express';
import { TransferDao } from '../dao/transfer.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function getAllTransfers(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const transfers = await TransferDao.findAllTransfers(options);
    response.json(transfers);
  } catch (error) {
    return next(error);
  }
}

export async function addTransfer(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const newTransfer = await TransferDao.addTransfer(options.body);
    response.json(newTransfer);
  } catch (error) {
    return next(error);
  }
}

export async function addTransfers(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const newTransfers = await TransferDao.addTransfers(options);
    response.json(newTransfers);
  } catch (error) {
    return next(error);
  }
}

export async function getTransferById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const newTransfer = await TransferDao.findTransfer(options);
    response.json(newTransfer);
  } catch (error) {
    return next(error);
  }
}
