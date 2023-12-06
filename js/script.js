// SNACK 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

// creo l'array delle biciclette con nome e peso
const bikes = [
    {
        name: 'VeloBici',
        weight: 12
    },
    {
        name: 'BiciSprint',
        weight: 8
    },
    {
        name:'Bicius2000',
        weight: 10
    },
    {
        name:'TurboBike',
        weight:7
    },
    {
        name:'ZBike',
        weight:9
    }
];

// dichiaro una variabile a cui associo i valori della prima bici dell'array
let bikeMinWeight = bikes[0];

// tramite un forEach confronto il peso di tutte le bici con il peso della variabile dichiarata prima; se il peso della bici in oggetto è minore di quello della variabile, quella bici diventerà la bici con peso minore;
bikes.forEach((elem) => {
    if (elem.weight < bikeMinWeight.weight){
        bikeMinWeight = elem;
    }
})

// stampo in console la bici con peso minore utilizzando destructuring e template literal
const { name, weight } = bikeMinWeight;

console.log(`La bici che pesa di meno è la ${name} con un peso di ${weight} kg.`);


