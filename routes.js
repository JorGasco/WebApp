'use strict';

// import express and initialise router
import express from 'express';
const router = express.Router();

// import controllers
import welcome from './controllers/welcome.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';

// connect routes to controllers
router.get('/welcome', welcome.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

// export router module
export default router;
