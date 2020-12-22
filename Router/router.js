const express = require('express');

var userController = require('../Controller/User');
var batchController =require('../Controller/batch');

var contactController =require('../Controller/contact');

const router = express.Router();

router.post('/signup' , userController.signUp);
router.post('/login', userController.login);
router.post('/batch' , batchController.batchBook);

router.post('/contact' , contactController.contact);



module.exports = router;





