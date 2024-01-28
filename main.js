function verAlumnos(){
    class Estudiante {
    constructor(nombre, edad, calificaciones) {
    this.nombre = nombre;
    this.edad = edad;
    this.calificaciones = calificaciones;
    }

    obtenerPromedio() {
        const sumaCalificaciones = this.calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
        const promedio = sumaCalificaciones / this.calificaciones.length;
        return parseFloat(promedio.toFixed(2)); // redondeo los decimales con toFixed

        }
        }

    //Lista de estudiantes
    
        const estudiantes = [
            new Estudiante('Pedro', 20, [4, 6, 8]),
            new Estudiante('María', 22, [5, 4, 7]),
            new Estudiante('Carlos', 31, [3, 2, 7]),
            new Estudiante('Matias', 24, [8, 5, 6]),
            new Estudiante('Martin', 25, [6, 4, 7]),
            new Estudiante('Camila', 19, [9, 9, 10]),
            ];


    // Mostrar la lista de nombres de estudiantes
        const nombresDeEstudiantes = estudiantes.map(estudiante => estudiante.nombre).join(', ');
        alert(`Nombres de estudiantes: ${nombresDeEstudiantes}`);


    // Solicitar un nombre de estudiante
        const nombreBuscado = prompt('Ingrese el nombre del estudiante a buscar:');
        const estudianteEncontradoPorNombre = estudiantes.find(estudiante => estudiante.nombre === nombreBuscado);

    // Verificar si el nombre esta en la lista
        const nombreEncontrado = nombresDeEstudiantes.includes(nombreBuscado);
        alert(`¿El nombre "${nombreBuscado}" está en la lista de estudiantes? ${nombreEncontrado ? 'Sí' : 'No'}`);

    // Mostrar el estudiante encontrado o un mensaje si no se encuentra
        if (estudianteEncontradoPorNombre) {
        alert(`Estudiante encontrado:
            \nNombre: ${estudianteEncontradoPorNombre.nombre}
            \nEdad: ${estudianteEncontradoPorNombre.edad}
            \nCalificaciones: ${estudianteEncontradoPorNombre.calificaciones.join(', ')}
            \nPromedio: ${estudianteEncontradoPorNombre.obtenerPromedio()}`);
        } else {
        alert(`No se encontró ningún estudiante con el nombre "${nombreBuscado}".`);
        }

       
        function filtrarEstudiantesPorPromedio(promedioMinimo) {
        return estudiantes.filter(estudiante => estudiante.obtenerPromedio() >= promedioMinimo);
        }

        //Solicitar promedio para filtrar
        const promedioMinimo = parseFloat(prompt('Ingrese el promedio mínimo para filtrar los estudiantes:'));
        const estudiantesFiltrados = filtrarEstudiantesPorPromedio(promedioMinimo);
        
        // Mostrar el promedio o un mensaje si no se encuentra

        if (estudiantesFiltrados.length > 0) {
            const nombresDeEstudiantesFiltrados = estudiantesFiltrados.map(estudiante => estudiante.nombre).join(', ');
            alert(`Estudiantes con promedio superior a ${promedioMinimo}:\n${nombresDeEstudiantesFiltrados}`);
        } else {
            alert(`No se encontraron estudiantes con un promedio superior a ${promedioMinimo}.`);
        }
        }
        

    
        
        

