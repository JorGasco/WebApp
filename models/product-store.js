'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const companyProductsCollection = require("./product-store.json");

const productStore = {

// import the product collection object
companyProductsCollection: companyProductsCollection.companyProductsCollection,

// function to get all of the products
getAllProducts() {
return this.companyProductsCollection;
},

};
export default productStore;