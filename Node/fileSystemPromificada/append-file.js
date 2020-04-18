const fs = require('fs')

nameFile = 'nuevoArchivo.txt';
line = 'Está linea aca de ser añadida al archivo °-°';


function appendFilePromificada (name){
    return new Promise((resolve,reject) => {
        fs.appendFile(name,line,(error,newLine)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(newLine)
        })
    })
}

async function writeNewLine(name){
    const newFile = await appendFilePromificada(name)
    console.log(`Se añadió nuevo contenido al archivo llamado:  ${nameFile}`)
    console.log(`El nuevo contenido es: \n ${line}`)
}

writeNewLine(nameFile)
    .then(result => {
    })
    .catch(error => console.error('Error: ',error))