const fs = require('fs') 

fs.readdir('./','utf8',(error,data)=>{
    if(error){
        console.log('Hubo un error al leer la carpeta',error)
        return 
    }
    /* console.log('Contenido de la carpeta \n',data) */
    
    for(i=0; i<=data.length; i++){
        console.log(`El archivo # ${i+1} se llama ${data[i]}`)
    }
}) 
