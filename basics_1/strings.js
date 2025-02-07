//for concatenation
const name ="sam"
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //best way to concat
const gameName = new String('sam-iks-ha')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.charAt(0))
console.log(gameName.toUpperCase())
console.log(gameName.length)
console.log(gameName.indexOf('a'))

//substring
const newString = gameName.substring(0,4) //sami - not including 4 index value
console.log(newString)

//slice - here negativevalues are allowed - reverse will print
const anotherString = gameName.slice(-7,4)
console.log(anotherString)

//trim removes spaces
const newStringOne = "   sam   "
console.log(newStringOne)
console.log(newStringOne.trim())

//replace
const url = "https://abc%20defghj"
console.log(url.replace('%20', '-')) //replace %20 by -
console.log(url.includes("sundar")) //check whether url includes sundar or not

//splits- split into arrayon basis of given argument
console.log(gameName.split('-'))