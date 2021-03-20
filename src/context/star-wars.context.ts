import React from 'react';
import { IStarWarsCharacter, IStarWarsFilm } from '../models/star-wars.model';

export interface StarWarsContextProps {
    count: number;
    characters: IStarWarsCharacter[];
    films: IStarWarsFilm[];
}

const StarWarsContext = React.createContext<StarWarsContextProps>({} as StarWarsContextProps);

export default StarWarsContext;