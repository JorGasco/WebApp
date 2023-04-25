'use strict';

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

removeItem(id, itemId) {
const arrayName = "items";
this.store.removeItem(this.collection, id, arrayName, itemId);
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

addItem(id, item) {
const arrayName = "items";
this.store.addItem(this.collection, id, arrayName, item);
},

editItem(id, itemId, updatedItem) {
const arrayName = "items";
this.store.editItem(this.collection, id, itemId, arrayName, updatedItem);
},

};

export default basketStore;