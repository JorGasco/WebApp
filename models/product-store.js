'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const companyProductsCollection = require("./product-store.json");

const productStore = {
  // Import the product collection object
  companyProductsCollection: companyProductsCollection.companyProductsCollection,

  // Function to get all of the products
  getAllProducts() {
    return this.companyProductsCollection;
  },

  // Function to get a product by its ID
  getProductById(id) {
    return this.companyProductsCollection.find(product => product.id === id);
  },
};

export default productStore;
