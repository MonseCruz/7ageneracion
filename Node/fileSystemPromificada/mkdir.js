const fs = require('fs') 

nameDir = 'nueva_carpeta';


function mkdirPromificada (directory){
    return new Promise((resolve,reject) => {
        fs.mkdir(directory,(error,data)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(data)
        })
    })
}

async function createADir(directory){
    const newDir = await mkdirPromificada(directory)
    console.log(`Se creo correctamente el directorio:  ${nameDir}`)
}

createADir(nameDir)
    .then(result => {
    })
    .catch(error => console.error('Error: ',error))
