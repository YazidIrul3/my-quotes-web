const express = require("express");
const {
  getAllQuotes,
  getQuotesById,
  getQuotesByCategory,
  getAllQuotesCategory,
  postQuotes,
  deleteQuotes,
  updateQuotes,
} = require("./quotes.service");
const authToken = require("../middleware/authToken");
const routerQuotes = express.Router();

routerQuotes.get("/quotes", async (req, res) => {
  try {
    const quotes = await getAllQuotes();

    res.status(200).json({
      data: quotes,
      message: "Successfully Get All Quotes",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

// routerQuotes.get("/quotes/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const quotes = await getQuotesById(id);

//     res.status(201).json({
//       data: quotes,
//       message: "Successfully Get Quotes By Id",
//       success: true,
//       error: false,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// });

routerQuotes.get("/quotes/:category", async (req, res) => {
  try {
    const category = req.params.category;

    const quotes = await getQuotesByCategory(category);

    res.status(201).json({
      data: quotes,
      message: "Successfully Get Quotes By Category",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerQuotes.get("/quotes/categorys", async (req, res) => {
  try {
    const quotesCategorys = await getAllQuotesCategory();

    res.status(201).json({
      data: quotesCategorys,
      message: "Successfully Get All Quotes Category",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerQuotes.post("/quotes", authToken, async (req, res) => {
  try {
    const { quotes } = req?.body;

    const newQuotes = await postQuotes(req?.body, quotes);

    res.status(200).json({
      data: newQuotes,
      message: "Successfully Post New Quotes",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerQuotes.delete("/quotes/:id", authToken, async (req, res) => {
  try {
    const { id } = req.params;

    await deleteQuotes(id);

    res.status(201).json({
      message: "Successfully Delete Quotes",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerQuotes.put("/quotes/:id", authToken, async (req, res) => {
  try {
    const { id } = req.params;

    await updateQuotes(id, req?.body);

    res.status(201).json({
      message: "Successfully Update Quotes",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

module.exports = routerQuotes;
