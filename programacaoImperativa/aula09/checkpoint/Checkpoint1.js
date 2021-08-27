// 1 - Escreve uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha
// A senha válida é o número 1234, deve ser impresso:
// Acesso permitido caso a senha seja válida
// Acesso negado caso a senha seja inválida

function verificaSenha(senha){
    const senhaCorreta = 1234

    if (senha === senhaCorreta){
        console.log ("Acesso permitido")
    } else {
        console.log("Acesso negado")
    }
}

verificaSenha(1234)

// 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor ou se são iguais

function verificaMaior(numA, numB){
    if (numA > numB){
        return console.log(`O número A ${numA} é maior que o número B ${numB}`);
    } else if (numA < numB){
        return console.log(`O número B ${numB} é maior que o número A ${numA}`);
    } else {
        return console.log ("Os numeros são iguais");
    }
}

verificaMaior(10, 2)


// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido
// Quando o enviar o número 9, o retorno será 'Setembro'

let mes = 13
switch(mes){
    case 1: 
        console.log("Janeiro");
        break;
    case 2: 
        console.log("Fevereiro")
        break;
    case 3: 
        console.log("Março");
        break;
    case 4: 
        console.log("Abril");
        break;
    case 5: 
        console.log("Maio");
        break;
    case 6: 
        console.log("Junho");
        break;
    case 7: 
        console.log("Julho");
        break;
    case 8: 
        console.log("Agosto");
        break;
    case 9: 
        console.log("Setembro");
        break;
    case 10: 
        console.log("Outubro");
        break;
    case 11: 
        console.log("Novembro");
        break;
    case 12: 
        console.log("Dezembro");
        break;
    default:
        console.log("Informe um valor válido")
}

// 4 - Reescreva a função do exercício 1, utilizando o operador ternário

function verificaSenha2(senha) {
    senha === 1234 ? console.log("Acesso permitido") : console.log("Acesso negado")

}

console.log('- Exercício 4 - Operador Ternário')
verificaSenha2(1234)

//Projeto Microondas

let escolheOpcao = 6
let tempo
switch(escolheOpcao){
    case 1:                 //1 -Pipoca = 10seg
        presetMenu = 10;
        break;
    case 2:
        presetMenu = 8;     //2 -Macarrão = 8seg
        break;
    case 3:
        presetMenu = 15;    //3 -Carne = 15seg
        break;
    case 4:
        presetMenu = 12     //4 -Feijão = 12seg
        break;
    case 5:
        presetMenu = 8      //5 -Brigadeiro = 8seg
    default:
        presetMenu = NaN
        console.log("Prato inexistente, informe opção válida: de 1 a 5")
        

}

function funcionaMicro(presetMenu, tempo){
    let escolhaUsuario 
    if (tempo !== undefined){
        return escolhaUsuario = tempo
    } else return escolhaUsuario = presetMenu
}


if (funcionaMicro(presetMenu, tempo) >= presetMenu*3) {
    console.log ("💣 Kabummm! Tempo execução: " + funcionaMicro(presetMenu, tempo) + " seg")
    console.log ("Prato pronto, bom apetite!!!")
} else if (funcionaMicro(presetMenu, tempo) >= presetMenu*2 && funcionaMicro(presetMenu, tempo) < presetMenu*3) {
    console.log ("A comida queimou. Tempo execução: " + funcionaMicro(presetMenu, tempo) + " seg")
    console.log ("Prato pronto, bom apetite!!!")
} else if (funcionaMicro(presetMenu, tempo) == presetMenu){
    console.log ("Temperatura recomendada. Tempo execução: " + funcionaMicro(presetMenu, tempo) + " seg")
    console.log ("Prato pronto, bom apetite!!!")
} else if (funcionaMicro(presetMenu, tempo) < presetMenu){
    console.log ("Tempo insuficiente. Tempo execução: " + funcionaMicro(presetMenu, tempo) + " seg")
    console.log ("Prato pronto, bom apetite!!!")
} 







