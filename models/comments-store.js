
'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const commentStore = {
store: new JsonStore('./models/comments-store.json', { comments: [] }),
collection: 'comments',

getAllComments() {
return this.store.findAll(this.collection);
},

addComment(comment) {
this.store.add(this.collection, comment);
},
};

export default commentStore;