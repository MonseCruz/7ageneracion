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
          }else if(sideTwo > sideThree){
              if( Math.pow(sideTwo,2) == Math.pow(sideOne,2) + Math.pow(sideThree,2)){
                  console.log("El triángulo es rectángulo")
              }else{ console.log("El triángulo  no es rectángulo")}
          }
      }if(sideOne < sideTwo){
      if(Math.pow(sideThree,2) == Math.pow(sideOne,2) + Math.pow(sideTwo,2)){
          console.log("El triángulo es rectángulo");
        }else{ console.log("El triángulo  no es rectángulo")}
      }
   
