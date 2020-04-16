const fs = require('fs')

const koder = {
    firstContact : false,
    interview : false,
    inscription : false,
    startBootcamp : false
}

function contactToKoder (koderToContact, callback){
    setTimeout(()=>{
        let errorFirstContact = null
        koderToContact.firstContact = true
        if(koderToContact.firstContact === false){
            errorFirstContact = 'No se ha podido contactar al koder'
        }
        callback(errorFirstContact,koderToContact)
    },3000)
}

function haveAInterview (koderToInterview, callback){
    setTimeout(()=>{
        let errorInterview = null
        koderToInterview.interview = true
        if(koderToInterview.interview === false){
            errorInterview = 'No se ha podido realizar la entrevista'
        }
        callback(errorInterview,koderToInterview)
    },3000)
}

function payInscription (koderToPayInscription, callback){
    setTimeout(()=>{
        let errorInscription = null
        koderToPayInscription.inscription = true
        if(koderToPayInscription.inscription === false){
            errorInscription = 'La inscripción aún no está pagada'
        }
        callback(errorInscription,koderToPayInscription)
    },3000)
}

function bootcamp (koderToStartBootcamp, callback){
    setTimeout(()=>{
        let errorBootcamp = null
        koderToStartBootcamp.startBootcamp = true
        if(koderToStartBootcamp.startBootcamp === false){
            errorInscription = 'No podra iniciar el bootcamp'
        }
        callback(errorBootcamp,koderToStartBootcamp)
    },3000)
}

//Funciones Promificadas

 function contactToKoderPromificada(){
    return new Promise((resolve,reject) => {
        contactToKoder(koder,(error,koderContacted)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(koderContacted)
        })
    })
}

function haveAInterviewPromificada(){
    return new Promise((resolve,reject) => {
        haveAInterview(koder,(error,koderInterviewed)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(koderInterviewed)
        })
    })
}

function payInscriptionPromificada(){
    return new Promise((resolve,reject) => {
        payInscription(koder,(error,koderSignedUp)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(koderSignedUp)
        })
    })
}

function bootcampPromificada (){
    return new Promise((resolve,reject) => {
        bootcamp(koder,(error,koderRegistered)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(koderRegistered)
        })
    })
}

async function principal() {
    const koderContacted = await contactToKoderPromificada()
     console.log('Koder contactado: ', koderContacted)
    const koderInterviewed = await haveAInterviewPromificada()
     console.log('Koder entrevistado: ',koderInterviewed)
    const koderSignedUp = await payInscriptionPromificada()
     console.log('Koder inscrito: ',koderSignedUp)
    const koderRegistered = await bootcampPromificada()
     console.log('koder en clases: ', koderRegistered) 
}

principal()
    .then(result => {
        console.log('resultado: ',result)
        console.log('-----')
    })
    .catch(error => console.error('Error: ',error))