'use strict';

// import all required modules
import logger from '../utils/logger.js';
import developerStore from '../models/developer-store.js';

// create about object
const about = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('about rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'About the Playlist App',
      developers: developerStore.getAllDevelopers(),
    };
    
    // render the about view and pass through the data
    response.render('about', viewData);
  },
};

// export the about module
export default about;












<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://furtive-common-bougon.glitch.me/</loc>
  <lastmod>2023-04-26T00:09:09+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://furtive-common-bougon.glitch.me/dashboard</loc>
  <lastmod>2023-04-26T00:09:09+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://furtive-common-bougon.glitch.me/about</loc>
  <lastmod>2023-04-26T00:09:09+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://furtive-common-bougon.glitch.me/basket/a71d9dbb-ec22-42ec-a314-f002cb6aef91</loc>
  <lastmod>2023-04-26T00:09:09+00:00</lastmod>
  <priority>0.64</priority>
</url>


</urlset>