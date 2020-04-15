//asignar y multiplicar 2 valores y verificar si el resultado es par o non e indicarlo con un mensaje

//crear tres variables x,y,z,r
//asignar valor  x & y
//guardar en z el resultado de la multiplicación de x * y
//dividir z entre 2 y asignar el % a r
//preguntar si el modulo de r  es igual a cero
//si el resultado es true imprimir que el resultado de multiplicar x * y es un número par
//en caso contrario imprimir que el resultado de multiplicar x * y es un número impar

var x = 10;
var y = 3;
var z, r

z = x * y; 
r = z%2;
if(r==0){
    console.log(`El resultado de multiplicar ${x} por ${y} es un número par`);
}else{
    console.log(`El resultado de multiplicar ${x} por ${y} es un número impar`);
}
