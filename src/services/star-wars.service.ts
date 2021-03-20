interface Response {
    count: number;
    results: any[];
}

const baseUrl = 'https://swapi.dev/api/';

export const fetchStarWarsCharacters = (page: number, query: string = ''): Promise<Response> => {
    return fetch(baseUrl + `people/?search=${query}&page=${page}`).then((data) => data.json()).catch((e) => console.error(e));
}

export const fetchStarWarsFilms = (): Promise<Response> => {
    return fetch(baseUrl + 'films/').then((data) => data.json()).catch((e) => console.error(e));
}