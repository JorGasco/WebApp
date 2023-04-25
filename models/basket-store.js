'use strict';

import logger from '../utils/logger.js';

const basketStore = {
  items: [],

  getAllItems() {
    return this.items;
  },

  addItem(item) {
    const itemIndex = this.items.findIndex(existingItem => existingItem.idd === item.idd);

    if (itemIndex > -1) {
      this.items[itemIndex].quantity += 1;
      logger.info(`Updating quantity of item ${item.idd}`);
    } else {
      item.quantity = 1;
      this.items.push(item);
      logger.info(`Adding item ${item.idd}`);
    }
  },

  removeItem(itemId) {
    const index = this.items.findIndex(item => item.idd === itemId);
    if (index > -1) {
      this.items.splice(index, 1);
      logger.info(`Removing item ${itemId}`);
    }
  },

};

export default basketStore;
