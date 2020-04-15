
const fs = require('fs')

fs.readFile('write.txt','utf8', (error,data)=>{
    if(error){
        console.log('No se pudo leer el archivo. ', error)
        return
    }
    console.log('Contenido del archivo: ', data)
}) 
