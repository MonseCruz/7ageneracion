const fs = require('fs')

nameFile = 'nuevoArchivo.txt';

function writeFilePromificada (nameFile){
    return new Promise((resolve,reject) => {
        fs.writeFile(nameFile,'utf8',(error,newWrite)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(newWrite)
        })
    })
}

async function writeAFile(file){
    const newFile = await writeFilePromificada(file)
    console.log(`Se creo nuevo un archivo llamado:  ${nameFile}`)
}

writeAFile(nameFile)
    .then(result => {
    })
    .catch(error => console.error('Error: ',error))