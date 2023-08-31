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

'use strict';

// import logger module
import logger from '../utils/logger.js';

// import JsonStore module
import JsonStore from './json-store.js';

// create a commentStore object
const commentStore = {

// initialize store property as an instance of JsonStore class, passing in the file path and an initial data object
store: new JsonStore('./models/comments-store.json', { comments: [] }),
// initialize collection property
collection: 'comments',

// method to get all comments from the store
getAllComments() {
return this.store.findAll(this.collection);
},

// method to add a new comment to the store
addComment(comment) {
this.store.add(this.collection, comment);
},

// method to remove a comment from the store by its ID
removeComment(id) {
this.store.remove(this.collection, id);
},

};

// export the commentStore object
export default commentStore;