/* SNACK 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */

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

/* SNACK 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


// creo l'array di squadre di calcio.
const teams = [
    {
        nameTeam: 'SSC Napoli',
        points: 0,
        fouls: 0
    },
    {
        nameTeam: 'FC Inter',
        points: 0,
        fouls: 0
    },
    {
        nameTeam: 'AC Milan',
        points: 0,
        fouls: 0
    },
    {
        nameTeam: 'AS Roma',
        points: 0,
        fouls: 0
    },
    {
        nameTeam: 'SS Lazio',
        points: 0,
        fouls: 0
    }
];

// creo una funzione che mi genera numeri automatici da 1 a 100
const generateRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 100 + 1);

    return randomNumber;
};

// genero numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
teams.forEach((elem) => {
    elem.points = generateRandomNumber();
    elem.fouls = generateRandomNumber();
});

// usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// dichiaro un array vuoto
const teamsAndFouls = [];

// tramite un forEach vado a riempire l'array vuoto dichiarato precedentemente con solo nome della squadra e falli subiti;
teams.forEach((elem) => {
    let {nameTeam, fouls} = elem;
    teamsAndFouls.push(nameTeam, fouls);
})

// stampo il nuovo array in console
console.log(teamsAndFouls)

/* BONUS 1: SNACK 3
Abbiamo questa lista di articoli di moda:
```
name        type      color
Poppy       tshirt    red
Jumping     occhiali  blue
CrissCross  scarpe    black
Jenny       borsa     pink
```
Questi articoli sono inseriti in un array di oggetti.
Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti. 
*/

// creo l'array che contiene gli articoli di moda
const listItems = [
    {
        name: 'Poppy',
        type: 'tshirt',
        color: 'red'
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue'
    },
    {
        name: 'CrissCross',
        type: 'scarpe',
        color: 'black'
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color: 'pink'
    }
];

// creo una funzione che mi genererà una lettera casuale dell'alfabeto
function randomLetterGenerator(){

    // dichiaro una variabile che mi contiene tutti i caratteri dell'alfabeto
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXTZ"

    // inizializzo una variabile per la lettera che verrà generata
    let randomLetter = '';

    // mi genero un numero variabile da 1 alla lunghezza totale della variabile alphabet
    let randomNum = Math.floor(Math.random() * alphabet.length);

    // dichiaro una variabile che mi conterrà la lettera casuale dell'alfabeto in base al numero casuale generato precedentemente
    randomLetter = alphabet.charAt(randomNum);

    return randomLetter;
};

// tramite la funzione map, creo un nuovo array con la lista degli articoli e aggiungendo la prioprietà position, il cui valore sarà una lettera casuale generata dalla funzione creata prima
let newListItems = listItems.map((elem) => {
    let obj = {
        name: elem.name,
        type: elem.type,
        color: elem.color,
        position: randomLetterGenerator()
    };

    return obj;
});

console.log(newListItems)

/* BONUS 2
Stampare in pagina oltre che in console! */

// SNACK 1
document.getElementById('snack1').innerText = `La bici che pesa di meno è la ${name} con un peso di ${weight} kg.`

// SNACK 2
for (let i=0; i<teamsAndFouls.length; i++){
    document.getElementById('snack2').innerText += `
    La squadra ${teamsAndFouls[i]} ha subito ${teamsAndFouls[i+1]} falli`;
    i++;
}

// SNACK 3
newListItems.forEach((elem) => {
    document.getElementById('snack3').innerText += `
    Nome del capo: ${elem.name}, ${elem.type} di colore ${elem.color}. Etichetta posizione: ${elem.position}`
});


