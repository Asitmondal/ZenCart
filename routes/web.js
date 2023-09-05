import express from 'express'
const router = express.Router()
import UserController from '../controllers/userController.js'

router.get('/', UserController.home)
router.get('/shop', UserController.shop)
router.get('/blog', UserController.blog)
router.get('/about', UserController.about)
router.get('/contact', UserController.contact)
router.get('/sproduct', UserController.sproduct)
router.get('/registration', UserController.registration)
router.post('/registration', UserController.createUserDoc)
router.get('/login', UserController.login)
router.post('/login', UserController.verifyLogin)
router.get('/cart', UserController.cart)

export default router