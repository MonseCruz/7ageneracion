const fs = require('fs')

const koder = {
    firstContact : false,
    interview : false,
    inscription : false,
    startBootcamp : false
}


/* function contactToKoder (koderToContact, callback){
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

contactToKoder(koder, (errorFirstContact,koderContacted)=>{
    haveAInterview(koderContacted,(errorInterview,koderInterviewed)=>{
        payInscription(koderInterviewed,(errorInscription,koderSignedUp)=>{
            bootcamp(koderSignedUp,(errorBootcamp,koderRegistered)=>{
                console.log('Koder: ',koderRegistered)
            })
        })
    })
}) */

//Funciones Promificadas

 function contactToKoderPromificada(koderToContact){
    return new Promise((resolve,reject) => {
        contactToKoder(koderToContact,(error,koderContacted)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(koderContacted)
        })
    })
}

function haveAInterviewPromificada(koderToInterview){
    return new Promise((resolve,reject) => {
        haveAInterview(koderToInterview,(error,koderInterviewed)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(koderInterviewed)
        })
    })
}

function payInscriptionPromificada(koderToPayInscription){
    return new Promise((resolve,reject) => {
        payInscription(koderToPayInscription,(error,koderSignedUp)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(koderSignedUp)
        })
    })
}

function bootcampPromificada (koderToStartBootcamp){
    return new Promise((resolve,reject) => {
        bootcamp(koderToStartBootcamp,(error,koderRegistered)=>{
            if (error) {
                reject(error)
                return
            }
            resolve(koderRegistered)
        })
    })
}


contactToKoderPromificada(koder)
.then(koderContacted => {
    console.log('Koder contactado: ', koderContacted)
    /*entrevista*/
    haveAInterviewPromificada(koderToInterview)
    .then(koderInterviewed => {
        console.log('Koder entrevistado: ', koderInterviewed)
        /*Inscripción */
        haveAInterviewPromificada(koderToInterview)
            .then(koderInterviewed => {
            console.log('Koder entrevistado: ', koderInterviewed)
            /*Bootcamp */
                 bootcampPromificada(koderToStartBootcamp)
                .then(koderRegistered => {
                console.log('Koder en clase: ', koderRegistered)
        
                })
                .catch(error => {
                   console.error('error: ',error)
                })
            /*------------- */
             })
            .catch(error => {
                console.error('error: ',error)
            })
        /*------------- */
    })
    .catch(error => {
        console.error('error: ',error)
    })
    /*----- */
})
.catch(error => {
    console.error('error: ',error)
})