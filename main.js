"use strict";
// different methods of concatenation
let myName = "Syed Akber Shah";
let My_Age = 22;
let MyDetail = "My name is " + myName + " and my age is " + My_Age;
MyDetail = myName + My_Age;
console.log(MyDetail);
let short_Intro = myName + ' ' + My_Age;
let explanation = `My Name is ${myName} and my age is ${My_Age}.`;
explanation = `${myName} ${My_Age}`;
console.log(explanation);
//temper difference
short_Intro = `${myName} ${My_Age}`;
console.log(short_Intro);
