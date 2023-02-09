'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const developers = require("./developer-store.json");

const developerStore = {

  // import the playlist collection object
  developers: developers.developers,

  // function to get all of the playlists
  getAllDevelopers() {
    return this.developers;
  },

};

// export the playlistStore object so it can be used elsewhere
export default developerStore;
