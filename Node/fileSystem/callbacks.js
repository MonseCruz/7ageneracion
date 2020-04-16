/*Construir, aplanar y pintar una pared */ 
const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

//funciones que ejecutan callbacks

function construir (muroAConstruir, callback){
    setTimeout(()=>{
        let erroDeConstruccion = null
        muroAConstruir.estaConstruido = true
        if(muroAConstruir.estaConstruido === false){
            erroDeConstruccion = 'no se pudo construir el muro'
        }
        callback(erroDeConstruccion,muroAConstruir)
    },3000)
}

function aplanar (muroAAplanar,callback){
   setTimeout(()=>{
       muroAAplanar.estaAplanado = true
       let errorDeAplanado = muroAAplanar.estaAplanado
       ? null
       : 'no se pudo aplanar'

    callback (errorDeAplanado, muroAAplanar)

   }, 3000)
}

function pintar (muroAPintar, callback){
    setTimeout(()=>{
        muroAPintar.estaPintado = true
        let errorDePintado = muroAPintar.estaPintado
        ? null
        : 'no se pudo pintar'
    
        callback (errorDePintado, muroAPintar)
    }, 3000)
}


construir(muro, (erroDeConstruccion,muroConstruido)=>{
    aplanar(muroConstruido,(errorDeAplanado,muroAplanado)=>{
        pintar(muroAplanado,(errorDePintado,muroPintado)=>{
            console.log('muro: ',muroPintado)
        })
    })
})


