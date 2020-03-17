 // crear una función que pida al usuario las propiedades nombre {nombre}, apellido {apellido}, 
 //edad {edad} y teléfono {teléfono} de un koder y crear un objeto {koderObject} con esos datos



function creatObject(){

    const koder1 =  new  Object ( );
    koder1.firstnName =  prompt ( "Ingresa tu nombre(s)" )
    koder1.lastName   =  prompt ( "Ingresa tus apellido" )
    koder1.age        =  prompt ( "Ingresa tu edad" )
    koder1.phone      =  prompt ( "Ingresa tu teléfono" )

    console.log(koder1)
}



