const express = require('express')
const router = express.Router();
const BookController = require('../controllers/bookController');
const { authandicate } = require('../middleware/authentication.js');
const { isAuthorization } = require('../middleware/isAuthorization.js');

router.post('/createBook',authandicate,isAuthorization('admin'),BookController.createBook)
router.get('/getAllBooks',authandicate,isAuthorization('admin','staff','reader'),BookController.getAllBooks)
router.put('/updateBookById/:id',authandicate,isAuthorization('admin','staff'),BookController.updateBookById)
router.delete('/deleteBookById/:id',authandicate,isAuthorization('admin' ,'staff'),BookController.deleteBookById)
router.get('/getbookByName',BookController.getbookByName)

module.exports = router ;