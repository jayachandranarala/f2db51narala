var Application = require('../models/Application'); 
 
// List of all Application 
exports.Application_list = async function(req, res) { 
    try{ 
        theApplication = await Application.find(); 
        res.send(theApplication); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 


// List of all Application 
// Handle a show all view
exports.Application_view_all_Page = async function(req, res) {
    try{
    theApplication = await Application.find();
    res.render('Application', { title: 'Application Search Results', results: theApplication });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// for a specific Application. 
exports.Application_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Application detail: ' + req.params.id); 
}; 
 
// Handle Application create on POST. 
exports.Application_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Application create POST'); 
}; 
 
// Handle Application delete form on DELETE. 
exports.Application_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Application delete DELETE ' + req.params.id); 
}; 
 
// Handle Application update form on PUT. 
exports.Application_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Application update PUT' + req.params.id); 
}; 