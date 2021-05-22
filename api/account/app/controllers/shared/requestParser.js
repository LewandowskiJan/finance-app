exports.requestParseToOptionObj = (req = {}) => {
  req.body = req.body ? req.body : {};
  req.query = req.query ? req.query : {};

  let { options, params, ...body } = req.body;
  const { ...query } = req.query;

  options = options || {};
  params = params || {};

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
};
