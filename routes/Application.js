var express = require('express'); 
const Application_controlers= require('../controllers/Application'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', Application_controlers.Application_view_all_Page ); 
module.exports = router; 