 
 const express= require('express');

// const bodyParser = require("bodyParser"); 



 const app= express();

 app.use(express.urlencoded());


 app.get("/",function(req,res){
  
   //  res.sendFile(__dirname +"/index.html")

    res.sendFile(__dirname +"/bmiCalculator.html")

 });-







 app.post("/", function(req,res){

   console.log("hello there")
    console.log(req.body);


   //  var num1= Number(req.body.n1);
   //  var num2= Number(req.body.n2);
   //  var result= num1+num2;

   



   var h= parseFloat(req.body.height);
   var w= parseFloat(req.body.weight);


   var bmi=w;

    h=parseFloat(Math.pow(h,2));

   bmi=parseFloat(bmi/h);

   // var bmi=(w/h*h);



    res.send("Your bmi is :"+bmi);



   //  res.send("The result of the calculation is : "+ result)
 });



//  app.post("/",function(req,res){

    
//  });

 


 app.listen(4000, function(){

    console.log("Server started on the port 3000.")
 });
