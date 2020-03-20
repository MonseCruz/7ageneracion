var kodersDb = [{
    name: "Eddy Alexander",
    lastName: "Ruiz Álvarez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Iván",
    lastName: "Pedraza Sanchéz",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Mauricio",
    lastName: "López Suarez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Xabier Enrique",
    lastName: "Hernández Hernández",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Raquel Monserrat",
    lastName: "Cruz Torres",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Etnar Uriel",
    lastName: "Sánchez González",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Gabriela Elvira",
    lastName: "Camarillo Luna",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Ana Marcela",
    lastName: "Casasola López",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "Evelyn Fernanda",
    lastName: "Palacios Vera",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Víctor Octavio",
    lastName: "Torres Jimenez",
    deliveredPractices: 11,
    totalAssistance: 16
}]

//1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10

const  deliveredPracticesUnderTen = kodersDb.filter( (practice) => {
    return practice.deliveredPractices < 10
})

//2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20

const  totalAssistanceUnderTwenty = kodersDb.filter( (assistance) => {
    return assistance.totalAssistance < 20
})

//3.- Obtener el promedio general de prácticas entregadas
var totalKoders = kodersDb.length;

const totalDeliveredPractices = kodersDb.reduce(function(total,practice){

    return total + practice.deliveredPractices;
        
}, 0 )


var avgPractices = totalDeliveredPractices/totalKoders;

//4.- Obtener el promedio general de asistencias

const totalAssistanceGeneral = kodersDb.reduce(function(total,assistance){

    return total + assistance.totalAssistance;
        
}, 0 )


var avgAssistences = totalAssistanceGeneral/totalKoders;

/*5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{prácticas del koder}</td>
</tr>*/

var rowPractice = $("#practices-container");  

function tablePractices(){
    for(i=0; i<deliveredPracticesUnderTen.length; i++){
        var num =  i + 1;
    
        rowPractice.append(
            '<tr>'
            +'<td>'+num+'</td>'
            +'<td>'+deliveredPracticesUnderTen[i].name + deliveredPracticesUnderTen[i].lastName +'</td>'
            +'<td>'+deliveredPracticesUnderTen[i].deliveredPractices+'</td>'
            +'</tr>'
        );
    }
}

/*6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>*/

var rowAssistence = $("#assistances-container");
var i;
function tableAssistences(){
    for(i=0; i<totalAssistanceUnderTwenty.length; i++){
        var num =  i + 1;
        rowAssistence.append(
            '<tr>'
            +'<td>'+num+'</td>'
            +'<td>'+totalAssistanceUnderTwenty[i].name + totalAssistanceUnderTwenty[i].lastName +'</td>'
            +'<td>'+totalAssistanceUnderTwenty[i].totalAssistance+'</td>'
            +'</tr>'
        );
    }
}


//7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3

function showAvgPractices(){
    $("#practices-average").html(avgPractices);
}

//8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4

function showAvgAssitences(){
    $("#assistance-average").html(avgAssistences);
}