interface User {
  id: number;
  username: string;
  email: string;
}

const user: User = {
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
const user2: User = {
  id: 2,
  username: "gebruikersnaam2",
  email: "gebruiker2@email.com",
};

interface Shape {
  calculateArea(): number;
  calculatePerimeter(): number;
}

// Object dat voldoet aan Shape-interface voor rechthoek
const rectangle: Shape = {
  calculateArea(): number {
    return 10 * 20; // Oppervlakte van de rechthoek
  },
  calculatePerimeter(): number {
    return 2 * (10 + 20); // Omtrek van de rechthoek
  },
};

// Object dat voldoet aan Shape-interface voor driehoek
const triangle: Shape = {
  calculateArea(): number {
    return (1 / 2) * 5 * 8; // Oppervlakte van de driehoek
  },
  calculatePerimeter(): number {
    return 5 + 8 + Math.sqrt(5 ** 2 + 8 ** 2); // Omtrek van de driehoek
  },
};
const square: Shape = {
  calculateArea(): number {
    return (1 / 2) * 5 * 8; // Oppervlakte van de driehoek
  },
  calculatePerimeter(): number {
    return 4 * 5; // Omtrek van het vierkant
  },
};
