const isParamsFull = (...params) => {
  return params.every(param => !!param);
};

module.exports = { isParamsFull };
