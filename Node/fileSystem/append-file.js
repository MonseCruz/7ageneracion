const fs = require('fs')

fs.appendFile('write.txt', '\n =>Agregando texto mediante appendFile', 'utf8', (error,data)=>{
    if(error){
        console.log('No se pudo modificar el archivo. ', error)
        return
    }
    console.log('Archivo modificado exitosamente')
}) 