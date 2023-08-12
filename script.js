let url = "https://api.covidtracking.com/v1/us/daily.json";

let result = "";

async function cargarURL(){
    let response = await fetch(url);
    return response.json();
}


async function cargarEstadisticas(){
    let json = await cargarURL();
    //console.log(json);

    let txtFecha = document.getElementById("inputFecha").value
    let partesFecha = txtFecha.split("-");
    //console.log(json[0]);
    let anio = partesFecha[0]
    let mes = partesFecha[1]
    let dia = partesFecha[2];
    
    
    let fecha = anio+mes+dia;
    //alert(fecha);
    
    for(let i = 0; i<420; i++){
        if(json[i].date ==  fecha){
            result = json[i];
        }
    }
    console.log(result);

    document.getElementById("txtMuertos").innerHTML = result.death; 
    document.getElementById("txtHospitalizados").innerHTML = result.hospitalized;
    document.getElementById("txtPositivos").innerHTML = result.positive;
    document.getElementById("txtNegativos").innerHTML = result.negative;
    document.getElementById("txtPendientes").innerHTML = result.pending;
    document.getElementById("txtPruebasTotales").innerHTML = result.totalTestResults;
    
}