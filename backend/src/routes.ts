import { Router } from 'express'
import multer from 'multer'

// Users
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'

// Categories
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { UpdateCategoryController } from './controllers/category/UpdateCategoryController'

// Products
import { CreateProductController } from './controllers/product/CreateProductController'
import { ListProductController } from './controllers/product/ListProductController'
import { UpdateProductController } from './controllers/product/UpdateProductController'
import { FindByIdProductController } from './controllers/product/FindByIdProductController'
import { ListByCategoryProductController } from './controllers/product/ListByCategoryProductController'

// Orders and Items
import { CreateOrderController } from './controllers/order/CreateOrderController'
import { CreateItemOrderController } from './controllers/order/CreateItemOrderController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';
import { RemoveItemOrderController } from './controllers/order/RemoveItemOrderController';
import { DetailsOrderController } from './controllers/order/DetailsOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';

// Send Order
import { SendOrderController } from './controllers/order/SendOrderController'

// Finish Order
import { FinishOrderController } from './controllers/order/FinishOrderController'


// Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated'
import uploadConfig from './config/multer'

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailuserController().handle)

//-- ROTAS CATEGORIA --
router.post('/categories', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new ListCategoryController().handle)
router.put('/categories/:id', isAuthenticated, new UpdateCategoryController().handle)

//-- ROTAS PRODUTO --
//router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.post('/products', isAuthenticated, new CreateProductController().handle)

router.put('/products/:id', isAuthenticated, upload.single('file'), new UpdateProductController().handle)
router.get('/products', isAuthenticated, new ListProductController().handle)




router.get('/products/:id', isAuthenticated, new FindByIdProductController().handle)
router.get('/categories/:categoryId/products', isAuthenticated, new ListByCategoryProductController().handle)

//-- ROTAS PEDIDO --
router.post('/orders', isAuthenticated, new CreateOrderController().handle)
router.post('/orders/items', isAuthenticated, new CreateItemOrderController().handle)
router.delete('/orders/:id', isAuthenticated, new DeleteOrderController().handle)
router.delete('/orders/items/:id', isAuthenticated, new RemoveItemOrderController().handle)
router.get('/orders/:id', isAuthenticated, new DetailsOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)

//-- ROTAS ENVIAR PEDIDO --
router.put('/orders/send', isAuthenticated, new SendOrderController().handle)

//-- ROTAS FINALIZAR PEDIDO --
router.put('/orders/finish', isAuthenticated, new FinishOrderController().handle)

export { router };