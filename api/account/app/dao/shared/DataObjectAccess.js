const { SearchStrategy } = require('../../enums/SearchStrategy.enum');

// CREATE
exports.add = async (req, databaseSchema) => {
  const newDatabaseObject = new databaseSchema({ ...req.body });
  return await newDatabaseObject.save();
};

// READ
exports.find = async (req, databaseSchema) => {
  let search = {};

  if (!req || !req.body) {
    return await databaseSchema.find();
  }

  const searchProperties = Object.keys(req.body)
    .map((key) => {
      return { [key]: req.body[key] };
    })
    .filter((result) => !result.searchStrategy);

  switch (req.body.searchStrategy) {
    case SearchStrategy.MATCH_ALL:
      search = { $and: searchProperties };
      break;
    case SearchStrategy.MATCH_SOME:
      search = { $or: searchProperties };
      break;
    default:
      search = {};
  }

  return await databaseSchema.find(search);
};

exports.findById = async (req, databaseSchema) => {
  return await databaseSchema.findOne({ _id: req.params.id });
};

exports.search = async (req, databaseSchema, options = { limit: 10 }) => {
  const searchProperties = Object.keys(req.query).map((key) => {
    return { [key]: { $regex: req.query[key] } };
  })[0];

  return await databaseSchema.find(searchProperties).limit(options.limit).exec();
};

exports.searchBy = async (searchBy, databaseSchema, options = { limit: 10 }) => {
  const searchProperties = Object.keys(searchBy).map((key) => {
    return { [key]: { $regex: searchBy[key] } };
  });

  return await databaseSchema.find(searchProperties).limit(options.limit).exec();
};

// UPDATE
exports.updateOne = async (req, databaseSchema) => {
  return await databaseSchema.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    context: 'query',
  });
};

//DELETE
exports.findByIdAndDelete = async (req, databaseSchema) => {
  return await databaseSchema.findOneAndDelete({ _id: req.params.id });
};

exports.delete = async (req, databaseSchema) => {
  return await databaseSchema.deleteMany(req);
};
