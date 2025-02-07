const score = 400
console.log(score)
const balance = new Number(100); //cumpolsory number
console.log(balance)

console.log(balance.toString().length)//3  //ab string bn gya so we can apply all string properties to it
console.log(balance.toFixed(2)) //give precision values to 2 points  //mostly used in e commerce

const anotherNumber = 234.8896
console.log(anotherNumber.toPrecision(4)) //4 digits hi dega

//toLocaleString() - comma laga deta h
const hundreds = 1000000
console.log(hundreds.toLocaleString())//acc to us values
console.log(hundreds.toLocaleString('en-IN'))//put commas according to indian values


//-------------MATH LIBRARY---------

console.log(Math) //Object [Math] {}
console.log(Math.abs(-4)) //removes negative sign - absolute value
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.2))//5 - top val
console.log(Math.floor(4.2)) //4 - bottom val
console.log(Math.min(4,7,6,2))//2
console.log(Math.max(4,7,5,2))//7

//random
console.log(Math.random())
console.log((Math.random()*10)+1)

const min = 10
const max =20
console.log(Math.floor(Math.random() * (max - min + 1)) + min )