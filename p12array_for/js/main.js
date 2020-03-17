/*
1)declaramos la variable total
2)mediante prompt solicitamos la cantidad de koders  y asignamos a total
3)declaramos un arreglo llamado nameCollection
4)con un ciclo for recorremos el arreglo for(i=0; i<total; i++ ) recorremos nameCollection y guardamos un nombre en cada posicion
5)
*/


var total
total = prompt("ingresa el total de koders");
var nameCollection=[];
var i;
for(i=0;i<total;i++){
  nameCollection[i]= prompt(`dame el nombre completo ${i}`)
}
for(i=0;i<total;i++){
  nameCollection.forEach(name =>  console.log(nameCollection[i].slice("")));
}