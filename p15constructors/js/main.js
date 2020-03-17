/* var kodersList=[];

function koder(){
    this.name = name;
    this.lastName = lastName;
    this.ratingHTML = ratingHTML;
    this.ratingCSS = ratingCSS;
    this.ratingJS = ratingJS;
    this.average = function average(){
        var avg = (this.ratingHTML + this.ratingCSS + this.ratingJS)/3
    }
} */


var snacksCookBook = [];
var i;

function snack(name, type, content){
    this.name = name;
    this.type = type;
    this.content = content;
}

function writeCook(){
    var numberCooks;
    numberCooks = prompt("¿Cuantas recetas agregaras al recetario?")

    for(i=0; i<numberCooks; i++){

        snacksCookBook[i] = new snack
        snacksCookBook[i].name = prompt(`Escribe el nombre de la botana ${i+1}`);
        snacksCookBook[i].type = prompt(`Escribe el tipo de la botana ${i+1}`);
        snacksCookBook[i].content = prompt(`Escribe el contenido de la botana ${i+1}`);

    }
}

function showAll(){
    for(i=0; i<=snacksCookBook.length; i++ ){
        
        console.log(`Nuestra botana ${snacksCookBook[i].name} es la más sabrosa`)
    }
}

