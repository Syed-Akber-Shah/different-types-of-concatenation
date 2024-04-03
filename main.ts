// different methods of concatenation
let myName: string = "Syed Akber Shah";
let My_Age = 22;
let MyDetail: string = "My name is " + myName + " and my age is " + My_Age

MyDetail = myName + My_Age
console.log(MyDetail)

let short_Intro : any = myName + ' ' + My_Age


let explanation = `My Name is ${myName} and my age is ${My_Age}.`

explanation = `${myName} ${My_Age}`
console.log(explanation)

//temper difference

short_Intro = `${myName} ${My_Age}`;
console.log(short_Intro)






