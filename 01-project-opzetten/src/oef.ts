const leeftijdStudent: number = 44;
const achternaam: string = "Moran";
const isStudent: boolean = true;
console.log(
  `De leeftijd van ${achternaam} is ${leeftijdStudent}. Ingeschreven als student is: ${isStudent}`
);

const dagenVanDeWeek: string[] = [
  "Zondag",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
];
const vandaag: string = dagenVanDeWeek[new Date().getDay()];
console.log(`Vandaag is ${vandaag}`);

const persoonInfo: [number, string] = [44, "Moran"];
console.log(`De leeftijd van ${persoonInfo[1]} is ${persoonInfo[0]}`);

enum Windrichting {
  Noord,
  Oost,
  Zuid,
  West,
}

const huidigeWindrichting: Windrichting = Windrichting.Noord;
console.log(`De wind waait naar het ${Windrichting[huidigeWindrichting]}`);

enum Seasons {
  Spring,
  Summer,
  Autumn,
  Winter,
}

const currentSeason: Seasons = Seasons.Autumn;
console.log(`The current season is ${Seasons[currentSeason]}`);
console.log(currentSeason);

enum Planets {
  Mercury = "Small and close to the Sun",
  Venus = "Similar in size to Earth, but very hot",
  Earth = "Our home planet",
  Mars = "The red planet",
  Jupiter = "The largest planet",
  Saturn = "Known for its rings",
  Uranus = "An ice giant",
  Neptune = "A distant blue world",
}

const favoritePlanetInfo: Planets = Planets.Mars;
console.log(`My favorite planet is ${favoritePlanetInfo}`);
console.log(favoritePlanetInfo);

let mijnData: any = "Idris danst ballet";
let externeInput: unknown = "Elke dag in zijn tutu";

console.log(`Mijn data: ${mijnData}`);
console.log(`Externe input: ${externeInput}`);
