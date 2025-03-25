"use strict";
const leeftijdStudent = 44;
const achternaam = "Moran";
const isStudent = true;
console.log(`De leeftijd van ${achternaam} is ${leeftijdStudent}. Ingeschreven als student is: ${isStudent}`);
const dagenVanDeWeek = [
    "Zondag",
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
];
const vandaag = dagenVanDeWeek[new Date().getDay()];
console.log(`Vandaag is ${vandaag}`);
const persoonInfo = [44, "Moran"];
console.log(`De leeftijd van ${persoonInfo[1]} is ${persoonInfo[0]}`);
var Windrichting;
(function (Windrichting) {
    Windrichting[Windrichting["Noord"] = 0] = "Noord";
    Windrichting[Windrichting["Oost"] = 1] = "Oost";
    Windrichting[Windrichting["Zuid"] = 2] = "Zuid";
    Windrichting[Windrichting["West"] = 3] = "West";
})(Windrichting || (Windrichting = {}));
const huidigeWindrichting = Windrichting.Noord;
console.log(`De wind waait naar het ${Windrichting[huidigeWindrichting]}`);
var Seasons;
(function (Seasons) {
    Seasons[Seasons["Spring"] = 0] = "Spring";
    Seasons[Seasons["Summer"] = 1] = "Summer";
    Seasons[Seasons["Autumn"] = 2] = "Autumn";
    Seasons[Seasons["Winter"] = 3] = "Winter";
})(Seasons || (Seasons = {}));
const currentSeason = Seasons.Autumn;
console.log(`The current season is ${Seasons[currentSeason]}`);
console.log(currentSeason);
var Planets;
(function (Planets) {
    Planets["Mercury"] = "Small and close to the Sun";
    Planets["Venus"] = "Similar in size to Earth, but very hot";
    Planets["Earth"] = "Our home planet";
    Planets["Mars"] = "The red planet";
    Planets["Jupiter"] = "The largest planet";
    Planets["Saturn"] = "Known for its rings";
    Planets["Uranus"] = "An ice giant";
    Planets["Neptune"] = "A distant blue world";
})(Planets || (Planets = {}));
const favoritePlanetInfo = Planets.Mars;
console.log(`My favorite planet is ${favoritePlanetInfo}`);
console.log(favoritePlanetInfo);
let mijnData = "Idris danst ballet";
let externeInput = "Elke dag in zijn tutu";
console.log(`Mijn data: ${mijnData}`);
console.log(`Externe input: ${externeInput}`);
//# sourceMappingURL=oef.js.map