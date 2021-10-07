import { Response, Request } from 'express';
import { ProjectDao } from '../dao/project.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function addProject(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProjectDao.addProject(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getProjectById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProjectDao.findProjectById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getAllProjects(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProjectDao.findProjects(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function findProjectByName(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProjectDao.searchForProject(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function updateProjectById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProjectDao.updateProjectById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function deleteProjectById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ProjectDao.deleteProjectById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
