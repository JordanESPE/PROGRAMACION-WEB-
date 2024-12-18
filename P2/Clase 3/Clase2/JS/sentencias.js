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

if(horaDIa>=6 && horaDia<=11){
    mensaje="Buenos dias";

}else if(horaDIa>=12 && horaDia<=18){
    mensaje="Buenas tardes";
}else if(horaDIa>=19 && horaDia<=23){
    mensaje="Buenas tardes";
}else if(horaDIa>=24&& horaDia<6){
    mensaje="Buenas tardes";
}