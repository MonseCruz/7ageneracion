const fs = require('fs') 
const directorio = 'ejemplo';
fs.rmdir(directorio,(error=>{
    if(error){
        console.log('Hubo un error al remover la carpeta',error)
        if(error.code == 'ENOTEMPTY' || error.errno == -39){
            fs.readdir('ejemplo','utf8',(error,data)=>{
                if(error){
                    console.log('Hubo un error al leer la carpeta',error)
                    return 
                }
                data.forEach(archivo => {
                    fs.unlink(archivo,(error)=>{
                        if(error){
                            console.log('No se pudo eliminar el archivo. ', error)
                            return
                        }
                        console.log('Archivo eliminado exitosamente')
                    }) 
                });
            })
        }
        return
    }
    console.log('La carpeta fue removida exitosamente')
})) 