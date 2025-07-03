/* import generateName from "sillyname";

var sillyName = generateName();

console.log(`My name is ${sillyName}`); */

import superheroes from "superheroes";

const randomIndex = Math.floor(Math.random() * superheroes.length);
const superHeroName = superheroes[randomIndex];

console.log(`My name is ${superHeroName}`);
