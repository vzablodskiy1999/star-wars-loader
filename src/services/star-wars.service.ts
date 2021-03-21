export interface StarWarsServerResponse {
    count: number;
    results: any[];
}

export const starWarsBaseUrl = 'https://swapi.dev/api/';

export const fetchStarWarsCharacters = (page: number, query: string = ''): Promise<StarWarsServerResponse> => {
    return fetch(starWarsBaseUrl + `people/?search=${query}&page=${page}`)
    .then((data) => data.json())
    .catch((e) => {console.log(e.message)});
}

export const fetchStarWarsFilms = (): Promise<StarWarsServerResponse> => {
    return fetch(starWarsBaseUrl + 'films/')
    .then((data) => data.json())
    .catch((e) => {console.log(e.message)});
}