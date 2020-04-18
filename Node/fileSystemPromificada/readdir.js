const fs = require('fs') 

nameDir = './'
function readdirPromificada (name){
    return new Promise((resolve,reject) => {
        fs.readdir(name,'utf8',(error,data)=>{
            if (error) {
                reject(error)
                return
            }
            console.log('El contenido del directorio es: ')
            for(i=0; i<=data.length; i++){
                console.log(`El archivo # ${i+1} se llama ${data[i]}`)
            }
            resolve(data)
        })
    })
}

async function readADir(name){
    const newList= await readdirPromificada(name)
    console.log('-----Fin del contenido----')
}

readADir(nameDir)
    .then(result => {
    })
    .catch(error => console.error('Error: ',error))