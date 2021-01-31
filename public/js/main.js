// exo1

// let multiplicateur  = 5

// for (let i = 0; i <= 9; i++) {
//     console.log(`${multiplicateur}*${i} = ${multiplicateur * i}`);    
// }

// exo2

// let multiplicateur  = 5


// for (let i = 2; i < 10; i++) {
//     console.log(`${multiplicateur}*${i} = ${multiplicateur * i}`);    
// }

// exo3

// for (let i = 21 - 1; i >= 0; i--) {
//     if (i % 2 == 0) {
//         console.log(i);
//     } else {
        
//     }
// }

// exo4

let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]
let longPrenoms = []



// coding16.forEach(element  => {
//     if (element.length < 5) {
//         console.log(element);
//     } else if (element.length < 5) {
//         console.log();
//     }
// });

// coding16.forEach(element => {
//     console.log(element);
//     // if (element.length < 5) {
//     //   console.log(longPrenoms);  
//     // }
// });

// coding16.forEach(element => {
//     console.log(element);
//     if (element.length < 5) {
//         console.log(longPrenoms);
//     }
// });

// Créer un tableau avec les prénoms des gens de la classe
// Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'

// exo5

let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
let GrosseSommes = []
sommes.forEach(element => {
    console.log(element);
    if (element > 60) {
        console.log(GrosseSommes);
    }
});