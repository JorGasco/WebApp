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
deleteItem(request, response) {
const basketId = request.params.id;
const itemId = request.params.itemid;
logger.debug(Deleting Item ${itemId} from Basket ${basketId});
basketStore.removeItem(basketId, itemId);
response.redirect('/basket/' + basketId);
},
addItem(request, response) {
const basketId = request.params.id;
const basket = basketStore.getBasket(basketId);
const newItem = {
id: uuidv4(),
name: request.body.name,
description: request.body.description,
price: request.body.price,
category: request.body.category,
image: request.body.image,
quantity: request.body.quantity
};
basketStore.addItem(basketId, newItem);
response.redirect('/basket/' + basketId);
},

updateItem(request, response) {
const basketId = request.params.id;
const itemId = request.params.itemid;
logger.debug("updating item " + itemId);
const updatedItem = {
id: itemId,
name: request.body.name,
description: request.body.description,
price: request.body.price,
category: request.body.category,
image: request.body.image,
quantity: request.body.quantity
};
basketStore.editItem(basketId, itemId, updatedItem);
response.redirect('/basket/' + basketId);
}
};

export default basket;