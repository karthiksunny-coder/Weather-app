 'use strict';
 /* SET TIMEOUT ***************
let hello = () => {
    console.log("hello niggerrrr");
    
}
setTimeout(hello,1000) */
/* SET INTERVAL *****************8 */
/* SET INTERVAL *************************
let hello = () => {
    document.write("hello niggerrrr +  ");
    
}
let timerid = setInterval(hello,2000);

setTimeout(() => {
    clearInterval(timerid);
    alert("stop it niggerrr")
},6000)  */
/* ONC CLICK EVENT */
function onbuttonclick() {
    var body = document.getElementById("body");
    var para = document.createComment('p');
    body.append(para);
    
} 

 /*   On Change Event */
 
function ondropdownchange(event){
    console.log("dropdown value changed",event.target.value);
    
} 
/* ON KEY DOWN CHANGE *************
function keypress(event){
    console.log("key pressed ",event.target.value);
    
}
/* MOUSE OVER *************/
function mouseover(event){
    console.log(event);
    document.getElementById("box").style.backgroundColor="red";
}
/****** MOUSE OUT **************/
function mouseout(event){
    console.log(event);
    document.getElementById("box").style.backgroundColor="white";
    
    
}