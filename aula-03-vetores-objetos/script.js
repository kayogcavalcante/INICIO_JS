//vetores ou arrays
let arrays = ['string', 1, true];
console.log(arrays);

let arrays2 = ['kayo', 1, true, ['array1'],
    ['array2'],
    ['array3'],
    ['array4']
];
console.log(arrays2[3]);

//forEach
arrays2.forEach(function(item, index) {
    console.log(item, index)
});

//push add item no final
arrays2.push('novo item');
console.log(arrays2);

//pop remove item do final
arrays2.pop();
console.log(arrays2);

//shift remote item do inico
arrays2.shift();
console.log(arrays2);

//unshift add item no inicio
arrays2.unshift();
console.log(arrays2);

//indexOf descobre valor do index de um item
console.log(arrays2.indexOf(true));

//splice remove ou substitui um index
arrays2.splice(0, 3);
console.log(arrays2);

//slice retorna paprte de um aray existe
let novoArray = arrays2.splice(0, 3);

//OBJETOS

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objectInterno: {
        objectInterno: 'objetoInterno'
    }
};

console.log(object.objectInterno);

//desetrituração ou manipulação de objetos
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {
    string,
    boolean,
    objectInterno
} = object;
console.log(string, boolean, objectInterno);