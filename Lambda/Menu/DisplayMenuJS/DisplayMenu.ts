/*
    fc

var AWS= require("aws-sdk"),                            
    DDB = new AWS.DynamoDB({
        apiVersion: "2012-08-10",
        region: "eu-central-1"
    });    

    AWS.config.update({region: 'eu-central-1'});

exports.handler = async function(event, context, callback){ 
    try{
        //if(event.queryStringParameters && event.queryStringParameters.menuid && event.queryStringParameters.menuid !== ""){
            displayMenu(callback, "fctest" );
        // }else{
        //     return "not parameter 'menuid' in request";
        // }
    }catch(e){
        return e;
    }
 };
 
 function displayMenu(cb, menuIdStr){
        var params = {
             TableName: "menu",
             ExpressionAttributeNames: {
                "#menu": "menuid"
             },
             FilterExpression: "#menu = :menuid_val",
             ExpressionAttributeValues: { ":menuid_val": {"S" :menuIdStr} }
            };
        DDB.scan(params, function(err, data){
                if(err){
                    throw err;
                }
                cb(null, JSON.stringify(data.Items))
            });

 }

 displayMenu(console.log, "fctest");
 */

 /*
 const AWS = require("aws-sdk");

 const dynamo = new AWS.DynamoDB.DocumentClient();
 
 exports.handler = async (event, context) => {
   let body;
   let statusCode = 200;
   const headers = {
     "Content-Type": "application/json"
   };
   body = await dynamo
   .get({
     TableName: "menu",
     Key: {
       menuid: "fctest"
     }
   })
   .promise();
     body = JSON.stringify(body);
 
   return {
     statusCode,
     body,
     headers
   };
 };
 */