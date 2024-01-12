function calcularNota(){
    // pedir al usuario ingresar las notas 
    let nota1 = prompt("Ingrese la primera nota:");
    let nota2 = prompt("Ingrese la segunda nota:");
    let nota3 = prompt("Ingrese la tercera nota:");

    // conviertiendo nota 1 a numero
    nota1 = parseFloat(nota1);

    // si la nota 1 no es un numero, sale el alert
        if (isNaN(nota1)) {
            alert("Por favor, ingrese un número válido para la primera nota.");
        } else {
            
    // convertir nota 2 a numero y seguir
           nota2 = parseFloat(nota2);

     // si la nota 2 no es un numero, sale el alert
        if (isNaN(nota2)) {
            alert("Por favor, ingrese un número válido para la segunda nota.");
        } else {
    // convertir nota 3 a numero y seguir
        nota3 = parseFloat(nota3);

    // si la nota 3 no es un numero, sale el alert
        if (isNaN(nota3)) {
            alert("Por favor, ingrese un número válido para la tercera nota.");
        } else {
    // calcular el promedio de las notas
        let promedio = (nota1 + nota2 + nota3) / 3;

    // mostrar el resultado en un alert
        alert("El promedio de las notas es: " + promedio.toFixed(2));
    }
    }
    }

}
