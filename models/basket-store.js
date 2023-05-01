'use strict';
import cloudinary from 'cloudinary';
import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

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

addBasket(basket) {
this.store.addCollection(this.collection, basket);
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