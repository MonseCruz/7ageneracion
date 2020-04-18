const fs = require('fs') 

nameFile = 'nuevoArchivo.txt';
encoding = 'uft8'

function readFilePromificada (nameFile){
    return new Promise((resolve,reject) => {
        fs.readFile(nameFile,encoding,(error,data)=>{
            if (error) {
                reject(error)
                return
            }
            console.log('El contenido del archivo es: ')
            console.log(data)
            resolve(data)
        })
    })
}

async function readAFile(nameFile){
    const content= await readFilePromificada(nameFile)
    console.log('-----Fin del contenido----')
}

readAFile(nameFile)
    .then(result => {
    })
    .catch(error => console.error('Error: ',error))