const quotesModel = require("../models/quotesModel");

const findAllQuotes = async () => {
  const quotes = await quotesModel.find();

  return quotes;
};

const findQuotesById = async (id) => {
  const quotes = await quotesModel.findById(id);

  return quotes;
};

const findQuotesByCategory = async (category) => {
  const quotes = await quotesModel.find({ category });

  return quotes;
};

const findAllCategorys = async () => {
  const categorys = await quotesModel.distinct("category");
  const allQuotesCategorys = [];

  for (const category of categorys) {
    const allCategorys = await quotesModel.findOne({ category: category });

    if (allCategorys) {
      allCategorys.push(allQuotesCategorys);
    }
  }
};

const createQuotes = async (data) => {
  const newQuotes = new quotesModel(data);

  await newQuotes.save();
};

const deleteQuotesById = async (id) => {
  const deleteQuotes = await quotesModel.findByIdAndDelete(id);

  return deleteQuotes;
};

const updateQuotesById = async (id, quotes) => {
  const updateQUotes = await quotesModel.findByIdAndUpdate(id, quotes);

  return updateQUotes;
};

module.exports = {
  findAllQuotes,
  findQuotesById,
  findQuotesByCategory,
  findAllCategorys,
  createQuotes,
  deleteQuotesById,
  updateQuotesById,
};
