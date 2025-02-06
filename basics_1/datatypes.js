"use strict"; //treat all js code as newer version
//alert(2+2); we are using nodejs not browser
//datatypes are - primitive (7) - - nnbbssu 
// non primitive-(3) - object, array, function - inn sabka datatype function aata h
//number - 23
//null - standalone value
//boolean - true/false
//bigint - big integer used in stock
//string - "hello"
//symbol - unique
//undefined - value is not defined

//object
let a ="hii"
console.log(typeof a)

//conversion to number
//"33" = 33
//"33abc" = NaN
//true = 1  false=0

//conversion to boolean
//1 = true  0=false
//""=false
//"hitesh"= true

let someNum = 33
let stringnum = String(someNum)
console.log(stringnum)

//OPERATIONS

let value = 3
let negvalue = -value
console.log(negvalue)

//+ , -, *, /, %
console.log(2**3)//power operator
let str1 = "hii"
let str2 = " sam"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log(1+2+"2")//32
console.log("1"+2+2)//122

//array
const arr = [2, 2 ,3, 4, 5];


//object
const obj= {
     age: 5,
     name: "Sam",

}

//Function
const func= function(){
    console.log("hello world");
}