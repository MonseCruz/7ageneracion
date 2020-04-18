const fs = require('fs') 

nameDir = 'nueva_carpeta';

function rmdirPromificada (directory){
    return new Promise((resolve,reject) => {
        fs.rmdir(directory,(error,data)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(data)
        })
    })
}

async function removeADir(directory){
    const newDir = await rmdirPromificada(directory)
    console.log(`Se eliminó correctamente el directorio:  ${nameDir}`)
}

removeADir(nameDir)
    .then(result => {
    })
    .catch(error => console.error('Error: ',error))