const mongoose = require("mongoose") 
const ApplicationSchema = mongoose.Schema({ 
    App_Name: {type: String,required: [true, 'Application Name cannot be empty']}, 
    App_Company: {type: String,required: [true, 'Application Company cannot be empty']}, 
    App_Size: {type: Number,required: [true, 'Application Size cannot be empty']},
    App_Rating: {type: Number,required: [true, 'Application Rating cannot be empty']},
    App_Category: {type: String,required: [true, 'Application Category cannot be empty']} 
}) 
 
module.exports = mongoose.model("Application", 
ApplicationSchema) 