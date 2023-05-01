'use strict';

// import all required modules
import logger from '../utils/logger.js';
import { v4 as uuidv4 } from 'uuid';
import basketStore from '../models/basket-store.js';
import accounts from './accounts.js';


// create dashboard object
const  dashboard = {

  // index method - responsible for creating and rendering the view
   index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
      
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Basket App Dashboard',
      baskets: basketStore.getUserBasket(),
    };

    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.baskets);
    response.render('dashboard', viewData);
  },

  deleteBasket(request, response) {
    const basketId = request.params.id;
    logger.debug(`Deleting Basket ${basketId}`);
    basketStore.removeBasket(basketId);
    response.redirect('/dashboard');
  },

  addBasket(request, response) {
    const newBasket = {
      id: uuidv4(),
      name: request.body.name,
      location: request.body.location,
      email: request.body.email,
      phone: request.body.phone,
      products: [],
    };
    basketStore.addBasket(newBasket);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
export default dashboard;
