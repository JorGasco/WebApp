'use strict';

import logger from '../utils/logger.js';
import { v4 as uuidv4 } from 'uuid';
import basketStore from '../models/basket-store.js';

const basket = {
index(request, response) {
const basketId = request.params.id;
logger.debug('Basket id = ' + basketId);
const viewData = {
title: 'Basket',
basket: basketStore.getBasket(basketId),
};
  
  
logger.info('about to render', viewData.basket);
response.render('basket', viewData);
},
  
  
deleteProduct(request, response) {
const basketId = request.params.id;
const ProductId = request.params.Productid;
logger.debug(Deleting Product ${ProductId} from Basket ${basketId});
basketStore.removeProduct(basketId, ProductId);
response.redirect('/basket/' + basketId);
},
  
addProduct(request, response) {
const basketId = request.params.id;
const basket = basketStore.getBasket(basketId);
const newProduct = {
id: uuidv4(),
name: request.body.name,
description: request.body.description,
price: request.body.price,
category: request.body.category,
quantity: request.body.quantity
};
basketStore.addProduct(basketId, newProduct);
response.redirect('/basket/' + basketId);
},

updateProduct(request, response) {
const basketId = request.params.id;
const ProductId = request.params.Productid;
logger.debug("updating Product " + ProductId);
const updatedProduct = {
id: ProductId,
name: request.body.name,
description: request.body.description,
price: request.body.price,
category: request.body.category,
quantity: request.body.quantity
};
basketStore.editProduct(basketId, ProductId, updatedProduct);
response.redirect('/basket/' + basketId);
}
};

export default basket;