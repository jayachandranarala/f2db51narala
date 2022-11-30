var express = require('express'); 
const Application_controlers= require('../controllers/Application'); 
var router = express.Router(); 
 // A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET Application */ 
router.get('/', Application_controlers.Application_view_all_Page ); 
 
/* GET detail Application page */ 
router.get('/detail', Application_controlers.Application_view_one_Page);

/* GET create Application page */ 
router.get('/create',secured, Application_controlers.Application_create_Page);

/* GET create update page */ 
router.get('/update',secured, Application_controlers.Application_update_Page); 

//* GET delete Application page */ 
router.get('/delete',secured, Application_controlers.Application_delete_Page);
module.exports = router;
