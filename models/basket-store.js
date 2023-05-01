'use strict';
import logger from '../utils/logger.js';
import JsonStore from './json-store.js';
import cloudinary from 'cloudinary';

import { createRequire } from "module";
const require = createRequire(import.meta.url);

try {
  const env = require("../.data/.env.json");
  cloudinary.config(env.cloudinary);
}
catch(e) {
  logger.info('You must provide a Cloudinary credentials file - see README.md');
  process.exit(1);
}

const basketStore = {

store: new JsonStore('./models/basket-store.json', { basketCollection: [] }),
collection: 'basketCollection',

getAllBaskets() {
return this.store.findAll(this.collection);
},

getBasket(id) {
return this.store.findOneBy(this.collection, (collection => collection.id === id));
},

removeProduct(id, productId) {
const arrayName = "products";
this.store.removeItem(this.collection, id, arrayName, productId);
},

removeBasket(id) {
const basket = this.getBasket(id);
this.store.removeCollection(this.collection, basket);
},

removeAllBaskets() {
this.store.removeAll(this.collection);
},

 async addBasket(basket, response) {
  function uploader(){
    return new Promise(function(resolve, reject) {  
      cloudinary.uploader.upload(basket.picture.tempFilePath,function(result,err){
        if(err){console.log(err);}
        resolve(result);
      });
    });
  }
  let result = await uploader();
  logger.info('cloudinary result', result);
  basket.picture = result.url;

  this.store.addCollection(this.collection, basket);
  response();
},

addProduct(id, product) {
const arrayName = "products";
this.store.addItem(this.collection, id, arrayName, product);
},


editProduct(id, productId, updatedProduct) {
const arrayName = "products";
this.store.editItem(this.collection, id, productId, arrayName, updatedProduct);
},
  
  getUserBaskets(userid) {
 return this.store.findBy(this.collection, (basket => basket.userid === userid));
},

};

export default basketStore;