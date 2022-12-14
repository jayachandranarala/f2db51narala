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

    // Handle Application create on POST. 
    exports.Application_create_post = async function(req, res) { 
        console.log(req.body) 
        let document = new Application(); 
        // We are looking for a body, since POST does not have query parameters. 
        // Even though bodies can be in many different formats, we will be picky 
        // and require that it be a json object 
        // {"App_Name":"Walmart", "App_Company":"Walmart corporation", "App_Size":31.2,"App_Rating":4.8 , "App_Category":"shopping"} 
        document.App_Name = req.body.App_Name; 
        document.App_Company = req.body.App_Company; 
        document.App_Size = req.body.App_Size;
        document.App_Rating = req.body.App_Rating;
        document.App_Category = req.body.App_Category; 
        try{ 
            let result = await document.save(); 
            res.send(result); 
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
 

// Handle Application delete form on DELETE. 
exports.Application_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Application delete DELETE ' + req.params.id); 
}; 
 
// Handle Application update form on PUT. 
exports.Application_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Application update PUT' + req.params.id); 
}; 


// for a specific Application. 
exports.Application_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Application.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 


// Handle Application update form on PUT. 
exports.Application_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Application.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.App_Name) toUpdate.App_Name = req.body.App_Name; 
        if(req.body.App_Company) toUpdate.App_Company = req.body.App_Company; 
        if(req.body.App_Size) toUpdate.App_Size = req.body.App_Size;
        if(req.body.App_Rating) toUpdate.App_Rating = req.body.App_Rating;
        if(req.body.App_Category) toUpdate.App_Category = req.body.App_Category; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle Application delete on DELETE. 
exports.Application_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Application.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.Application_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Application.findById( req.query.id) 
        console.log(result)
        res.render('Applicationdetail',  { title: 'Application Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a Application. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Application_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('create', { title: 'Application Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a Application. 
// query provides the id 
exports.Application_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Application.findById(req.query.id) 
        res.render('Applicationupdate', { title: 'Application Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.Application_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Application.findById(req.query.id) 
        res.render('Applicationdelete', { title: 'Application Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
