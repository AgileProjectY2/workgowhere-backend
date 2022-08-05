// Fetch results based on estate
const results_estate = (req, res) => {
  res.send("This is the results/estate page");
};

// Fetch results based on keywords/filters
const results_keywords = (req, res) => {
  res.send("This is the results/keywords page");
};

module.exports = {
  results_estate,
  results_keywords,
};
