// tipo primitivos

//bool
var vOuF = false;
console.log(typeof(vOuF));

// number
var numero = 1;
console.log(typeof(numero));

//string
var nome = 'kayo';
console.log(typeof(nome));

//como declara
var variavel = 'kayo';
variavel = 'lucas'
console.log(variavel);

let variavel2 = 'kayo';
variavel2 = 'lucas'
console.log(variavel2);

const variavel3 = 'kayo';
console.log(variavel3);


//var Global
var escopoGlobal = 'global';
console.log(escopoGlobal);

//variavel Local
function escopoLocal() {
    var escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

//como chamar uma variavael local para o escopo global atraves de uma func
escopoLocal();

//atribuição
var atribuição = 'kayo'

//comparação
var comparação = '0' == 0;
console.log(comparação)

//comparação indentica
var comparaçãoIntentica = '0' === 0;
console.log(comparaçãoIntentica);

//adiccao
var adicao = 1 + 1;
console.log(adicao);

//subtração 
var sub = 2 - 1;
console.log(sub);

//multiplicaçao
var mut = 2 * 3;
console.log(mut);

//divisão real
var divReal = 6 / 3;
console.log(divReal);

//divisão Interira
var divInteira = 5 % 2;
console.log(divInteira);

//potenciação
var pot = 2 ** 10;
console.log(pot);

//mario que
var marQue = 5 > 2;
console.log(marQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior igual
var marIgualA = 5 >= 2;
console.log(marIgualA);

//menor igual
var merIgualA = 5 <= 2;
console.log(menorQue);

//operadores lógicos: 
//"E"
var e = true && false;
console.log(e);

//"OU"
var ou = false || false;
console.log(ou);

//inverter valor
var inverte = !true;
console.log(inverte);