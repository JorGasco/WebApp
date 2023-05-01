'use strict';

// import all required modules
import logger from '../utils/logger.js';
import commentsStore from '../models/comments-store.js';
import accounts from './accounts.js';


// create comments object
const comments = {

  // add comment method - responsible for adding a new comment to the store
  addComment(request, response) {
    const comment = {
      user: accounts.getCurrentUser(request).email,
      date: new Date(),
      text: request.body.comment
    };
    commentsStore.addComment(request.params.id, comment);
    response.redirect('/about');
  },

  // display comments method - responsible for rendering the comments view with comments data
  displayComments(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    // display confirmation message in log
    logger.info('comments rendering');
    if (loggedInUser) {
      // get comments data from the comments store for the specified article
      const articleComments = commentsStore.getComments(request.params.id);

      // create view data object (contains data to be sent to the view e.g. page title)
      const viewData = {
        title: 'Comments',
        comments: articleComments,
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName
      };

      // render the comments view and pass through the data
      response.render('comments', viewData);
    } else {
      response.redirect('/');
    }
  },

};

// export the comments module
export default comments;