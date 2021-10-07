import { Request } from 'express';

export function requestParseToOptionObj(request: Request): any {
  const params = request.params || {};
  const body = request.body;
  const options = body.options || {};

  request.body = request.body ? request.body : {};
  request.query = request.query ? request.query : {};

  const { ...query } = request.query;

  const { limit, sort, search, searchStrategy, searchBy } = options;

  return {
    limit: limit || 10,
    sort: sort || [],
    body: body || undefined,
    params: params || undefined,
    query: query || undefined,
    searchBy: searchBy || '',
    search: search || undefined,
    searchStrategy: searchStrategy || undefined,
  };
}
