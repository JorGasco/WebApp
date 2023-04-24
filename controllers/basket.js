'use strict';

// Import all required modules
import logger from '../utils/logger.js';
import basketStore from '../models/basket-store.js';

// Create basket object
const basket = {

  // index method - responsible for creating and rendering the view
  index(request, response) {

    // Display confirmation message in log
    logger.info('basket rendering');

    // Create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Basket',
      items: basketStore.getAllItems(),
    };

    // Render the basket view and pass through the data
    response.render('basket', viewData);
  },
};

// Export the basket module
export default basket;
