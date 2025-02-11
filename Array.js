'use strict';
//push ****************************
//var arr = [1, "sachin" , true , [1 , "kurr" , false ] , "god" , "kiss"];
/*var kar = [];
kar.push(10);
kar.push("karthik");
kar.push(false);
console.log(kar); */
/*pop() ****************************
var char = [10 , "karthik" , true , "lover"];
char.pop();
console.log(char); */
/* UNSHIFT **************************
var arr = [10 , "sachin" , "100 cneturies" , true];
arr.unshift("god");
console.log(arr); */
/*var arr = [10 , "sachin" , "100 cneturies" , true];
arr.shift();
console.log(arr); */
/* JOIN : ***********************8
var arr = [10 , "sachin" , "100 centuries" , true];
console.log(arr.join("&")); */
/* INCLUDES() : ***************************
var arr = [10 , "sachin" , "100 centuries" , true];
console.log(arr.includes("sachin")); */
/* REVERSE :  **************************88
var arr = [10 , "sachin" , "100 centuries" , true];
console.log(arr.reverse()); */
/* SPLICE :  *************************8
var arr = [1 , 2, 3 , 4, 5 , 6, 7, 8];
console.log("original before splicing", arr);
var splicedarr = arr.splice(3,4);
console.log("spliced arr", splicedarr);
console.log("original array after splicing", arr); */
/*var arr = [1 , 2, 3 , 4, 5 , 6, 7, 8];
arr.splice(arr.indexOf(5),1);
console.log(arr); */
/* ARRAY DESTRUCTURING ****************************
var arr = [10 ,20 ,30 ,40];
var [num1 , num2 , num3 , num4] = arr;
console.log(num1 + " " + num2 + " " + num3 + " " + num4 ); */
/* REST PARAMETER  *******************************
var arr = [10 ,20 ,30 ,40];
var [num1 , num2 , ...REST] = arr;
console.log(num1 + " " + num2);
console.log(REST); */
/* OBJEXT DESTRUCTURING  ****************************
var student = {
    firstname : "sachin",
    lastname : "tendulkar",
    middlename : "ramesh",
}
var fname = student.firstname;
var lname = student.lastname;
var mname =  student.mname; 
console.log(fname + " " + lname);
/* OBJECT DESTRUCTURING * REST PARAMETER  ***************
var {firstname , lastname ,...rest} = student;
console.log(firstname + " " + lastname);
console.log(rest); */













