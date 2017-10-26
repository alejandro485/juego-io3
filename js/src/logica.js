var indiceCargo = 0;
var cargos = [];
var cargo = {};
var matriz = [];
var matrizJuego = [];
var reputacion = 0;

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
    return preguntas[indice];
}

function verficarCelda(i, j) {
    var probabilidad = matrizJuego[i][j];
    var random = Math.random();
    return random <= probabilidad;
}

function cambioCargo(indice) {
    if (indice >= 0) {
        indiceCargo = indice;
        cargo = cargos[indice];
        reputacion = 0;
    } else {
        alert("perdistes papu");
    }
}

function eleccion(i) {
    var verificacion = verficarCelda(indiceCargo, i);
    if (verificacion) {
        reputacion++;
    } else {
        reputacion--;
    }
    if(reputacion <= -3) {
        cambioCargo(indiceCargo - 1);
    } else if (reputacion >= 3) {
        cambioCargo(indiceCargo + 1);
    }
    matrizJuego = multiplicarMatriz(matrizJuego, matriz);
    return verificacion;
}

indiceCargo = 0;
cargos = [
    cargarJunior(),
    cargarSemiSenior(),
    cargarSenior(),
    cargarManager()
];
cargo = cargos[indiceCargo];
matriz = iniciarMatriz();
matrizJuego = matriz;
