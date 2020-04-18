const fs = require('fs')

nameFile = 'nuevoArchivo.txt';

function unlinkPromificada (file){
    return new Promise((resolve,reject) => {
        fs.unlink(nameFile,(error,data)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(data)
        })
    })
}

async function unlinkAFile(file){
    const newFile = await unlinkPromificada(file)
    console.log(`Se creo elimino el archivo llamado:  ${nameFile}`)
}

unlinkAFile(nameFile)
    .then(result => {
    })
    .catch(error => console.error('Error: ',error))