const fs = require('fs') 

fs.copyFile('write.txt','write_copia.txt','utf8',(error)=>{
    if(error){
        console.log('Hubo un error al copiar el archivo ')
        return 
    }
    console.log('Copia terminada satisfactoriamente')
    console.log('==================================')

    fs.readFile('write_copia.txt','utf8',(error,data)=>{
        if(error){
            console.log('No se pudo leer el archivo. ', error)
            return
        }
        console.log('***Contenido del archivo copia*** \n', data)
    }) 
})
