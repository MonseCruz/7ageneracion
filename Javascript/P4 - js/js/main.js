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

 var r
r = prompt("Ingresa el radio del circulo","escribe un número")

var PI = 3.1416

var result_area

result_area = PI * (Math.pow(r,2)) 

console.log(`El área de un circulo con radio ${r} es igual a ${result_area}`) 
