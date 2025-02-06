const validatePAN = (pan) => {
  const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]/;
  return panRegex.test(pan);
};

module.exports = { validatePAN };
