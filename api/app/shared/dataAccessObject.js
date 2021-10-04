const { SearchStrategy } = require('./enums/SearchStrategy.enum');

// CREATE
exports.add = async (options, DatabaseSchema) => {
  const newDatabaseObject = new DatabaseSchema({ ...options.body });
  return await newDatabaseObject.save();
};

// READ
exports.findByOneProperty = async (options, databaseSchema) => {
  return await databaseSchema.find(options);
};

exports.find = async (options, databaseSchema) => {
  if (!options.search) {
    return await databaseSchema.find().sort(options.sort).limit(options.limit);
  }

  const searchProperties = Object.keys(options.search).map((key) => {
    return { [key]: options.search[key] };
  });

  const searchOperation = {
    [SearchStrategy.MATCH_ALL]: { $and: searchProperties },
    [SearchStrategy.MATCH_SOME]: { $or: searchProperties },
  };

  return await databaseSchema.find(searchOperation[options.searchStrategy]).sort(options.sort).limit(options.limit);
};

exports.findById = async (options, databaseSchema) => {
  return await databaseSchema.findOne({ _id: options.params.id });
};

exports.search = async (options, databaseSchema) => {
  const searchProperties = Object.keys(options.query).map((key) => {
    return { [key]: { $regex: new RegExp(options.query[key], 'i') } };
  })[0];

  return await databaseSchema.find(searchProperties).limit(options.limit).exec();
};

exports.searchBy = async (options, databaseSchema) => {
  const searchProperties = Object.keys(options.searchBy).map((key) => {
    return { [key]: { $regex: options.searchBy[key] } };
  });

  return await databaseSchema.find(searchProperties).limit(options.limit).exec();
};

// UPDATE
exports.updateOne = async (options, databaseSchema) => {
  return await databaseSchema.findOneAndUpdate({ _id: options.params.id }, options.body, {
    new: true,
    runValidators: true,
    context: 'query',
  });
};

// DELETE
exports.findByIdAndDelete = async (options, databaseSchema) => {
  return await databaseSchema.findOneAndDelete({ _id: options.params.id });
};

exports.delete = async (options, databaseSchema) => {
  return await databaseSchema.deleteMany(options);
};
