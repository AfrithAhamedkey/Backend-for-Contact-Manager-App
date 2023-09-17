const {constants} = require('../constants.js')

const errorHandler = (err,req,res,next)=>{
 const statusCode = res.statusCode ? res.statusCode : 500

 switch (statusCode){
    case constants.VALIDATION_ERROR:res.json({
        title:"Validation Faild" , 
        message:err.message,
        stackTrace:err.stack
    })
    break;

    case constants.UNAUTHORIZED:res.json({
        title:"UnAuthorized" , 
        message:err.message,
        stackTrace:err.stack
    })
    break;
    case constants.FORBIDDEN:res.json({
        title:"Forbidden" , 
        message:err.message,
        stackTrace:err.stack
    })
    break;
    case constants.NOT_FOUND:res.json({
        title:"Not Found" , 
        message:err.message,
        stackTrace:err.stack
    })
    break;

    case 500 :res.json({
        title:"Server Error" ,
         message:err.message,
         stackTrace:err.stack
        })
        break;
    default:
            console.log("No Error...");
            break;
 
}
 }
 //res.json({title:"not Found" , message:err.message,stackTrace:err.stack})
 

module.exports = errorHandler