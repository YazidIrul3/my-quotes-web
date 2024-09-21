const {
  findAllQuotes,
  findQuotesById,
  findQuotesByCategory,
  findAllCategorys,
  createQuotes,
  deleteQuotesById,
  updateQuotesById,
} = require("./quotes.respository");

const getAllQuotes = async () => {
  const quotes = await findAllQuotes();

  return quotes;
};

const getQuotesById = async (id) => {
  await findQuotesById(id);
};

const getQuotesByCategory = async (category) => {
  const quotes = await findQuotesByCategory(category);

  return quotes
};

const getAllQuotesCategory = async () => {
  await findAllCategorys();
};

const postQuotes = async (data, quotes) => {
  if (!data) {
    throw new Error("you have to fill in the form ");
  }

  if (quotes.length > 150) {
    throw new Error("Just Can Post 150 Quotes Length");
  }

  await createQuotes(data);
};

const deleteQuotes = async (id) => {
  await deleteQuotesById(id);
};

const updateQuotes = async (id, quotes) => {
  await updateQuotesById(id, quotes);
};

module.exports = {
  getAllQuotes,
  getQuotesById,
  getQuotesByCategory,
  getAllQuotesCategory,
  postQuotes,
  deleteQuotes,
  updateQuotes,
};
