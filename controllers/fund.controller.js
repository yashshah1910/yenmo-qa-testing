const { getMutualFunds } = require("../data/mutual_funds.js");

const getMutualFundsHandler = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.status(200).send({
    message: "Success",
    data: getMutualFunds(),
  });
};

module.exports = { getMutualFunds: getMutualFundsHandler };
