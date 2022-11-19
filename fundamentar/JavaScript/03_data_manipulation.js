let string = "123"
Number(string)
let number = 321
console.log(String(number))
console.log(String(number).length)

let decimal = 123.25
console.log(decimal.toFixed(2).replace(".",","))

let pokemon = "CHARmander"
console.log(pokemon.toUpperCase())
console.log(pokemon.toLowerCase())

let phrase = "Parte1 Parte2"
let array = phrase.split(" ")
let newPhrase = array.join("_")
console.log(array)
console.log(newPhrase)

console.log(newPhrase.includes("Parte"))

let myArray = new Array(
    "a",
    "b",
    "c",
    "d",
    "e"
)
console.log(myArray)
console.log(myArray.length)

let word = "Separar"
console.log(Array.from(word))

let techs = ["cachorro", "gato", "hamster"]
techs.push("pássaro")
techs.unshift("cobra")
techs.pop()
techs.shift()
console.log(techs.slice(2,3))

console.log(techs)
techs.splice(1,1)
console.log(techs)

let index= techs.indexOf("cachorro")
console.log(index)

techs.splice(index,1)
console.log(techs)


