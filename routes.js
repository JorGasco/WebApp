import express from 'express';
const router = express.Router();

// import controllers
import welcome from './controllers/welcome.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import basket from './controllers/basket.js';
import accounts from './controllers/accounts.js';








// connect routes to controllers
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);
















// connect routes to controllers
router.get('/start', welcome.index);

router.get('/dashboard', dashboard.index);
router.get('/about', about.index);


router.get('/basket/:id', basket.index);


router.get('/basket/:id/deleteProduct/:productid', basket.deleteProduct);
router.get('/dashboard/deleteBasket/:id', dashboard.deleteBasket);



router.post('/basket/:id/addproduct', basket.addProduct);
router.post('/dashboard/addbasket', dashboard.addBasket);

router.post('/basket/:id/updateproduct/:productid', basket.updateProduct);

// export router module
export default router;