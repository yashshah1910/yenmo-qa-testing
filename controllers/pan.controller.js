const { validatePAN } = require("../utils/pan_validator.js");

const validatePANHandler = (req, res) => {
  const { pan } = req.body;
  if (!pan) {
    return res.status(400).json({ error: "PAN is required" });
  }
  res.status(200).send({
    message: "Success",
    data: validatePAN(pan),
  });
};

module.exports = { validatePAN: validatePANHandler };
