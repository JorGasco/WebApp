import express from 'express';
const router = express.Router();

// import controllers
import welcome from './controllers/welcome.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import basket from './controllers/basket.js';

// connect routes to controllers
router.get('/', welcome.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/basket', basket.index);
router.post('/basket/add', basket.addToBasket);

// export router module
export default router;