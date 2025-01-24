//Ciclos

//Ciclo For

const heroes = ["Batman", "Goku", "Aquaman", "HomeLander"];

console.warn("For Tradicional");
for (let i = 0; i<heroes.length; i++){
    console.warn(heroes[i]);
}

console.warn("****For In****");


for (let i in heroes){
    console.warn(heroes[i]);
}


console.warn("***For of***");

for(let heroe of heroes ){
    console.warn(heroes);
}


//uso del for tradiconal cuando se necesita el control total de los indices del array
//for in para el manejo de objetos, es decir para iterar un objeto o los indices
//for of es decir para iterar valores directamente de un itarable(array,cadenas de texto, map, set,nodelist)

//uso del continue y break dentro del ciclo for 

/*
for (let cont =0;cont<10;cont){
    if(contador %2 != 0){
        continue; //ir a la siguiente iteracion
    }
    console.log(cont);
}
*/

const autos = ["Honda","Mazda","Ford","Toyota"];

for (let contador =0;contador<=autos.length;contador++){
    if (contador[2]==2){
        continue;

    }
 
    console.log(autos[contador]);
}


//while
let i = 0;
while (autos[i]) {
    if (i==1){
        i++;
        break;
        
    }
    console.warn(autos[i]);

    i++;

    
}


