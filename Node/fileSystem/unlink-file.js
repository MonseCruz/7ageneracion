const fs = require('fs')

fs.unlink('write.txt',(error)=>{
    if(error){
        console.log('No se pudo eliminar el archivo. ', error)
        return
    }
    console.log('Archivo eliminado exitosamente')
}) 