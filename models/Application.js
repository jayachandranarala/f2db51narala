const mongoose = require("mongoose") 
const ApplicationSchema = mongoose.Schema({ 
    App_Name: String, 
    App_Company: String, 
    App_Size: Number,
    App_Rating: Number,
    App_Category: String 
}) 
 
module.exports = mongoose.model("Application", 
ApplicationSchema) 