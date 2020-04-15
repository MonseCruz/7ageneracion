const fs = require('fs') 

fs.rmdir('nueva_carpeta',(error=>{
    if(error){
        console.log('Hubo un error al remover la carpeta',error)
        return 
    }
    console.log('La carpeta fue removida exitosamente')
})) 