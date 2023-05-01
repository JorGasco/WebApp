'use strict';

// import all required modules
import logger from '../utils/logger.js';
import developerStore from '../models/developer-store.js';
import accounts from './accounts.js';
import { v4 as uuidv4 } from 'uuid';
import commentsStore from './comments-store.js';

// create about object
const about = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    // display confirmation message in log
    logger.info('about rendering');
     if (loggedInUser) {
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'About the WareHouse',
      developers: developerStore.getAllDevelopers(),
       fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    
    // render the about view and pass through the data
    response.render('about', viewData);
       
       }
    else response.redirect('/');    
  },
  
// AddComment method - responsible for adding a new comment to the comments store
  addComment(request, response) {
    const comment = request.body.comment;

    // Check if comment is not empty
    if (comment.trim().length > 0) {
      const newComment = {
        id: uuidv4(),
        user: accounts.getCurrentUser(request),
        date: new Date(),
        comment: comment.trim(),
      };

      // Add the new comment to the comments store
      commentsStore.addComment(newComment);

      // Redirect to the about page
      response.redirect('/about');
    } else {
      // If comment is empty, redirect to the about page with an error message
      response.redirect('/about?error=comment');
    }
  },
};



// export the about module
export default about;












