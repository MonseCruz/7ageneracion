 /*output: "Brenda Gonzalez   BG" */

/* 
 var bmentorsNames = [
     "Brenda Gonzales",
     "Shalem Solis",
     "Jorge Ochoa",
     "Rurick Maqueo",
     "Alex Cruz",
     "Daniel Ortega"
 ]
 var amentorNames = [
    "Israel Salinas",
    "Carlos Solva",
    "Caro Gayoso",
    "Veronica Nemecio"
 ] */

 /* bmentorsNames.forEach( (name) => {

    var dividedName = name.split(" ");
    var initiales = "";
    dividedName.forEach( (division) => {
        initiales += division.charAt(0) + ". "
    })
    console.log(`Nombre: ${name} -> ${initiales}`)
 })
 */

  var initials = "";
 const getInitials = (word) => initials += word.charAt(0) + ". "
 
 /*amentorNames.forEach( (name) =>{
    var dividedName = name.split(" ");
    dividedName.forEach(getInitials)
    console.log(`${name} -> ${initials}`)
    initials = "";
 })

 const printSomeText = (textToPrint) => {
     console.log(textToPrint)
 }
 
 bmentorsNames.forEach(printSomeText)*/


 const printNamesInitials = (arrayToPrint) => {
    arrayToPrint.forEach( (name) =>{
        var dividedName = name.split(" ");
        dividedName.forEach(getInitials)
        console.log(`${name} -> ${initials}`)
        initials = "";
    })
}

/* const twoNumbersAddition = (number1, number2) => {
    alert(`La suma de tus valores es: ${number1 + number2}`)
}

var numberArray = [13,23,45,12,9]
var otherNumbersArray = [54,32,45,12,9]

const getNumbersAverage = (arrayToComputo) => {
    let total = 0;
    let countNumbers = 0;
    arrayToComputo.forEach( (item) => {
        total +=item
        countNumbers += 1;
    })
    let average = total/countNumbers;
    console.log(`El promedio de este array es: ${average}`)
}

 */
/*Crear una función que me permita elegir un aoperación basica, indicar 2 numeros y dar el resultado */
/*Llamar la función getResultOperationBasic
  imprimir un mensaje mediante promt que elija cuales son las opciones de operaciones basicas y con que palabra 
  o simbolo solicitar aluna de las opciones 
  asignar a una variable operation cual fue la opción que elijió el usuario
  pedir mediante promt el primer número y asignarlo a una varible firstNumber
  pedir mediante promt el segundo número y asignarlo a una variable secondNumber
  en una variable result asignar el resultado de aplicar la operacion solicitada a los valores dados
  con console.log imrpmir "La ${operation} de los números que indicaste es: ${result}" */

  
 /*  const getResultOperationBasic = () =>{
     
      
      var operation = prompt("Escribe el número que le corresponde a la operacion que deseas 1) Suma, 2) Resta,3) División,4) Multiplicación")
      var firstNumber = prompt("ingresa el primer número")
      var secondNumber = prompt("ingresa el segundo número")
      var result = 0;
      
      if(operation == "1"){
          result = firstNumber + secondNumber;
          console.log(`La suma de los números que indicaste es: ${result}`)
      }
      else if(operation == "2"){
        result = firstNumber - secondNumber;
        console.log(`La resta de los números que indicaste es: ${result}`)
    }
    else if(operation == "3" ){
        result = firstNumber / secondNumber;
        console.log(`La división de los números que indicaste es: ${result}`)
    }
    else if(operation == "4"){
        result = firstNumber * secondNumber;
        console.log(`La multiplicaciónde los números que indicaste es: ${result}`)
    }


} */

//función que me permita ingresar el nombre de un array, y contar cuántos items tiene, si el array no existe, debe enviar un prompt que diga "tu array no existe"
//función que reciba un array, e imprima los elementos de ese array en orden alfábetico y con la primer palabra en uppercase
//función que reciba un array, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado
//función que reciba una cantidad (número), este número será la cantidad de veces que se solicite al usuario mediante un prompt algún nombre, todos los nombres se deben almacenar en una colección y al finalizar me debe mostrar la lista de nombres, con sus respectivas iniciales

var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]
var amentorsNames = [
    "Verónica Nemecio",
    "Carolina Gayoso",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Israel Salinas",
    "Carlos Ramos"
]

const arrayExist = (arrayName) => {
    if(arrayName == "bmentorsNames" || arrayName == "amentorsNames"){
        return 1;
    }
    else{
        return 0;
    }
}

const getLenghtArray = (arrayName) =>{

    if(arrayName == "bmantorsNames"){
        var totalElements = bmentorsNames.length
       console.log(totalElements)
    }else if(arrayName == "amantorsNames"){
        var totalElements = amentorsNames.length
       console.log(totalElements)
    }else{
        console.log("Array no encontrado ")
    }

}