const Products = require("../data/Products.json");

const getAllProducts = async (req, res) => {
  res.send(Products);
};

const getAllCategories = async (req, res) => {
  const categories = Products.map((product) => product.category);
  const allCategories = [...new Set(categories)];
  res.send(allCategories);
};

const getProductByCategory = async (req, res) => {
  const category = req.params.category;
  let result = [];
  Products.map((a) => {
    if (a.category === category) return result.push(a);
  });
  if (result.length !== 0) {
    res.send(result);
  } else {
    res.status(404).send("Category Not Found");
  }
};

const filterProducts = async (req, res) => {
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;

  let filteredProducts = Products;

  if (minPrice) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price >= minPrice;
    });
  }
  if (maxPrice) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price <= maxPrice;
    });
  }

  res.json({ nb: filteredProducts.length, filteredProducts });
};

module.exports = {
  getAllCategories,
  getProductByCategory,
  getAllProducts,
  filterProducts,
};
