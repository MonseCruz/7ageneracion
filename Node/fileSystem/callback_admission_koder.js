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

contactToKoder(koder, (errorFirstContact,koderContacted)=>{
    haveAInterview(koderContacted,(errorInterview,koderInterviewed)=>{
        payInscription(koderInterviewed,(errorInscription,koderSignedUp)=>{
            bootcamp(koderSignedUp,(errorBootcamp,koderToStartBootcamp)=>{
                console.log('Koder: ',koderToStartBootcamp)
            })
        })
    })
})
