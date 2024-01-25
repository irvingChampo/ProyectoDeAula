function generarMatricula() {
    return Math.floor(Math.random() * 1000000) + 100000; // matrícula de 6 dígitos
}

function generarCalificacion() {
    return Math.floor(Math.random() * 91) + 10; // calificación entre 10 y 100
}

function generarCuatrimestre() {
    return Math.floor(Math.random() * 10) + 1; // cuatrimestre entre 1 y 10
}

function generarEstudiante() {
    const nombres = ["Martin", "Brandon", "Angel", "Irving", "Didier", "Margarita", "Fernanda", "Elena", "Miguel", "Isabel"];
    const apellidos = ["García", "Rodríguez", "Champo", "Estrada", "Olivera", "Mendoza", "Gómez", "Luna", "Narcia", "Morales"];

    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];

    return {
        matricula: generarMatricula(),
        nombre: nombre,
        apellido: apellido,
        calificacion: generarCalificacion(),
        cuatrimestre: generarCuatrimestre()
    };
}

function crearArregloEstudiantes(cantidad) {
    const estudiantes = [];
    const matriculasGeneradas = new Set();

    while (estudiantes.length < cantidad) {
        const estudiante = generarEstudiante();

        if (!matriculasGeneradas.has(estudiante.matricula)) {
            matriculasGeneradas.add(estudiante.matricula);
            estudiantes.push(estudiante);
        }
    }

    return estudiantes;
}

const arregloEstudiantes = crearArregloEstudiantes(100);

//console.log(arregloEstudiantes);


// 1. Lista de alumnos con calificaciones reprobadas
const alumnosReprobados = arregloEstudiantes.filter(estudiante => estudiante.calificacion <= 69);

// 2. Lista de alumnos con calificaciones aprobadas
const alumnosAprobados = arregloEstudiantes.filter(estudiante => estudiante.calificacion >= 70);

// 3. Promedio de todos los alumnos
const promedioTotal = arregloEstudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.calificacion, 0) / arregloEstudiantes.length;

// 4. Promedio de los alumnos que no están reprobados
const alumnosNoReprobados = arregloEstudiantes.filter(estudiante => estudiante.calificacion >= 70);
const promedioNoReprobados = alumnosNoReprobados.reduce((acumulador, estudiante) => acumulador + estudiante.calificacion, 0) / alumnosNoReprobados.length;

// 5. Promedio de los alumnos que están reprobados
const alumnosReprobadosPromedio = alumnosReprobados.length > 0
  ? alumnosReprobados.reduce((acumulador, estudiante) => acumulador + estudiante.calificacion, 0) / alumnosReprobados.length
  : 0;

// 6. Lista de alumnos del décimo cuatrimestre con calificaciones aprobadas
const alumnosDecimoCuatrimestreAprobados = arregloEstudiantes.filter(estudiante => estudiante.cuatrimestre === 10 && estudiante.calificacion >= 70);

console.log("1. Alumnos Reprobados:", alumnosReprobados);
console.log("2. Alumnos Aprobados:", alumnosAprobados);
console.log("3. Promedio de Todos los Alumnos:", promedioTotal);
console.log("4. Promedio de Alumnos No Reprobados:", promedioNoReprobados);
console.log("5. Promedio de Alumnos Reprobados:", alumnosReprobadosPromedio);
console.log("6. Alumnos del Décimo Cuatrimestre Aprobados:", alumnosDecimoCuatrimestreAprobados);
