const Controller = require("../controllers")
const AdminController = require("../controllers/AdminController")
const authentication = require('../middleware/authentication')
const errorHandler = require('../middleware/errorHandler')

const router = require('express').Router()

router
  .post('/login', AdminController.loginAdmin)
  .get('/items', Controller.findAllItems)
  .get('/items/:id', Controller.findOneItem)
  .get('/categories', Controller.findAllICategories)
  .use(authentication)
  .post('/register', AdminController.registerAdmin)
  .post('/items', AdminController.createItem)
  .put('/items', AdminController.updateItem)
  .delete('/items', AdminController.deleteItem)
  .post('/categories', AdminController.createCategory)
  .put('/categories', AdminController.updateCategory)
  .delete('/categories', AdminController.deleteCategory)
  .use(errorHandler)

module.exports = router