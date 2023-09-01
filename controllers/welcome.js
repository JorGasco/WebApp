'use strict';

// import all required modules
import logger from '../utils/logger.js';
import basketStore from '../models/basket-store.js';
import accounts from './accounts.js';

// create welcome object
const welcome = {

  // index method - responsible for creating and rendering the view
  index(request, response) {
const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');
    if(loggedInUser){
    //app Calculations
const baskets = basketStore.getAllBaskets();
    let numBaskets = baskets.lenght;
    let numProducts = 0;


    for (let item of baskets){
      numProducts += item.products.lenght;
    }
    
    
   

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Welcome Company Product Collection',
      totalBaskets: numBaskets,
      totalShoes: numProducts,
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };

    // render the start view and pass through the data
    response.render('welcome', viewData);
  }
      else response.redirect('/');
  },
};

// export the welcome module
export default welcome;
