export type Link = string;

export interface IStarWarsCharacter {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
    films: Link[];
    url: Link;
}

export interface IStarWarsFilm {
    title: string;
    episode_id: number;
    url: string;
}
