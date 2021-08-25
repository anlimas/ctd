
//Micro desafio: if simples
let status = false

if (status == true) {
    console.log("O valor é true - verdadeiro");
} else console.log("O valor é false - falso");

//Micro desafio: igualdade, if e else
let linguagem = ''

if (linguagem = "javascript") {
    console.log("Estou apreendendo");
} else console.log("Aprenderei mais tarde");

//Usando if tenário
let dia = "domingo"

let resultado = dia == "domingo" ? "Vou a praia" : "Fico em casa";

console.log(resultado);

//Usando o switch

switch (dia) {
    case "segunda":
        console.log("Vou tomar café");
        break;
    case "quarta":
        console.log("Vou no cinema");
        break;
    default:
        console.log("Eu não vou fazer nada!")
}