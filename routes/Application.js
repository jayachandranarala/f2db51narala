var express = require('express'); 
const Application_controlers= require('../controllers/Application'); 
var router = express.Router(); 
 
/* GET Application */ 
router.get('/', Application_controlers.Application_view_all_Page ); 
 

/* GET detail Application page */ 
router.get('/detail', Application_controlers.Application_view_one_Page);


/* GET create Application page */ 
router.get('/create', Application_controlers.Application_create_Page);



/* GET create update page */ 
router.get('/update', Application_controlers.Application_update_Page); 



//* GET delete Application page */ 
router.get('/delete', Application_controlers.Application_delete_Page);
module.exports = router;

