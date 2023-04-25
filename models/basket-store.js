'use strict';

// Import all required modules
import logger from '../utils/logger.js';

const basketStore = {

  items: [],

  getAllItems() {
    return this.items;
  },

  addItem(item) {
    this.items.push(item);
    logger.info(`Adding item ${item.id}`);
  },

  removeItem(itemId) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index > -1) {
      this.items.splice(index, 1);
      logger.info(`Removing item ${itemId}`);
    }
  },

};

export default basketStore;
