/* var nombre

name = prompt("¿Cúal es tu nombre?","Escribe  aqui")

var without_space = name.trim();
var length_name = without_space.length;

console.log(`Tu nombre tiene ${length_name} caracteres`)

if(length_name < 15){
    console.log("Tu nombre es muy corto")
}else if(length_name >= 15){
    console.log("Tu nombre es muy largo")
}

fullname = prompt("¿Cual es tu nombre de completo?","Escribe  aqui")

vowel = only_vowels.length;


console.log(`Tu nombre tiene ${vowel} vocales`) */

//ejercicio 1
//declarar la variable word
//asignarle a word un valor obtenido mediante el metodo prompt("escribe una palabra")
//obten la longitud de word y asignale ese valor a word_length
//pregunta si word_length es venor a cinco y de ser cierto imprime un mensaje de 
//error "La palabra debe tener al menos 5 letras"
//declara la variable first_syllable y asigna el valor obtenido de word.substring(0,2)
//declara la variable point y asigna el valor de word_length - 2 ;
//declara la variable second_syllable y asigna el valor obtenido de (point,word_length)
//imprime el mensaje de console.log(`Hola, soy ${name} y tengo ${age} años`)
//declara la variable text 

var word = prompt("escribe una palabra");
var word_length = word.length

if(word_length<5){console.error("La palabra debe tener al menos 5 letras")}

var first_syllable = word.substring(0,2)
var point = word_length - 2 ;
var second_syllable = word.substring(point,word_length);


console.log(`La nueva palabra es ${first_syllable}${second_syllable}`)


var name = prompt("Escribe tu nombre")
var age = prompt("Escribe tu edad")


console.log(`Hola, soy ${name} y tengo ${age} años`)

var text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"

var count_estudiante = text.search("estudiante")
console.log(count_estudiante)

console.log(`La palabra estudiante fue encontrada ${count_estudiante} veces`)

var new_text =text.replace(/estudiante/g,"koder")

console.log(new_text)