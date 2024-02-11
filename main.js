function Estudiante(nombre, edad, calificaciones) {
    this.nombre = nombre;
    this.edad = edad;
    this.calificaciones = calificaciones;

    this.obtenerPromedio = function () {
        let sumaCalificaciones = this.calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
        let promedio = sumaCalificaciones / this.calificaciones.length;
        return parseFloat(promedio.toFixed(2));    
    }
}

let estudiantes = [];

document.getElementById('alumno-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = document.getElementById('alumno-nombre').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    let nuevoEstudiante = new Estudiante(nombre, 0, [nota1, nota2, nota3]);
    estudiantes.push(nuevoEstudiante);

    document.getElementById('alumno-form').reset();
    verAlumnos();
});

function verAlumnos() {
    let alumnosContainer = document.getElementById('alumnos-container');
    alumnosContainer.innerHTML = '';
    for (let i = 0; i < estudiantes.length; i++) {
        let estudiante = estudiantes[i];
        let promedio = calcularPromedio(estudiante);
        let alumnoHTML = `<p>Nombre: ${estudiante.nombre}, Promedio: ${promedio}</p>`;
        alumnosContainer.innerHTML += alumnoHTML;
    }
}

function calcularPromedio(estudiante) {
    let sumaNotas = estudiante.calificaciones.reduce((acc, nota) => acc + nota, 0);
    return sumaNotas / estudiante.calificaciones.length;
}

function verPromedio() {
    let promedioMinimo = parseFloat(document.getElementById('promedio-input').value);
    let estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.obtenerPromedio() >= promedioMinimo);

    if (estudiantesFiltrados.length > 0) {
        let nombresDeEstudiantesFiltrados = estudiantesFiltrados.map(estudiante => estudiante.nombre).join(', ');
        document.getElementById('promedio-container').innerText = `Estudiantes con promedio superior a ${promedioMinimo}:\n${nombresDeEstudiantesFiltrados}`;
    } else {
        document.getElementById('promedio-container').innerText = `No se encontraron estudiantes con un promedio superior a ${promedioMinimo}.`;
    }
}

document.getElementById('promedio-input').addEventListener('input', verPromedio);