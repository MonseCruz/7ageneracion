const fs = require('fs') 

fs.mkdir('nueva_carpeta',(error)=>{
    if(error){
        console.log('Hubo un error al crear la carpeta')
        return 
    }
    console.log('Carpeta creada')
})