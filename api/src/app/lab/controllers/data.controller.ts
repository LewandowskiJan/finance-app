import { Response, Request } from 'express';
import { Pointer } from '../models/pointer-schema';

export async function getData(request: Request, response: Response, next: any): Promise<any> {
  const pointer = await Pointer.find({}).limit(1000);

  return response.json(pointer);
}
