'use strict';

// import all required modules
import logger from '../utils/logger.js';
import { v4 as uuidv4 } from 'uuid';
import basketStore from '../models/basket-store.js';
import accounts from './accounts.js';

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
const dashboard = {

  // index method - responsible for creating and rendering the view
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
      
      // create view data object (contains data to be sent to the view e.g. page title)
      const viewData = {
        title: 'Basket App Dashboard',
        baskets: basketStore.getUserBaskets(loggedInUser.id),
        fullname: loggedInUser.firstname + ' ' + loggedInUser.lastName,
      };

      // render the dashboard view and pass through the data
      logger.info('about to render', viewData.baskets);
      response.render('dashboard', viewData);
    }
    else {
      response.redirect('/');
    }
  },

  deleteBasket(request, response) {
    const basketId = request.params.id;
    logger.debug(`Deleting Basket ${basketId}`);
    basketStore.removeBasket(basketId);
    response.redirect('/dashboard');
  },

  addBasket(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newBasket = {
      id: uuidv4(),
      userid: loggedInUser.id,
      name: request.body.name,
      location: request.body.location,
      email: request.body.email,
      phone: request.body.phone,
      products: [
        
      ],
    };
    logger.debug('Creating a new Basket' + newBasket);
    basketStore.addBasket(newBasket);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
export default dashboard;