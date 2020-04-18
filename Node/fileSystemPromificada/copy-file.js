const fs = require('fs') 

nameFile = 'write.txt';
nameFileCopy = 'write_copia.txt';


function copyFilePromificada (file){
    return new Promise((resolve,reject) => {
        fs.copyFile(file,nameFileCopy,'utf8',(error,data)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(data)
        })
    })
}

async function copyAFile(file){
    const newFile = await copyFilePromificada(file)
    console.log(`Se copio correctamente el archivo:  ${nameFile} en el archivo ${nameFileCopy}`)
}

copyAFile(nameFile)
    .then(result => {
    })
    .catch(error => console.error('Error: ',error))
