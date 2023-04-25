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


router.get('/basket/:id', basket.index);


router.get('/basket/:id/deleteProduct/:Productid', basket.deleteProduct);
router.get('/dashboard/deleteBasket/:id', dashboard.deleteBasket);



router.post('/basket/:id/addProduct', basket.addProduct);
router.post('/dashboard/addBasket', dashboard.addBasket);

router.post('/basket/:id/updateProduct/:Productid', basket.updateSong);

// export router module
export default router;