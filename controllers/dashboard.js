'use strict';

// import all required modules
import logger from '../utils/logger.js';
import productStore from '../models/product-store.js';

// create dashboard object
const dashboard = {

// index method - responsible for creating and rendering the view
index(request, response) {// display confirmation message in log
logger.info('dashboard rendering');

// create view data object (contains data to be sent to the view e.g. page title)
const viewData = {
  title: 'Company Product Collection Dashboard',
  products: productStore.getAllProducts(),
};

// render the dashboard view and pass through the data
logger.info('about to render', viewData.products);
response.render('dashboard', viewData);
  },
};

// export the dashboard module
export default dashboard;