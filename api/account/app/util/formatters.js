exports.bindErrorMsg = (err) => {
  const fields = Object.keys(err.errors);
  let errorValidators = [];
  for (let field of fields) {
    errorValidators.push({ [field]: err.errors[field] });
  }

  return (error = {
    errors: {
      validators: {
        fields: errorValidators,
      },
      globals: {
        _message: err._message,
        name: err.name,
        message: err.message,
      },
    },
  });
};
