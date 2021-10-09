import { Response, Request } from 'express';
import { ProductDao } from '../dao/product.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function addProduct(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProductDao.addProduct(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getProductById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProductDao.findProductById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getAllProducts(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProductDao.findProducts(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function findProductByName(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProductDao.searchForProduct(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function updateProductById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProductDao.updateProductById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function deleteProductById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProductDao.deleteProductById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
