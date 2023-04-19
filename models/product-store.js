'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const productCollection = require("./product-store.json");

const productStore = {

// import the product collection object
productCollection: productCollection.companyProductCollection,

// function to get all of the products
getAllProducts() {
return this.productCollection;
},

};