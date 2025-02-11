'use strict';
/* get element by name **********
var fname = document.getElementsByName('firstName');
console.log(fname);
fname[0].focus(); */
/* GET ELEMENT BY TAG NAME **********
var input = document.getElementsByTagName("input");
console.log(input); */
/*  GET ELEMENT BY CLASS NAME
var para = document.getElementsByClassName('para');
console.log('para'); */
/* STYLING OF NUMBERS USING CSS **************************
var num = prompt("enter the number nigga");
var para = document.getElementById("para");
if(num < 20){
    para.innerHTML= `<p> the number is ${num}</p>`;
    para.style.color = "green";
} else{
    para.innerHTML= `<p> the number is ${num}</p>`;
    para.style.color = "red"; 
} */ 
/* CREATE ELEMENT ********************
var body = document.getElementById("body");
var parentdiv = document.createElement('div');
body.appendChild(parentdiv);
var paragraph = document.createElement(`p`);
paragraph.innerHTML = "i am a paragraph";
parentdiv.appendChild(paragraph) */

