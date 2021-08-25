
//Ex. 1
function podeSubir(altura, acompanhante) {
    if (altura > 1.40 && altura < 2.00){
        return true;

    }else if (altura < 1.40 && acompanhante == true){
        return true;

    }else return false;
}

console.log(podeSubir(1.20, true))

//Ex. 2
function podeSubir(altura, acompanhante) {
    if (altura > 1.40 && altura < 2.00) {
        return console.log("Acesso autorizado!");
    } else if (altura < 1.40 && acompanhante == true) {
        return console.log("Acesso autorizado somente com acompanhante!");
    } else return console.log("Acesso negado!!!");
}

podeSubir(1.54)