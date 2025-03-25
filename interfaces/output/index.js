"use strict";
const user = {
    id: 1,
    username: "john_doe",
    email: "john.doe@example.com",
};
// object aanmaken dat niet aan User-interface voldoet, email ontbreekt
// const user1: User = {
//   id: 1,
//   username: "gebruikersnaam1",
// };
// ander object aanmaken dat wel aan User-interface voldoet
const user2 = {
    id: 2,
    username: "gebruikersnaam2",
    email: "gebruiker2@email.com",
};
// Object dat voldoet aan Shape-interface voor rechthoek
const rectangle = {
    calculateArea() {
        return 10 * 20; // Oppervlakte van de rechthoek
    },
    calculatePerimeter() {
        return 2 * (10 + 20); // Omtrek van de rechthoek
    },
};
// Object dat voldoet aan Shape-interface voor driehoek
const triangle = {
    calculateArea() {
        return (1 / 2) * 5 * 8; // Oppervlakte van de driehoek
    },
    calculatePerimeter() {
        return 5 + 8 + Math.sqrt(5 ** 2 + 8 ** 2); // Omtrek van de driehoek
    },
};
const square = {
    calculateArea() {
        return (1 / 2) * 5 * 8; // Oppervlakte van de driehoek
    },
    calculatePerimeter() {
        return 4 * 5; // Omtrek van het vierkant
    },
};
