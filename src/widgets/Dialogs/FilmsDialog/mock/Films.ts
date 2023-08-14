export type Film = {
  title: string;
  url: string;
};

const FILMS: Film[] = [
  { title: "A New Hope", url: "https://swapi.dev/api/films/1/" },
  { title: "The Empire Strikes Back", url: "https://swapi.dev/api/films/2/" },
  { title: "Return of the Jedi", url: "https://swapi.dev/api/films/3/" },
  { title: "The Phantom Menace", url: "https://swapi.dev/api/films/4/" },
  { title: "Attack of the Clones", url: "https://swapi.dev/api/films/5/" },
  { title: "Revenge of the Sith", url: "https://swapi.dev/api/films/6/" },
];

class Films {
  private films: Film[];

  constructor(initialFilms: Film[]) {
    this.films = initialFilms;
  }

  map<T>(callback: (film: Film, index: number) => T): T[] {
    return this.films.map(callback);
  }

  getFilmNamesByUrls(urls: string[]): string {
    const filmNames: string[] = [];

    if (!urls) return "";

    for (const url of urls) {
      const film = this.films.find((film) => film.url === url);
      if (film) {
        filmNames.push(film.title);
      }
    }

    return filmNames.join(", ");
  }
}

export function alignArrays<T>(firstArray: T[], secondArray: T[]): T[] {
  if (firstArray.length !== secondArray.length) {
    return secondArray;
  }

  const alignedArray: T[] = [];

  for (const element of firstArray) {
    if (!secondArray.includes(element)) {
      return secondArray;
    }
    alignedArray.push(element);
  }

  return alignedArray;
}

export default new Films(FILMS);
