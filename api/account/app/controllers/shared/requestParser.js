exports.requestParseToOptionObj = (req = {}) => {
  req.body = req.body ? req.body : {};

  let { options, params, ...body } = req.body;

  options = options ? options : {};
  params = params ? params : {};

  const { limit, sort, search, searchStrategy, searchBy } = options;

  return {
    limit: limit || 10,
    sort: sort || [],
    body: body || undefined,
    params: params || undefined,
    searchBy: searchBy || '',
    search: search || undefined,
    searchStrategy: searchStrategy || undefined,
  };
};
