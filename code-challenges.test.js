// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

const { expect } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

describe('coded', () => {
    test("returns a coded message", () => {
        expect(coded(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(coded(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(coded(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

//create a function called coded 
//passing in a string
const coded = (string) => {
//use .replace for 'a','e','i','o' to 4,3,1,0 and return
   return string.replace(/a/g,'4').replace(/e|E/g, '3').replace(/i/g,'1').replace(/o/g,'0')
}
console.log(coded(secretCodeWord1))
console.log(coded(secretCodeWord2))
console.log(coded(secretCodeWord3))

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

describe('letter', () => {
    test('returns all the words that contain the letter a', () =>{
        expect(letter(arrayOfWords1)).toEqual(["Apple", "Banana"])
        expect(letter(arrayOfWords2)).toEqual(["Mango", "Orange", "Apricot", "Peach"])
    })
})

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Banana", "Apricot", "Peach"]

// b) Create the function that makes the test pass.

//create a function called letter
//pass in an array
const letter = (array) => {
//set variable for filter
    let m= array.filter(value=>{
//set variable for includes to 'a' or 'A'
     let z=value.includes('a') || value.includes('A')
//conditional if includes is true return value
        if(z === true){
            return value
        }
    })
//return variable
    return m
}
console.log(letter(arrayOfWords1))
console.log(letter(arrayOfWords2))




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

describe('fullHouse', () => {
    test('determines whether or not the array is a full house', () =>{
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// b) Create the function that makes the test pass.

//create a function called fullHouse
//pass in array
const fullHouse = (array) => {
//set counter variable
    let counter = 0
//use map method
    let m = array.map((value,index)  => {
//conditional if value equals value at index 1, and want to compare if value 1 equals value 2 and so on
    if(value === value[1]){
        return
    }
    })
//return counter
    return 
}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))