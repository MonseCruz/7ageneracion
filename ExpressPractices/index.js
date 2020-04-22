const express = require ('express')
const fs = require ('fs')

const app = express()

app.get('/practica1', (request,response) =>{
    fs.readFile('prueba.txt','utf8', (error,data)=>{
        if(error){
            response.json({
                error: 'Error'
            })
        }
        response.json({
            contenido: data
        })
        
    }) 
    
})

app.listen(8080, ()=>{
    console.log('server running')
})