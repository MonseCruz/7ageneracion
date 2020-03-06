// tener y comparar los valores de x, y 
// si x es mayo que y,mostrar un mensaje que lo indique
// si x es menor que y,mostrar un mensaje que lo indique

/* var x = 13;
var y = 345;

if(x>y){
     console.log(x, "es mayor que ", y);
}else if(x<y){
    console.log(x, "es menor que ", y);
}else {
    console.log(x, "es igual que ", y); 
} */

//asignar y multiplicar 2 valores y verificar si el resultado es par o non e indicarlo con un mensaje

//crear tres variables x,y,z,r
//asignar valor  x & y
//guardar en z el resultado de la multiplicación de x * y
//dividir z entre 2 y asignar el % a r
//preguntar si r  es igual a cero
//si el resultado es true imprimir que el resultado de multiplicar x * y es un número par
//en caso contrario imprimir que el resultado de multiplicar x * y es un número impar

/* var x = 10;
var y = 3;
var z, r

z = x * y; 
r = z/2;
if((r % 2)==0){
    console.log(`El resultado de multiplicar ${x} por ${y} es un número par`);
}else{
    console.log(`El resultado de multiplicar ${x} por ${y} es un número impar`);
}

 */



//ejercicio 3
//recibir un número del usuario y calcular el area del circulo cuyo radio sera el número dado por el usuario

//1)Declarar la variable r donde se recibirá un número 
//2)Crear un  metodo prompt que pide un número al usuario con 
//los siguientes argumentos prompt("Ingresa el radio del circulo","escribe un número")
//3)Asignar a la variable r el valor obtenido desde el metodo prompt
//4)Declarar la constante PI con el valor 3.1416
//5)Declarar la variable result_area
//6)Asignar a la variable result_area la formula matemática para calcular el área de un circulo 
//con la siguiente estructura result_area = PI * (r^2) siendo PI la constante previamente declarada y r la variable 
//dónde se guardó el número dado por el usuario
//7)Imprimir un mensaje que diga el área de un circulo con radio r es igual a result_area dónde r y result_area 
//son las variables previamente usadas 

/* var r
r = prompt("Ingresa el radio del circulo","escribe un número")

var PI = 3.1416

var result_area

result_area = PI * (Math.pow(r,2)) 

console.log(`El área de un circulo con radio ${r} es igual a ${result_area}`) */

//Practica 4
      //Declarar las variables  sideOne, sideTwo, sideThree, areaResult, perimeter, semiperimeter
      //Asignar un valor númerico a la variable sideOne mediante un objeto prompt("Lado uno del triangulo","Escribe un número")
      //Asignar un valor númerico a la variable sideTwo mediante un objeto prompt("Lado dos del triangulo","Escribe un número")
      //Asignar un valor númerico a la variable sideThree mediante un objeto prompt("Lado tres del triangulo","Escribe un número")
      //Preguntar si la suma de sideOne y sideTwo es mayor que sideThree  y si la suma de sideOne y sideThree es mayor que sideTwo  y  si la suma de sideTwo y sideThree es mayor que sideOne
      //Si son verdad las tres afirmaciones continuar con los calculos si al menos una es falsa imprimir el mensaje "Es imposible formar un riangulo con esos valores, por tanto no se puede calcular el área ni definir su tipo"
      //Obtener el valor del perimetro con la formula perimeter = sideOne + sideTwo + sideThree
      //Obtener el valor del semiperimetro con la formula semiperimeter = perimeter / 2
      //Sustituir los valores obtenidos en la siguiente formula areaResult = pow((semiperimeter * (semiperimeter - sideOne) * (semiperimeter - sideTwo) * (semiperimeter - sideThree) ),2)
      //Imprimir el mensaje "El área del triangulo es "areaResult
      //Preguntar si sideOne, sideTwo, sideThree son iguales, de ser cierto imprimir el siguiente mensaje "El triangulo es equilatero"
      //Si la afirmación  anterior es falsa entonces preguntar sí sideOne y sideTwo son iguales o sí sideTwo y sideThree son iguales o sí sideOne y sideThree son iguales, de ser cierta alguna de las tres afirmaciones imprimir el siguiente mensaje "El triangulo es isoseles"
      //Si las afirmaciones anteriores son falsas entonces imprimir el siguiente mensaje "El triangulo es escaleno"
    
    var sideOne
    var sideTwo
    var sideThree
    var areaResult
    var perimeter
    var semiperimeter

    sideOne = prompt("Lado uno del triangulo","Escribe un número")
    sideTwo = prompt("Lado dos del triangulo","Escribe un número")
    sideThree = prompt("Lado tres del triangulo","Escribe un número")

    /* if( ((sideOne + sideTwo) > sideThree) && ((sideOne + sideThree) > sideTwo) && ((sideThree + sideTwo) > sideOne)){ */

        perimeter = sideOne + sideTwo + sideThree;
        semiperimeter = perimeter/2;
        areaResult = Math.sqrt(semiperimeter*(semiperimeter - sideOne)*(semiperimeter - sideTwo)*(semiperimeter - sideThree));
        console.log(`El área del triángulo es ${areaResult}`);

        if((sideOne == sideTwo) && (sideOne == sideThree)){
            console.log("El triángulo es equilatero");
        }else if((sideOne == sideTwo) || (sideOne == sideThree) || (sideTwo == sideThree)){
            console.log("El triángulo es isoseles");
        }else if((sideOne != sideTwo) && (sideOne != sideThree)){ console.log("El triángulo es escaleno")}
    // }else {console.log("Con los valores dados no se puede crear un triángulo");}


//Practica 5
      //Reutilizando las variables y valores de la practica 4 preguntar si sideOne es mayor que sideTwo
      //Si es verdad preguntar si sideOne es mayor que sideThree
      //Si es verdad preguntar si se cumple la siguiente igualdad pow(sideOne,2) = pow(sideTwo,2) + pow(sideThree,2) y si se cumple imprimir el mensaje "El trinágulo es rectangurlo", si no se cumple imprimir "El triángulo no es rectangulo".
      //Si es falso que sideOne es mayor que sideTwo preguntar si sideTwo es mayor que sideThree y de ser cierto preguntar si se cumple la siguiente igualdad   pow(sideTwo,2) = pow(sideOne,2) + pow(sideThree,2) y si se cumple imprimir el mensaje "El trinágulo es rectangurlo", si no se cumple imprimir "El triángulo no es rectangulo".
      //Si es falso que sideTwo es mayor que sideThree  preguntar si se cumple la siguiente igualdad   pow(sideThree,2) = pow(sideOne,2) + pow(sideTwo,2)  y si se cumple imprimir el mensaje "El trinágulo es rectangurlo", si no se cumple imprimir "El triángulo no es rectangulo".
      
    if(sideOne > sideTwo){
        if(sideOne > sideThree){
            if(Math.pow(sideOne,2) == Math.pow(sideTwo,2) + Math.pow(sideThree,2)){
                    console.log("El triángulo es rectángulo")
            }else{ console.log("El triángulo  no es rectángulo")}
        }else if(sideTwo > sideThre){
            if( Math.pow(sideTwo,2) == Math.pow(sideOne,2) + Math.pow(sideThree,2)){
                console.log("El triángulo es rectángulo")
            }else{ console.log("El triángulo  no es rectángulo")}
        }
    }if(sideOne < sideTwo){
    if(Math.pow(sideThree,2) == Math.pow(sideOne,2) + Math.pow(sideTwo,2)){
        console.log("El triángulo es rectángulo");
      }else{ console.log("El triángulo  no es rectángulo")}
    }














