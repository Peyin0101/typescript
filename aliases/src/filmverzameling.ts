interface Movie {
  title: string;
  director: string;
  releaseYear: number;
  genre: string;
  duration: number;
  reviews: Review[];
}

type MovieCollection = Movie[];

interface Review {
  rating: number;
  comment?: string;
}

function averageRatingForMovie(movie: Movie): number {
  if (movie.reviews.length === 0) {
    return 0;
  }

  const totalRating = movie.reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  return totalRating / movie.reviews.length;
}

function topRatedMovies(collection: MovieCollection): Movie[] {
  return collection.filter((movie) => averageRatingForMovie(movie) > 4);
}

const movies: MovieCollection = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: "Science Fiction",
    duration: 148,
    reviews: [
      { rating: 4.5, comment: "Een geweldige film!" },
      { rating: 5, comment: "Fantastische plot!" },
    ],
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    genre: "Drama",
    duration: 142,
    reviews: [{ rating: 5, comment: "Meesterwerk!" }, { rating: 4.5 }],
  },
  {
    title: "Rio Lobo",
    director: "Howard Hawks",
    releaseYear: 1970,
    genre: "Western",
    duration: 114,
    reviews: [{ rating: 3.4 }, { rating: 3.5 }],
  },
  // Voeg meer films en beoordelingen toe
];

console.log("Best beoordeelde films:");
const topMovies = topRatedMovies(movies);
topMovies.forEach((movie) => {
  console.log(
    `${movie.title} (${
      movie.releaseYear
    }) - Gemiddelde beoordeling: ${averageRatingForMovie(movie)}`
  );
});
