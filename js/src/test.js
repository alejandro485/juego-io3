function op1() {
    eleccion(0);
    pedirPregunta();
}

function op2() {
    eleccion(1);
    pedirPregunta();
}

function op3() {
    eleccion(2);
    pedirPregunta();
}

function op4() {
    eleccion(3);
    pedirPregunta();
}

function pedirPregunta() {
    var pregunta = traerPregunta();
    console.log("pregunta: ", pregunta);
    console.log("matriz juego: ", matrizJuego);
    console.log("reputacion: ",reputacion);
    document.getElementById("cargo").innerHTML = cargo.nombre;
    document.getElementById("pregunta").innerHTML = pregunta.texto;
    document.getElementById("reputacion").innerHTML = reputacion;
    document.getElementById("op1").innerHTML = pregunta.opciones[0].texto;
    document.getElementById("op2").innerHTML = pregunta.opciones[1].texto;
    document.getElementById("op3").innerHTML = pregunta.opciones[2].texto;
    document.getElementById("op4").innerHTML = pregunta.opciones[3].texto;
}

pedirPregunta();