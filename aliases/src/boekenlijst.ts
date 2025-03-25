interface Book {
  title: string;
  author: string;
  publishedYear: number;
  ISBN: string;
}

type BookList = Book[];

function findBookByAuthor(books: BookList, authorName: string): Book | null {
  return books.find((book) => book.author === authorName) || null;
}

function filterBooksByYear(books: BookList, year: number): BookList {
  return books.filter((book) => book.publishedYear === year);
}

const books: BookList = [
  {
    title: "The Cathcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    ISBN: "9780060939903",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    ISBN: "9780061120084",
  },
  {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    ISBN: "9780415249353",
  },
];

const bookAuthor = findBookByAuthor(books, "J.D. Salinger");
console.log("Boek van J.D. Salinger:", bookAuthor);

const booksfrom1949 = filterBooksByYear(books, 1949);
console.log("Boeken uit 1949:", booksfrom1949);
