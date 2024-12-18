let listaEstudiantes = [
    { nombre: "Jordan Guaman", calificaciones: [12, 17, 14] },
    { nombre: "Anthony Morales", calificaciones: [15, 13, 15] },
    { nombre: "Leonardo Narvaez", calificaciones: [14, 12, 10] },
    { nombre: "Alexander Villacres", calificaciones: [10, 11, 9] },
    { nombre: "Pablo Carera", calificaciones: [7, 6, 8] },
    { nombre: "Emiliana Gomez", calificaciones: [12, 13, 14] },
    { nombre: "Sofia Vergara", calificaciones: [11, 15, 18] },
    { nombre: "Miguel Andrade", calificaciones: [10, 15, 12] },
    { nombre: "Donatello Martinez", calificaciones: [9, 8, 10] },
    { nombre: "Rafael Tipan", calificaciones: [13, 14, 15] }
];

let mejorPromedioEstudiante = 0;
let peorPromedioEstudiante = 0;

for (let estudiante of listaEstudiantes) {
    let sumaCalificaciones = 0;
    for (let i = 0; i < estudiante.calificaciones.length; i++) {
        sumaCalificaciones += estudiante.calificaciones[i];
    }
    let promedioCalificaciones = sumaCalificaciones / 3;

    let clasificacionEstudiante = "";
    if (promedioCalificaciones >= 16) {
        clasificacionEstudiante = "Excelente";
    } else if (promedioCalificaciones >= 12 && promedioCalificaciones < 16) {
        clasificacionEstudiante = "Bueno";
    } else if (promedioCalificaciones >= 8 && promedioCalificaciones < 12) {
        clasificacionEstudiante = "Aprobado";
    } else {
        clasificacionEstudiante = "Reprobado";
    }

    let calificacionMaxima = estudiante.calificaciones[0];
    for (let i = 1; i < estudiante.calificaciones.length; i++) {
        if (estudiante.calificaciones[i] > calificacionMaxima) {
            calificacionMaxima = estudiante.calificaciones[i];
        }
    }

    let calificacionMinima = estudiante.calificaciones[0];
    for (let i = 1; i < estudiante.calificaciones.length; i++) {
        if (estudiante.calificaciones[i] < calificacionMinima) {
            calificacionMinima = estudiante.calificaciones[i];
        }
    }

    console.log("-----------------------------");
    console.log(estudiante.nombre);
    console.log("Clasificación: " + clasificacionEstudiante);
    console.log("Promedio: " + promedioCalificaciones);
    console.log("Calificación más alta: " + calificacionMaxima);
    console.log("Calificación más baja: " + calificacionMinima);
    console.log("-----------------------------");

    if (mejorPromedioEstudiante === 0 || promedioCalificaciones > mejorPromedioEstudiante.promedio) {
        mejorPromedioEstudiante = estudiante; 
        mejorPromedioEstudiante.promedio = promedioCalificaciones; 
    }
    
    if (peorPromedioEstudiante === 0 || promedioCalificaciones < peorPromedioEstudiante.promedio) {
        peorPromedioEstudiante = estudiante;
        peorPromedioEstudiante.promedio = promedioCalificaciones; 
    }
    
}

console.log("\nEl estudiante con el peor promedio es " + peorPromedioEstudiante.nombre +
            " con un promedio de " + peorPromedioEstudiante.promedio);
console.log("El estudiante con el mejor promedio es " + mejorPromedioEstudiante.nombre +
            " con un promedio de " + mejorPromedioEstudiante.promedio);
