import { Response, Request } from 'express';
import { EventDao } from '../dao/event.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function addEvent(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await EventDao.addEvent(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getEventById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await EventDao.findEventById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getAllEvents(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await EventDao.findEvents(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function findEventByName(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await EventDao.searchForEvent(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function updateEventById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await EventDao.updateEventById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function deleteEventById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await EventDao.deleteEventById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
