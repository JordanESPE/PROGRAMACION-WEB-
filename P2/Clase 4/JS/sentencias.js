//Sentrencias de Control

//If else

let numero = 10;
if(numero  == 1 ){
    console.log("Numero1");
}else if(numero == 2){
    console.warn("Numero2");

}else if(numero ==3){
    console.warn("Numero 3");

}else{
    console.log("no es un numero");
}


//Ejercicio referente a las estaciones del anio Ingierno, otono, primeravera, verano

let mes =4;
let estacion;

if(mes == 1 || mes ==2|| mes ==3){
    estacion = "Invierno";
}else if(mes ==4 || mes==5 ||mes ==6){
    estacion="otono";

}else if(mes ==7 || mes==8 ||mes ==9){
    estacion="primavera";
    
}else if(mes ==10 || mes==11 ||mes ==12){
    estacion="verano";
    
}else{
    estacion="no corresponde a una estacion";
}

console.warn(estacion);

//Calcular la hora del dia

/*
6am - 11am buenos dias
12am - 18pm buenas tardes
19pm - 23pm buenas noches
24 am- 6am Duermiendo


 */

let horaDia=12;
let mensaje;

if(horaDia>=6 && horaDia<=11){
    mensaje="Buenos dias";

}else if(horaDia>=12 && horaDia<=18){
    mensaje="Buenas tardes";
}else if(horaDia>=19 && horaDia<=23){
    mensaje="Buenas tardes";
}else if(horaDia>=0 && horaDia<6){
    mensaje="Memiendo";
}else{
    mensaje="no es una hora valida";
}
console.warn(mensaje);

//Switch

let mesdelanio = 11;
let estacione="Estacion Desconocida";

switch (mesdelanio) {
    case 1: case 2: case 3:
        estacione="Invierno";
        break;
        case 4: case 5: case 6:
        estacione="Otono";
        break;
        case 7: case 8: case 9:
        estacione="Primavera";
        break;
        case 10: case 11: case 12:
        estacione="Verano";
        break;
        default:
        estacione="no es ninguno";
    
}

console.warn(estacione);


//otra forna de usar if

if(horaDia>=6 && horaDia<=11)
    mensaje="Buenos dias";

else if(horaDia>=12 && horaDia<=18)
    mensaje="Buenas tardes";
else if(horaDia>=19 && horaDia<=23)
    mensaje="Buenas tardes";
else if(horaDia>=0 && horaDia<6)
    mensaje="Memiendo";
else
    mensaje="no es una hora valida";
console.warn(mensaje);

