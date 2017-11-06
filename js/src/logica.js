var indiceCargo = 0;
var cargos = [];
var cargo = {};
var matriz = [];
var matrizJuego = [];
var reputacion = 0;
var preguntaActual = {};

function iniciarVariables() {
    indiceCargo = 0;
    cargos = [];
    cargo = {};
    matriz = [];
    matrizJuego = [];
    reputacion = 0;
    preguntaActual = {};

    cargos = [
        cargarJunior(),
        cargarSemiSenior(),
        cargarSenior(),
        cargarManager()
    ];
    cargo = cargos[indiceCargo];
    matriz = iniciarMatriz();
    matrizJuego = matriz;
    
};

function iniciarMatriz() {
    var matriz = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    var total = 0;
    var vector = [0,0,0,0];
    var vectorF = [0,0,0,0];
    for (var  i = 0; i< 4; i++) {
        total = 0;
        for (var j = 0; j<4; j++) {
            vector[j] = Math.random();
            total += vector[j];
        }
        vectorF = [];
        for (var j = 0; j<4; j++) {
            vectorF[j] = vector[j]/ total;
        }
        matriz[i] = vectorF;
    }
    return matriz;
}

function multiplicarMatriz(m1, m2) {
    var matrizRes = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            for (var k = 0; k < 4; k++) {
                matrizRes[i][j] = matrizRes[i][j] + (m1[i][k] * m2[k][j]);
            }
        }
    }
    return matrizRes;
}

function traerPregunta() {
    var repeticiones = cargo.preguntas[0].repeticiones;
    var preguntas = [];
    var p = {};
    for (var i = 0; i < cargo.preguntas.length; i++) {
        p = cargo.preguntas[i];
        if(p.repeticiones === repeticiones) {
            preguntas.push(p);
        }
        if (p.repeticiones < repeticiones) {
            preguntas = [];
            preguntas.push(p);
        }
    }
    var indice = Math.round(Math.random() * (preguntas.length - 1));
    preguntaActual = preguntas[indice];
    return preguntaActual;
}

function verficarCelda(i, j) {
    var probabilidad = matrizJuego[i][j];
    var random = Math.random();
    return random <= (probabilidad * 2);
}

function cambioCargo(indice) {
    indiceCargo = indice;
    if (indice >= 0) {
        cargo = cargos[indice];
        reputacion = 0;
    }
}

function eleccion(i) {
    var verificacion = verficarCelda(indiceCargo, i);
    if (verificacion) {
        reputacion++;
    } else {
        reputacion--;
    }
    matrizJuego = multiplicarMatriz(matrizJuego, matriz);
    console.log("matrizJuego: ",matrizJuego);
    return verificacion;
}

function falloEleccion() {
    reputacion--;
    matrizJuego = multiplicarMatriz(matrizJuego, matriz);
    console.log("matrizJuego: ",matrizJuego);
    return false;
}

function separarTexto(texto){
    var len = texto.length;
    var textoFinal = "";
    for(var i = 0; i < len; i++) {
        if(i % 43 == 0 && i != 0) {
            textoFinal += "\n";
        }
        textoFinal += texto.charAt(i);
    }
    return textoFinal;
}

iniciarVariables();